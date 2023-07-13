import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px"

            }}>

            <p style={{
                color: "#8B8B8B"
            }}>Số lượng: </p>
            <button style={{
                marginLeft: "5px",
                marginRight: "10px",
                width:"20px",
                color: "#091156",
                backgroundColor: "#fff",
                border: "1px solid #8B8B8B",
                "&:hover":{
                    backgroundColor: "red",
                  },
            }} onClick={decrement}>-</button>
            {count }
            <button style={{
                marginLeft: "10px",
                width:"20px",
                color: "#091156",
                backgroundColor: "#fff",
                border: "1px solid #8B8B8B"
            }} onClick={increment}>+</button>
        </div>
    );
}

export default Counter;
