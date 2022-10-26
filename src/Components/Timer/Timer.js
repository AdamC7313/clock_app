import './Timer.css';
import { useState, useEffect } from 'react';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';

export default function Timer() {
    let [countdown, setCountdown] = useState(0)
    let [timerOn, setTimerOn] = useState(false)
    let [arrows, setArrows] = useState([
        <GoTriangleUp key='1' className='minute-up' onClick={() => setCountdown(prevCount => prevCount + 60000)} />,
        <GoTriangleUp  key='2' className='second-up' onClick={() => setCountdown(prevCount => prevCount + 1000)} />,
        <GoTriangleDown key='3' className='second-down' onClick={() => handleSecondDownClick()}/>,
        <GoTriangleDown key='4' className='minute-down' onClick={() => handleMinuteDownClick()}/>
    ])

    let arrowsHolder = [
        <GoTriangleUp key='1' className='minute-up' onClick={() => setCountdown(prevCount => prevCount + 60000)} />,
        <GoTriangleUp  key='2' className='second-up' onClick={() => setCountdown(prevCount => prevCount + 1000)} />,
        <GoTriangleDown key='3' className='second-down' onClick={() => handleSecondDownClick()}/>,
        <GoTriangleDown key='4' className='minute-down' onClick={() => handleMinuteDownClick()}/>
    ]

    useEffect(() => {

        let interval = null;

        if(timerOn && countdown > 0) {
            interval = setInterval(() => {
                setCountdown(prevTime => prevTime - 1000)
            }, 1000)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [timerOn])

    useEffect(() => {
        if(countdown === 0) {
            setTimerOn(false)
        }
    }, [countdown])

    function handleMinuteDownClick() {
        if(countdown > 59000) {
            setCountdown(prevCount => prevCount - 60000)
        } else {
            alert('Cannot set time to a negative number.')
        }
    }

    function handleSecondDownClick() {
        if(countdown > 0) {
            setCountdown(prevCount => prevCount - 1000)
        } else {
            alert('Cannot set time to a negative number.')
        }
    }

    function handleTimerOn() {
        setTimerOn(true)
        setArrows([])
    }
    
    function handleTimerOff() {
        setTimerOn(false)
        setArrows(arrowsHolder)
    }

    function handleTimerReset() {
        setTimerOn(false)
        setArrows(arrowsHolder)
        setCountdown(0)
    }

    useEffect(() => {
        if(countdown === 0) {
            setArrows(arrowsHolder)
        }
    }, [countdown])

    return (
        <div>
            {arrows}
            <div className="countdown">
                <span>{('0' + Math.floor(countdown / 60000)).slice(-2)}</span>:
                <span>{('0' + (countdown / 1000) % 60).slice(-2)}</span>
            </div>
            <button className='start-timer' onClick={() => handleTimerOn()}>Start</button>
            <button className='stop-timer' onClick={() => handleTimerOff()}>Stop</button>
            <button className='reset-timer' onClick={() => handleTimerReset()}>Reset</button>
        </div>
    )
}