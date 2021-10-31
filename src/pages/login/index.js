import { useState } from 'react'
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle'
import './login.css'

export default function PagesLogin() {
  const [value, setValue] = useState(
    () => window.localStorage.getItem('github_username') || ''
  )

  function onSubmit(event) {
    event.preventDefault()

    window.localStorage.setItem('github_username', value)
    window.location.href = `http://localhost:4000/github-authentication?login=${value}`
  }

  return (
    <div className="PagesLogin">
      <DocumentTitle title='Acesse o sistema' />
      <form className="PagesLogin__form" onSubmit={onSubmit}>
        <div className="PagesLogin__form-control">
          <label htmlFor="username">Github username</label>
          <input
            className="PagesLogin__form-input"
            id="username"
            name="username"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="PagesLogin__submit-button"
        >
          Acessar
        </button>
      </form>
    </div>
  )
}