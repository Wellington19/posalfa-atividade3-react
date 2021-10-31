import SimpleBar from 'simplebar-react'
import './List.css'

export default function RepositoryList({ title, loading, children }) {
  return (
    <div className="RepositoryList">
      <h3>
        {title}
        {loading && <span>Carregando...</span>}
      </h3>

      <SimpleBar style={{ maxHeight: 500 }}>
        <ul className="RepositoryList__content">{children}</ul>
      </SimpleBar>
    </div>
  )
}