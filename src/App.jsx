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

  function createUser(firstName, lastName, phoneNumber ) {
    fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        avatar: `https://avatars.dicebear.com/api/avataaars/${firstName}${lastName}.svg`
      })
    })
      .then(resp => resp.json())
      .then(newUser => {
        setUsers([...users, newUser])
        setModal('')
      })
  }


  return (
    <>
      <Routes>
        <Route index element={<Navigate to={'/login'} />} />
        <Route path='/login' element={<LogIn users={users} save={save} setModal={setModal} modal={modal} createUser={createUser} />} />
        <Route path='/logged-in' element={<LoggedIn save={save} load={load} users={users} setModal={setModal} modal={modal} />} />
        <Route path='/logged-in/:conversationId' element={<LoggedIn save={save} load={load} users={users} setModal={setModal} modal={modal} />} />
      </Routes>
    </>
  )
}

export default App
