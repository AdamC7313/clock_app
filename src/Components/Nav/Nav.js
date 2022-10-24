import './Nav.css';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <div className='navbar'>
            <NavLink to='/stopwatch'>
            <div className="nav firstnav"><p><span>Stopwatch</span></p></div>
            </NavLink>
            <NavLink to='/timer'>
            <div className="nav middlenav">Timer</div>
            </NavLink>
            <NavLink to='/clock'>
            <div className="nav middlenav">Clock</div>
            </NavLink>
            <NavLink to='/alarm'>
            <div className="nav lastnav">Alarm</div>
             </NavLink>
        </div>
    )
}