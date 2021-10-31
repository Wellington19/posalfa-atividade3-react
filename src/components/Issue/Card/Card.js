import './Card.css'

export default function IssueCard({ issue, isSelected, onClick }) {
  return (
    <li
      className={`IssueCard ${isSelected && "IssueCard--selected"}`}
      onClick={onClick}
    >
      <div className="IssueCard__main-info">
        <h3>{issue.title}</h3>
      </div>

      <span className="IssueCard__headline">{issue.resourcePath}</span>
      <span className="IssueCard__headline">{issue.body}</span>
    </li>
  )
}