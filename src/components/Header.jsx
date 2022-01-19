export default function Header({ loggedInUser }) {
    return (
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
    )
}