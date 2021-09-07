import React from "react"
import PropTypes  from "prop-types"
//import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Profile = ({fullName,profession,bio,children,time}) =>{
    return (
        <div  style={{textAlign: "center"}}>
            {children}
            <h1 style={{color: "silver"}}>{fullName}</h1>
            <h3 style={{color : "rebeccapurple" }}>{profession}</h3>
            <p style={{color : "white" }}>{bio}</p>
            <h2 style={{color: "silver"}}>{time} Seconds</h2>
        </div>
    )
}
Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    handleName: PropTypes.func
}
Profile.defaultProps = {
    fullName: "Steve Jobs",
    profession: "Entrepreneur",
    bio: "Ex-CEO of Apple"

}
export default Profile