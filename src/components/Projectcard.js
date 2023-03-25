import React from 'react'
import { NavLink } from 'react-router-dom'

import './Projectcard.css'

 const Projectcard = (props) => {
    return (
        <div className='project__card'>
            <img className='project__image' src={props.imgsrc} alt="Project_image" />
            <h2 className='project__title'>{props.projecttitle} </h2>
            <div className='project__details'>
                <p>{props.projectdes} </p>
                <div className='project__buttons'>
                    <NavLink to={props.view} className="btn"> View</NavLink>
                    <NavLink to={props.source} className="btn"> Source</NavLink>
                </div>

            </div>
        </div>
    )
}
export default Projectcard;
