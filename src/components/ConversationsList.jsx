function ConversationsList({user, setConversation}) {
    return (
        <>
            <li key={user.id}>
                <button className="chat-button" onClick={() => setConversation(user.id)}>
                    <img
                        className="avatar"
                        height="50"
                        width="50"
                        alt=""
                        src={`https://avatars.dicebear.com/api/avataaars/${user.firstName}${user.lastName}.svg`}
                    />
                    <div>
                        <h3>{user.firstName} {user.lastName}</h3> {/* user.name */}
                        <p>Last message</p> {/* user.lastMessage */}
                    </div>
                </button>
            </li>
        </>
    )
}

export default ConversationsList