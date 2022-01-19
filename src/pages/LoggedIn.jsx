import ConversationsList from "../components/ConversationsList"

function LoggedIn({ load }) {
    const loggedInUser = load('loggedIn')
    return (
        <div className="main-wrapper">
            {/* <!-- Side Panel --> */}
            <aside>
                {/* <!-- Side Header --> */}
                <header className="panel">
                    <img
                        className="avatar"
                        width="50"
                        height="50"
                        src={`https://avatars.dicebear.com/api/avataaars/${loggedInUser.firstName}${loggedInUser.lastName}.svg`}
                        alt=""
                    />
                    <h3>{`${loggedInUser.firstName} ${loggedInUser.lastName}`}</h3>
                </header>

                {/* <!-- Search form --> */}
                <form className="aside__search-container">
                    <input
                        type="search"
                        name="messagesSearch"
                        placeholder="Search chats"
                        value=""
                    />
                </form>

                {/* Side Chat */}

                <ul>
                    {/* <!-- This first item should always be present --> */}
                    <li>
                        <button className="chat-button">
                            <div><h3>+ Start a new Chat</h3></div>
                        </button>
                    </li>

                    <ConversationsList />
                </ul>


                {/* <!-- Side Chat List goes here. Check side-chat-list.html --> */}
            </aside>

            {/* <!-- Main Chat Section --> */}
            <main className="conversation">
                {/* <!-- Chat header --> */}
                <header className="panel"></header>
                {/* <!-- The Messages List will go here. Check main-messages-list.html--> */}

                <ul className="conversation__messages">
                </ul>


                {/* <!-- Message Box --> */}
                <footer>
                    <form className="panel conversation__message-box">
                        <input
                            type="text"
                            placeholder="Type a message"
                            rows="1"
                            value=""
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
        </div>
    )
}

export default LoggedIn