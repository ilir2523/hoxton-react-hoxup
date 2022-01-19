import { useEffect, useState } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import LoggedIn from "./pages/LoggedIn"
import LogIn from "./pages/LogIn"

function App() {
  const [users, setUsers] = useState([])
  const [modal, setModal] = useState('')

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
        <Route path='/login' element={<LogIn users={users} save={save} setModal={setModal} modal={modal} />} />
        <Route path='/logged-in' element={<LoggedIn load={load} users={users} setModal={setModal} modal={modal} />} />
        <Route path='/logged-in/:conversationId' element={<LoggedIn load={load} users={users} setModal={setModal} modal={modal} />} />
      </Routes>
    </>
  )
}

export default App
