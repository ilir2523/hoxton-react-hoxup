function StartChatWrapper({ setModal, users, usersIHaveNotTalkedToYet, createConversation }) {
  return (
    <div className="modal-wrapper" onClick={() => setModal('')} >
      <div className="modal">
        <button className="modal__close-btn" onClick={() => setModal('')}>X </button>
        <h2 className="title">Pick a user to talk to</h2>
        {usersIHaveNotTalkedToYet.length > 0 ? (
          <ul>
            {usersIHaveNotTalkedToYet.map(user => (
              <li key={user.id}>
                <button
                  className='chat-button'
                  onClick={() => {
                    createConversation(user.id)
                  }}
                >
                  <img
                    className='avatar'
                    height='50'
                    width='50'
                    alt=''
                    src={user.avatar}
                  />
                  <div>
                    <h3>
                      {user.firstName} {user.lastName}
                    </h3>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No new person to talk to</p>
        )}
      </div>
    </div>
  )
}

export default StartChatWrapper