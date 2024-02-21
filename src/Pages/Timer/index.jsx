import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState(0);
    const [inputTime, setInputTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timerId;
        if (isRunning) {
            timerId = setInterval(() => {
                if (time === 60) {
                    setIsRunning(false);
                    clearInterval(timerId);
                } else {
                    setTime((prevTime) => prevTime + 1);
                }
            }, 1000);
        }
        return () => {
            clearInterval(timerId);
        };
    }, [isRunning, time]);

    const handleStart = () => {
        setIsRunning(true);
        setTime(0);
    };

    const handlePause = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(true);
        setTime(0);
    };

    const handleInputChange = (event) => {
        setInputTime(parseInt(event.target.value));
    };

    const handleInputEnter = (event) => {
        if (event.key === 'Enter') {
            setIsRunning(true);
            setTime(inputTime);
        }
    };

    return (
        <div>
            <div>Timer: {time}</div>
            <input
                type="number"
                placeholder="Enter Time"
                value={inputTime}
                onChange={handleInputChange}
                onKeyDown={handleInputEnter}
            />
            <button onClick={handleStart}>Start</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Timer;
