function ConversationsList({talkingToUser, conversation, navigate }) {
    return (
            <li>
                <button className="chat-button"
                 onClick={() => {navigate(`/logged-in/${conversation.id}`) }}>
                    <img
                        className="avatar"
                        height="50"
                        width="50"
                        alt=""
                        src={`https://avatars.dicebear.com/api/avataaars/${talkingToUser.firstName}${talkingToUser.lastName}.svg`}
                    />
                    <div>
                        <h3>{talkingToUser.firstName} {talkingToUser.lastName}</h3> {/* user.name */}
                        <p>Last message</p> {/* user.lastMessage */}
                    </div>
                </button>
            </li>

    )
}

export default ConversationsList