import './Alarm.css';
import { useState } from 'react';
import IndAlarm from '../IndAlarm/IndAlarm';
import AlarmSelector from '../AlarmSelector/AlarmSelector';

export default function Alarm() {
    let [listOfAlarms, setListOfAlarms] = useState([<IndAlarm key='0' />])
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
           {listOfAlarms}
        <div>
        </div>
        </div>
    )
}