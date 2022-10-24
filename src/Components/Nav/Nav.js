import './Nav.css';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    const style = { color: 'red', fontSize: '2em'}
    return (
        <div>
            <NavLink to='/stopwatch'>
                Stopwatch
            </NavLink>
            <NavLink to='/timer'>
                Timer
            </NavLink>
            <NavLink to='/clock'>
                Clock
            </NavLink>
            <NavLink to='/alarm'>
                Alarm
             </NavLink>
        </div>
    )
}