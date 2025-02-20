import { useState } from 'react';
import "../Counter/Counter.css";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className='container'>
            <h1>Counter</h1>
            <p>You clicked {count} times</p>
            <button className="counterBtn" onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}