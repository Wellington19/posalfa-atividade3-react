import SimpleBar from 'simplebar-react'
import './List.css'

export default function IssueList({ title, loading, children }) {
  return (
    <div className="IssueList">
      <h3>
        {title}
        {loading && <span>Carregando...</span>}
      </h3>

      <SimpleBar style={{ maxHeight: 500 }}>
        <ul className="IssueList__content">{children}</ul>
      </SimpleBar>
    </div>
  )
}