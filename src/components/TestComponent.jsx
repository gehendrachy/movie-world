import React, { useRef, useState } from 'react'

function Test() {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);
    
    function handleStart() {

        setStartTime(Date.now());
        setNow(Date.now());
        
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
            // console.log(Date.now());
        }, 100);
        // console.log(intervalRef);
    }
    
    let secondsPassed = 0;
    if(startTime != null && now != null){
        secondsPassed = (now - startTime) / 1000;
        secondsPassed = secondsPassed.toFixed(3);
    }
    
    function handleStop() {
        
        clearInterval(intervalRef.current);
    }
    
    return (
        <>
            <h1> Time Passed :  {secondsPassed} </h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}

export default Test