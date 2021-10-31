import { BsBuilding, BsGeoAlt } from 'react-icons/bs'
import './Card.css'

export default function UserCard({ user, isSelected, onClick }) {
  return (
    <li
      className={`UserCard ${isSelected && "UserCard--selected"}`}
      onClick={onClick}
    >
      <div className="UserCard__main-info">
        <h3>{user.name}</h3> <span>{user.login}</span>
      </div>

      <span className="UserCard__headline">{user.bio}</span>

      <div className="UserCard__additional-info">
        {Boolean(user.company) && (
          <span><BsBuilding size="20" /> {user.company}</span>
        )}
        {Boolean(user.location) && (
          <span><BsGeoAlt size="20" /> {user.location}</span>
        )}
      </div>
    </li>
  )
}