import './Nav.css';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    const style = { color: 'red', fontSize: '2em'}
    return (
        <div className='navbar'>
        
            <NavLink to='/stopwatch'>
            <div className="nav firstnav"><p>Stopwatch</p></div>
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