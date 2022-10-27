import './AlarmSelector.css';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import { useEffect, useState } from 'react';
import IndAlarm from '../IndAlarm/IndAlarm';

export default function AlarmSelector(props) {
    let [alarmTime, setAlarmTime] = useState(720000)

    let hours = Math.floor(alarmTime / 60000)
    let minutes = (alarmTime / 1000) % 60

    //click functions
    function handleMinuteDownClick() {
        if(alarmTime > 60000) {
            setAlarmTime(prevCount => prevCount - 60000)
        } else {
            alert('Alarm hour cannot be set to 0.')
        }
    }

    function handleMinuteUpClick() {
        if(alarmTime < 720000) {
            setAlarmTime(prevCount => prevCount + 60000)
        } else {
            alert('Alarm hour cannot be set to greater than 12.')
        }
    }

    function handleSecondDownClick() {
        if(minutes > 0) {
            setAlarmTime(prevCount => prevCount - 1000)
        } else {
            alert('Alarm seconds cannot be negative.')
        }
    }

    function handleSecondUpClick() {
        if(minutes !== 59) {
            setAlarmTime(prevCount => prevCount + 1000)
        } else {
            alert('Alarm minutes cannot be set to greater than 59.')
        }
    }

    const [selectedDays, setSelectedDays] = useState([])

    function handleDayClick(day) {
        let classlistArr = Array.from(document.getElementById(day).classList)
        let classlist = document.getElementById(day).classList
        if(classlistArr.includes('selected-day')) {
            classlist.remove('selected-day')
            setSelectedDays(prevDays => prevDays.filter(eachDay => eachDay.day !== day))
        } else {
            let value;
            classlist.add('selected-day')
            switch(day) {
                case 'M':
                    value = 0
                    break;
                case 'T':
                    value = 1
                    break;
                case 'W':
                    value = 2
                    break;
                case 'TH':
                    value = 3
                    break;
                case 'F':
                    value = 4
                    break;
                case 'SA':
                    value = 5
                    break;
                case 'SU':
                    value = 6
                    break;
            }
            setSelectedDays(prevDays => [...prevDays, {day: day, value: value}])
            console.log(selectedDays)
        }
        
    }
    
    const [AMPM, setAMPM] = useState('AM')
    const AMPMchange = e => {
        setAMPM(e.target.value)
    }



    function addAlarm(hours, minutes, AMPM, selectedDays) {
        if(selectedDays === ['']) {
            alert('Please select a day.')
        } else {
        props.setListOfAlarms(prevAlarms => [...prevAlarms, 
        <IndAlarm hours={hours} minutes={minutes} AMPM={AMPM} selectedDays={selectedDays} key={props.listOfAlarms.length}/>
        ])
        setAlarmTime(720000)
        document.getElementsByClassName('AMPM-alarm')[0].value = 'AM'
        let day = document.getElementsByClassName('day')
        day[0].classList.remove('selected-day')
        day[1].classList.remove('selected-day')
        day[2].classList.remove('selected-day')
        day[3].classList.remove('selected-day')
        day[4].classList.remove('selected-day')
        day[5].classList.remove('selected-day')
        day[6].classList.remove('selected-day')
        setSelectedDays([])
    }
    }

    return(
        <div>
            <GoTriangleUp className='increment minutes-up-alarm' onClick={() => handleMinuteUpClick()}/>
            <GoTriangleUp className='increment seconds-up-alarm' onClick={() => handleSecondUpClick()}/>
            <span className='time-select'>{('0' + hours).slice(-2)}:{('0' + minutes).slice(-2)}</span>
            <span>
                <select name='AMorPM' className='AMPM-alarm' onChange={AMPMchange}>
                    <option className='AMPM-options' value='AM'>AM</option>
                    <option className='AMPM-options' value='PM'>PM</option>
                </select>
            </span>
            <GoTriangleDown className='increment minutes-down-alarm' onClick={() => handleMinuteDownClick()}/>
            <GoTriangleDown className='increment seconds-down-alarm' onClick={() => handleSecondDownClick()}/> 
            <div className='days-container'>
                <h2 id='M' className='day' onClick={() => handleDayClick('M')}>M</h2>
                <h2 id='T' className='day' onClick={() => handleDayClick('T')}>T</h2>
                <h2 id='W' className='day' onClick={() => handleDayClick('W')}>W</h2>
                <h2 id='TH' className='day' onClick={() => handleDayClick('TH')}>TH</h2>
                <h2 id='F' className='day' onClick={() => handleDayClick('F')}>F</h2>
                <h2 id='SA' className='day' onClick={() => handleDayClick('SA')}>SA</h2>
                <h2 id='SU' className='day' onClick={() => handleDayClick('SU')}>SU</h2>
            </div>
            <button className='add-alarm' onClick={() => addAlarm(hours, minutes, AMPM, selectedDays)}>Add Alarm</button>
        </div>
    )
}