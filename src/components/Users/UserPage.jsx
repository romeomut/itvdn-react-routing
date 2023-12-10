import './Main.css'
import { Link, useLoaderData } from "react-router-dom";

export default function UserPage(){

    const user = useLoaderData()

    return(
        <div className="Main user-page">
            <div>
                <Link to="/users">Back</Link>
            </div>

            <div className="img">               
                <img src={user.img} alt=""/>
            </div>

            <h2>User: {user.name}</h2>
            <h2>Age: {user.age}</h2>
            <h2>E-mail: {user.email}</h2>
        </div>
    )
}