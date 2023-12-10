import './Main.css';
// import {Link, NavLink} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

function Menu(){
    return(
        <div className="Menu">
            <ul className='menu__list'>
                <li className='item'><NavLink to="/">Head</NavLink></li>
                <li className='item'><NavLink to="/about">About</NavLink></li>
                <li className='item'><NavLink to="/product">Product</NavLink></li>
                <li className='item'><NavLink to="/contact">Contact</NavLink></li>
                <li className='item'><NavLink to="/users">Users</NavLink></li>
            </ul>
        </div>
    )
}

export default Menu