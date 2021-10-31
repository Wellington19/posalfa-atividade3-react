import { gql } from '@apollo/client'

const RepositoriesQ = gql`
  query Repositories($username: String!) {
    user(login: $username) {
      id
      repositories(first: 10) {
        totalCount
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          name
          stargazerCount  
          forkCount 
          languages(first: 10) {
            totalCount
            nodes {
              name
            }
          }
          issues(last: 10) {
            totalCount
            nodes {
              id
              title
              body
              resourcePath
            }
          }
        }        
      }
    }
  }
`
export default RepositoriesQ