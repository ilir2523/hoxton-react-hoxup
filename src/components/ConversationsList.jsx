function ConversationsList() {
    return (
        <>
            <li>
                <button className="chat-button">
                    <img
                        className="avatar"
                        height="50"
                        width="50"
                        alt=""
                        src="https://robohash.org/2"
                    />
                    <div>
                        <h3>Tin Man</h3> {/* user.name */}
                        <p>Last message</p> {/* user.lastMessage */}
                    </div>
                </button>
            </li>
            <li>
                <button className="chat-button">
                    <img
                        className="avatar"
                        height="50"
                        width="50"
                        alt=""
                        src="https://robohash.org/3"
                    />
                    <div>
                        <h3>Carl T-800</h3>
                        <p>Last message</p>
                    </div>
                </button>
            </li>
        </>
    )
}

export default ConversationsList