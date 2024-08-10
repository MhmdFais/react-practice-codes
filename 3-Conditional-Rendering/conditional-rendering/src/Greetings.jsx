function Greetings(props) {
    
    return (
        props.isLoggedIn ? <h1>Welcome, {props.userName}!</h1> : <h1>Welcome, Guest!</h1>
    );

}

export default Greetings;