import React from "react";
import { Link } from "react-router-dom";
import bg from './backgroundImage.png'

const Starter=()=>{
    return(
        <>
        <div className="" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <h1 style={{fontSize:"3rem", margin:"0"}}>AssignMe.</h1>
            <div className="Topcontainer">
                    <div className="" style={{width:"90vw"}}>
                    <h4>Welcome To AssignMe.</h4>
                    <p>
                    Here You can Practice questions 
                    from different Subjects from 
                    various different topics starting 
                    from questions in series till 
                    random from different toptics
                    </p>

                    <div className='cont-button'>
                        <ul>
                            <li><Link to="/math">Start Solving</Link></li>
                            <li><Link to="/random  ">Solve Random</Link></li>
                        </ul>
                    </div>
                    </div>
                    <img src={bg} alt="" style={{width:"50rem"}}/>
            </div>
        </div>
        </>
    )
}

export default Starter;