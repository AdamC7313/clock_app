import './Alarm.css';
import { useState } from 'react';
import AlarmSelector from '../AlarmSelector/AlarmSelector';

export default function Alarm() {
    let [listOfAlarms, setListOfAlarms] = useState([])
    let [hours, setHours] = useState(0)
    let [minutes, setMinutes] = useState(0)

    return (
        <div>
           <AlarmSelector 
            setHours={setHours}
            hours={hours}
            setMinutes={setMinutes}
            minutes={minutes}
            listOfAlarms={listOfAlarms}
            setListOfAlarms={setListOfAlarms} 
            /> 
           <span className='list-of-alarms'>{listOfAlarms}</span>
        <div>
        </div>
        </div>
    )
}