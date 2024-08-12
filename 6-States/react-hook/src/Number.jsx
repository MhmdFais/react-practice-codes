import {useState} from "react";

function Number(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {(count > 0) ? setCount(count - 1) : setCount(0);}

    const reset = () => {
        setCount(0);
    }

    return(
        <div className="mainBody">
            <div className="countDiv">
                <p>{count}</p>
            </div>
            <div className="buttonDiv">
                <button className="button" onClick={increment}>Increment</button>
                <button className="button" onClick={decrement}>Decrement</button>
                <button className="button" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Number;