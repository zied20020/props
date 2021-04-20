import React from 'react'
import PropTypes from 'prop-types'


const ProfileComponent = (props) => {
    return (
        <div  style={{margin:'auto', textAlign:'center'}}>
            {props.handleName(props.FullName)}
            <h1 style={{color:'blueviolet'}}>I'am {props.FullName}</h1>
            <h2 style={{color:'blue'}}>i love {props.Bio}</h2>
            <h3 style={{color:'pink'}}>Unfortunately i am {props.Profession} :( </h3>
            <div>{props.children}</div>
            
        </div>
    )
}

export default ProfileComponent

ProfileComponent.defaultProps={
    FullName : 'Haykel ',
    Bio : 'code.',
    Profession: 'Developer'
}

ProfileComponent.propTypes = {
    FullName : PropTypes.string, 
    Bio : PropTypes.string,
     Profession : PropTypes.string, 
    handleName : PropTypes.func
}