import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import MainChat from "../components/MainChat"
import ConversationsList from "../components/ConversationsList"
import Header from "../components/Header"
import StartChatWrapper from "../components/StartChatWrapper"


function LoggedIn({ save, load, users, setModal, modal }) {

    const [conversations, setConversations] = useState([])
    const params = useParams()
    const navigate = useNavigate()
    const loggedInUser = load('loggedIn')

    const usersIHaveNotTalkedToYet = users.filter(user => {
        if (loggedInUser && user.id === loggedInUser.id) return false

        for (const conversation of conversations) {
            if (conversation.userId === user.id) return false
            if (conversation.participantId === user.id) return false
          }

          return true
    })

    useEffect(() => {
        if (loggedInUser === null) navigate('/')
    }, [])

    useEffect(() => {
        if (load('loggedIn') === null) return
        if (!loggedInUser) return;
        fetch(`http://localhost:4000/conversations?userId=${loggedInUser.id}`)
            .then(resp => resp.json())
            .then(conversations => setConversations(conversations))
    }, [])

    function createConversation (participantId) {
        fetch('http://localhost:4000/conversations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userId: loggedInUser.id,
            participantId: participantId
          })
        })
          .then(resp => resp.json())
          .then(newConversation => {
            setConversations([...conversations, newConversation])
            setModal('')
          })
      }

    if (loggedInUser === null) return <h1>Not signed in...</h1>

    return (
        <div className="main-wrapper">
            <aside>
                <Header loggedInUser={loggedInUser} save={save} load={load} />

                <form className="aside__search-container">
                    <input
                        type="search"
                        name="messagesSearch"
                        placeholder="Search chats"
                    />
                </form>

                {/* Side Chat */}
                <ul>
                    <li>
                        <button className="chat-button" onClick={() => setModal('start-chat')} >
                            <div><h3>+ Start a new Chat</h3></div>
                        </button>
                    </li>
                    {conversations.map(conversation => {
                        const talkingToId =
                            loggedInUser.id === conversation.userId
                                ? conversation.participantId
                                : conversation.userId

                        const talkingToUser = users.find(user => user.id === talkingToId)

                        if (!talkingToUser) return null
                        return (
                            <ConversationsList navigate={navigate} conversation={conversation} key={talkingToUser.id} talkingToUser={talkingToUser} />
                        )
                    })}
                </ul>
            </aside>
            {modal === 'start-chat' ? <StartChatWrapper 
             users={users} 
             setModal={setModal}
             usersIHaveNotTalkedToYet={usersIHaveNotTalkedToYet} 
             createConversation={createConversation} 
             /> : null}
            {params.conversationId ? <MainChat loggedInUser={loggedInUser} /> : null}
        </div>
    )
}

export default LoggedIn