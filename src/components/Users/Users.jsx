import { Link } from "react-router-dom"

export default function Users(){
    return(
        <div className="main">
            <h1>USERS</h1>
            <ul>
                <li><Link to='/users/1'>Michael Jordan</Link></li>
                <li><Link to='/users/2'>Scottie Pippen</Link></li>
            </ul>
        </div>
    )
}