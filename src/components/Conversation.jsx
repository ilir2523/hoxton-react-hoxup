function Conversation({ message, outgoing }) {
    return (
        <li className={outgoing ? 'outgoing' : 'incoming' }>
            <p>{message.messageText}</p>
        </li>
    )
}

export default Conversation