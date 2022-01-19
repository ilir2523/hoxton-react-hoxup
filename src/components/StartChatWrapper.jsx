function StartChatWrapper({ setModal, users }) {
    function handleClick() {
        console.log('Conversation createt')
    }

    return (
        <div className="modal-wrapper" onClick={() => setModal('')} >
            <div className="modal">
            <button className="modal__close-btn"  onClick={() => setModal('')}>X </button>
                <h2 className="title">Pick a user to talk to</h2>
                <ul>
                    {users.map(user =>
                        <li key={user.id}>
                            <button className="user-selection" onClick={() => {
                                handleClick()
                                // save('loggedIn', user)
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
                </ul>
            </div>
        </div>
    )
}

export default StartChatWrapper