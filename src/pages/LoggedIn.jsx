import { useState } from "react"
import { useParams } from "react-router-dom"
import MainChat from "../components/Chat"
import ConversationsList from "../components/ConversationsList"
import Header from "../components/Header"
import StartChatWrapper from "../components/StartChatWrapper"


function LoggedIn({ load, users, setModal, modal }) {
    const [conversation, setConversation] = useState([])
    const params = useParams()

    const loggedInUser = load('loggedIn')
    return (
        <div className="main-wrapper">
            <aside>
                <Header loggedInUser={loggedInUser} />

                <form className="aside__search-container">
                    <input
                        type="search"
                        name="messagesSearch"
                        placeholder="Search chats"
                    />
                </form>

                {/* Side Chat */}
                <ul>
                    {/* <!-- This first item should always be present --> */}
                    <li>
                        <button className="chat-button" onClick={() => setModal('start-chat')} >
                            <div><h3>+ Start a new Chat</h3></div>
                        </button>
                    </li>
                    {users.filter(user => user.id < 3).map(user =>
                        <ConversationsList user={user} setConversation={setConversation} />
                    )}
                </ul>
            </aside>
            {modal === 'start-chat' ? <StartChatWrapper users={users} setModal={setModal} /> : null}

            {/* <!-- Main Chat Section --> */}

            {/* <!-- Chat header --> */}
            {params.conversationId ? <MainChat /> : null}

        </div>
    )
}

export default LoggedIn