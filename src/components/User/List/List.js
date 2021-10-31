import SimpleBar from 'simplebar-react'
import './List.css'

export default function UserList({ title, loading, children }) {
  return (
    <div className="UserList">
      <h3>
        {title}
        {loading && <span>Carregando...</span>}
      </h3>

      <SimpleBar style={{ maxHeight: 500 }}>
        <ul className="UserList__content">{children}</ul>
      </SimpleBar>
    </div>
  )
}