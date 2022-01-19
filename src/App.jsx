import { useEffect, useState } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import LoggedIn from "./pages/LoggedIn"
import LogIn from "./pages/LogIn"

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/users')
      .then(resp => resp.json())
      .then(usersFromServer => setUsers(usersFromServer))
  }, [])

  function save(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  function load(key) {
    return JSON.parse(localStorage.getItem(key))
  }

  console.log(users)

  return (
    <>
      <Routes>
        <Route index element={<Navigate to={'/login'} />} />
        <Route path='/login' element={<LogIn users={users} save={save} />} />
        <Route path='/logged-in' element={<LoggedIn load={load} />} />
      </Routes>
    </>
  )
}

export default App