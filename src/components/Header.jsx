import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Header({save, load, loggedInUser }) {
    let navigate = useNavigate()

    useEffect(() => {
        if (load('loggedIn') === null) navigate('/')
      }, [])

    return (
        <header className="panel">
            <img
                className="avatar"
                width="50"
                height="50"
                src={`https://avatars.dicebear.com/api/avataaars/${loggedInUser.firstName}${loggedInUser.lastName}.svg`}
                alt=""
            />
            <h3>{`${loggedInUser.firstName} ${loggedInUser.lastName}`}</h3>
            <button onClick={() => {
                save('loggedIn', null) 
                navigate('/')
        }}>Log Out</button>
        </header>
    )
}