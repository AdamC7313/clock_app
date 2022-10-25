import { useEffect, useState } from 'react';
import './Stopwatch.css';

export default function Stopwatch() {
    let [time, setTime] = useState(0);
    let [timerOn, setTimerOn] = useState(false);
    let [laps, setLaps] = useState([])

    useEffect(() => {

        let interval = null;

        if(timerOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [timerOn])

    function addLap(lapTime) {
        let hours = ("0" + Math.floor((lapTime / 3600000) % 60)).slice(-2)
        let minutes = ("0" + Math.floor((lapTime / 60000) % 60)).slice(-2)
        let seconds = ("0" + Math.floor((lapTime / 1000) % 60)).slice(-2)
        let ms = ("0" + (lapTime / 10) % 100).slice(-2)
        setLaps(prevLaps => [
            ...prevLaps, 
            `${hours}:${minutes}:${seconds}:${ms}`
        ])
    } 

    function reset() {
        setTime(0)
        setLaps([])
    }

    let lapsList = []
        for(let i = 0; i < laps.length; i++) {
            lapsList.push(<div className='ind-lap' key={i}><span className='lap-num'>Lap {i + 1}</span>{laps[i]}</div>)
        }



    return (
        <div>
            <div className='laps'>
                {lapsList}
            </div>
            <div className="stopwatch-clock">
               <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}</span>:
               <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>:
               <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>:
               <span>{("0" + (time / 10) % 100).slice(-2)}</span>
            </div>
            <button className='start-stopwatch' onClick={() => setTimerOn(true)}>Start</button>
            <button className='stop-stopwatch' onClick={() => setTimerOn(false)}>Stop</button>
            <button className='reset-stopwatch' onClick={() => reset()}>Reset</button>
            <button className='lap' onClick={() => addLap(time)}>Lap</button>
        </div>
    )
}