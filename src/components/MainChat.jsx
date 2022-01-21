import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Conversation from "./Conversation";

export default function MainChat({ loggedInUser }) {
    const [currentConversation, setCurrentConversation] = useState(null)

    const params = useParams()

    function createMessage(text) {
        // create a message on the server ✅

        fetch('http://localhost:4000/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: loggedInUser.id,
                messageText: text,
                conversationId: Number(params.conversationId)
            })
        })
            .then(resp => resp.json())
            .then(newMessage => {
                const currentConversationCopy = JSON.parse(
                    JSON.stringify(currentConversation)
                )
                currentConversationCopy.messages.push(newMessage)
                setCurrentConversation(currentConversationCopy)
            })

        // update the conversation state
    }

    useEffect(() => {
        if (params.conversationId) {
            fetch(
                `http://localhost:4000/conversations/${params.conversationId}?_embed=messages`
            )
                .then(resp => resp.json())
                .then(conversation => setCurrentConversation(conversation))
        }
    }, [params.conversationId])

    if (currentConversation === null) return <h1>Loading...</h1>


    return (
        <main className="conversation">
            <header className="panel">
                {/* <img
                    className="avatar"
                    width="50"
                    height="50"
                    src={participant.avatar}
                    alt=""
                />
                <h3>{`${participant.firstName} ${participant.lastName}`}</h3> */}
            </header>
            {/* <!-- The Messages List will go here. Check main-messages-list.html--> */}

            <ul className="conversation__messages">
                {currentConversation.messages.map(message =>
                    <Conversation
                        key={message.id}
                        message={message}
                        outgoing={message.userId === loggedInUser.id}
                    />)}
            </ul>


            {/* <!-- Message Box --> */}
            <footer>
                <form className="panel conversation__message-box" onSubmit={(e) => {
                    e.preventDefault()
                    createMessage(e.target.text.value)
                    e.target.reset()
                }}>
                    <input
                        type="text"
                        placeholder="Type a message"
                        rows="1"
                        name="text"
                        autoComplete="off"

                    /><button type="submit">
                        {/* <!-- This is the send button --> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                        >
                            <path
                                fill="currentColor"
                                d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
                            ></path>
                        </svg>
                    </button>
                </form>
            </footer>
        </main>
    )
}