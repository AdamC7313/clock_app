import './IndAlarm.css';

export default function IndAlarm(props) {

    props.selectedDays.sort((a, b) => a.value - b.value)
    console.log(props.selectedDays)

    let sortedDays = []

    props.selectedDays.forEach(function(obj) {
        sortedDays.push(obj.day)
    })

    console.log(sortedDays)

    return (
        <div className='new-alarm-container'>
            <span className='new-alarm-time'>{('0' + props.hours).slice(-2)}:{('0' + props.minutes).slice(-2)}</span>
            <span className='new-alarm-AMPM'>{props.AMPM}</span>
            <span className='new-alarm-selected-days'>{sortedDays.join('   ')}</span>
            <span className='delete-alarm'></span>
        </div>
    )
}