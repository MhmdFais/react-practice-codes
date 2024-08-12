function Button(){
    
    //1
    // const handleClick = () => console.log('Button clicked');

    //2
    // const handleClick = (name) => console.log(`Hello ${name}`);

    //3
    let clicks = 0
    const handleClick = (name) => {
        if (clicks <  3){
            console.log(`${name} clicked me ${clicks+1} times`); 
            clicks += 1;
        }
        else {
            console.log(`Hello ${name} stop clicking me`);
        }
    };

    return(
        //1
        // <button className="btn" onClick={handleClick}>Click me</button>

        //2
        // <button className="btn" onClick={() => handleClick('John')}>Click me</button>

        //3
        <button className="btn" onClick={() => handleClick('John')}>Click me</button>
    );
}

export default Button;

// ALSO "onDoubleClick" EVENT IS AVAILABLE
// YOU CAN ALSO ADD "onClick" EVENT TO ANY HTML ELEMENT