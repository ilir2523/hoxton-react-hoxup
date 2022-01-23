import { useNavigate } from "react-router-dom"
import SignUpWraper from "../components/SignUpWraper"

function LogIn({ users, save, setModal, modal }) {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/logged-in')
    }

    return (
        <div className="main-wrapper login">
            <section className="login-section">
                <h2>Choose your user!</h2>
                <ul>
                    {users.map(user =>
                        <li key={user.id}>
                            <button className="user-selection" onClick={() => {
                                handleClick()
                                save('loggedIn', user)
                            }}>
                                <img
                                    className="avatar"
                                    width="50"
                                    height="50"
                                    src={`https://avatars.dicebear.com/api/avataaars/${user.firstName}${user.lastName}.svg`}
                                    alt=""
                                />
                                <h3>{`${user.firstName} ${user.lastName}`}</h3>
                            </button>
                        </li>
                    )}
                    <li>
                        <button className="chat-button" onClick={() => setModal('sign-up')} >
                            <div><h3>+ Add a new user</h3></div>
                        </button>
                    </li>
                    {modal === 'sign-up' ? <SignUpWraper setModal={setModal} /> : null }
                </ul>
            </section>
        </div>
    )
}

export default LogIn