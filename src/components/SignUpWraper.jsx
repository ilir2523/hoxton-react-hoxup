function SignUpWraper({ setModal }) {
    return (
        <div className="modal-wrapper" onClick={() => setModal('')} >
            <div className="modal">
                <button className="modal__close-btn"  onClick={() => setModal('')}>x Close</button>
                <h2 className="title">Sign Up</h2>
                <form className="profile-form">
                    <label htmlFor="user-firstName">First name</label>
                    <input type="text" id="user-firstName"></input>
                    <label htmlFor="user-lastName">Last name</label>
                    <input type="text" id="user-lastName"></input>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone"></input>
                    <button className="signin-button" type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUpWraper