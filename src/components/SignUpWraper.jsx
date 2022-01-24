function SignUpWraper({ setModal, createUser }) {
    return (
        <div className="modal-wrapper" >
            <div className="modal">
                <button className="modal__close-btn" onClick={() => setModal('')}>x Close</button>
                <h2 className="title">Sign Up</h2>
                
                <form className="profile-form" onSubmit={(e) => {
                    e.preventDefault()
                    createUser(e.target.firstName.value, e.target.lastName.value, e.target.phone.value)
                }}>
                
                    <label htmlFor="user-firstName">First name</label>
                    <input type="text" id="user-firstName" name="firstName"></input>
                    <label htmlFor="user-lastName">Last name</label>
                    <input type="text" id="user-lastName" name="lastName"></input>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone"></input>
                    <button className="signin-button" type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUpWraper