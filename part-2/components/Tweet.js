const Tweet = ({username, user, date, msg}) => (
        <div className="tweet">
            <div>
                <span>User: {user} </span>
                <span>Username: {username} </span>
                <span>Date: {date}</span>
            </div>
            <p>{msg}</p>
        </div>
    )