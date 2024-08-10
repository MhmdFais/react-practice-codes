function Greetings(props) {
    
    return (
        props.isLoggedIn ? <h1 className="welcome-text">Welcome, {props.userName}!</h1> : <h1 className="login-text">Welcome, Guest!</h1>
    );

}

export default Greetings;