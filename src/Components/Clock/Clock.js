import './Clock.css';
import { useEffect, useState } from 'react';

export default function Clock() {
    let [hour  , setHour  ] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    /*const [day   , setDay   ] = useState(0);
    const [pm    , setPm    ] = useState(false);
    const [timezone, setTimezone] = useState('ET')*/

    useEffect(() => {

    const update = () => {
        const date = new Date();
        let hour = date.getHours();
        if(hour > 12) {
            hour = (hour % 12) || 12;
        }
        setHour(hour);
        setMinute(date.getMinutes());
        setSecond(date.getSeconds());
    }

    update();

    const interval = setInterval(() => {
        update();
    }, 1000);

        return ()=>clearInterval(interval);

    }, []);


    return (
        <div>
            <div className='time-and-timezone'>
            <div className='current-time'>
                {`${hour}:${('0' + minute).slice(-2)}:${('0' + second).slice(-2)}`}
                <span className='AMPM'>{hour > 12 ? 'AM' : 'PM'}</span>
            </div><br />
            {/* <h2 className='timezone-words'>Choose Timezone:</h2>
            <select name='timezone' id='choose-timezone'>
                <option value='ET'>ET</option>
                <option value='CT'>CT</option>
                <option value='MT'>MT</option>
                <option value='PT'>PT</option>
            </select> */}
            </div>
        </div>
    )
}