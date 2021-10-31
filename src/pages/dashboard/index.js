import { useState } from 'react'
import { useQuery } from '@apollo/client'

import UserList from '../../components/User/List/List'
import UserCard from '../../components/User/Card/Card'
import RepositoryList from '../../components/Repository/List/List'
import RepositoryCard from '../../components/Repository/Card/Card'
import IssueList from '../../components/Issue/List/List'
import IssueCard from '../../components/Issue/Card/Card'
import FollowersQ from './graphql/FollowersQ'
import FollowingsQ from './graphql/FollowingsQ'
import RepositoriesQ from './graphql/RepositoriesQ'

import './dashboard.css'

export default function PagesDashboard() {
  const [selectedUser, setSelectedUser] = useState(null)
  const [selectedRepository, setSelectedRepository] = useState(null)
  const [selectedIssue, setSelectedIssue] = useState(null)
  const [username] = useState(() => window.localStorage.getItem('github_username') || '')

  const { data: follower, error: followerError, loading: followerLoading } = useQuery(FollowersQ, {
    variables: {
      username
    }
  })

  const { data: following, error: followingError, loading: followingLoading } = useQuery(FollowingsQ, {
    variables: {
      username
    }
  })

  const { data: repository, error: repositoryError, loading: repositoryLoading } = useQuery(RepositoriesQ, {
    variables: {
      username
    }
  })


  const error = followerError || followingError || repositoryError

  return (
    <div>
      <header className="PagesDashboard__topbar">
        {username}
      </header>

      {error ? (
        <div>Algo de errado</div>
      ) : (
        <section className="PagesDashboard__content">
          <UserList title="Followers" loading={followerLoading}>
            {follower?.user?.followers?.nodes.map(follower => (
              <UserCard
                key={follower.id}
                user={follower}
                isSelected={selectedUser === follower.login}
                setSelectedUser={setSelectedUser}
                onClick={() => setSelectedUser(follower.login)}
              />
            ))}
          </UserList>

          <UserList title="Following" loading={followingLoading}>
            {following?.user?.following?.nodes.map(following => (
              <UserCard
                key={following.id}
                user={following}
                isSelected={selectedUser === following.login}
                onClick={() => setSelectedUser(following.login)}
              />
            ))}
          </UserList>

          <RepositoryList title="Repositories" loading={repositoryLoading}>
            {repository?.user?.repositories?.nodes.map(repository => (
              <RepositoryCard
                key={repository.id}
                repository={repository}
                isSelected={selectedRepository === repository.name}
                onClick={() => setSelectedRepository(repository.name)}
              />
            ))}
          </RepositoryList>

          <IssueList title="Issues" loading={repositoryLoading}>
            {repository?.user?.repositories?.nodes
              .filter(repository => repository.name === selectedRepository)
              .map(repository => (
                repository?.issues?.nodes.map(issue => (
                  <IssueCard
                    key={issue.id}
                    issue={issue}
                    isSelected={selectedIssue === issue.title}
                    onClick={() => setSelectedIssue(issue.title)}
                  />
                ))
              ))}
          </IssueList>
        </section>
      )
      }
    </div >
  )
}