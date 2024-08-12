function Button(){
    
    const handleClick = () => console.log('Button clicked');

    return(
        <button className="btn" onClick={handleClick}>Click me</button>
    );
}

export default Button;