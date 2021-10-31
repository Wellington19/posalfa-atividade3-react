import { GoStar, GoRepoForked } from "react-icons/go"
import './Card.css'

export default function RepositoryCard({ repository, isSelected, onClick }) {
  return (
    <li
      className={`RepositoryCard ${isSelected && "RepositoryCard--selected"}`}
      onClick={onClick}
    >
      <h3>{repository?.name}</h3>
      <div className="RepositoryCard__additional-info">
        <span>
          <GoStar /> {repository?.stargazerCount || 0}
        </span>
        <span>
          <GoRepoForked /> {repository?.forkCount || 0}
        </span>
        {repository?.languages?.nodes[0]?.name && <span>{repository.languages.nodes[0].name}</span>}
      </div>
    </li>
  )
}