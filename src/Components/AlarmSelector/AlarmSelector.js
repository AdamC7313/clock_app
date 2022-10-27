import './AlarmSelector.css';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import { useEffect, useState } from 'react';
import IndAlarm from '../IndAlarm/IndAlarm';

export default function AlarmSelector(props) {
    let [alarmTime, setAlarmTime] = useState(770000)

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
        } else {
            classlist.add('selected-day')
        }
        setSelectedDays(prevDays => [...prevDays, day])
    }
    
    const [AMPM, setAMPM] = useState('AM')
    const AMPMchange = e => {
        setAMPM(e.target.value)
    }




    function addAlarm(hours, minutes, AMPM, selectedDays) {
        props.setListOfAlarms(prevAlarms => [...prevAlarms, 
        <IndAlarm hours={hours} minutes={minutes} AMPM={AMPM} selectedDays={selectedDays} />
        ])
        console.log(props.listOfAlarms)
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
                <h2 id='mon' className='day' onClick={() => handleDayClick('mon')}>M</h2>
                <h2 id='tues' className='day' onClick={() => handleDayClick('tues')}>T</h2>
                <h2 id='wed' className='day' onClick={() => handleDayClick('wed')}>W</h2>
                <h2 id='thurs' className='day' onClick={() => handleDayClick('thurs')}>T</h2>
                <h2 id='fri' className='day' onClick={() => handleDayClick('fri')}>F</h2>
                <h2 id='sat' className='day' onClick={() => handleDayClick('sat')}>S</h2>
                <h2 id='sun' className='day' onClick={() => handleDayClick('sun')}>S</h2>
            </div>
            <button className='add-alarm' onClick={() => addAlarm(hours, minutes, AMPM, selectedDays)}>Add Alarm</button>
        </div>
    )
}