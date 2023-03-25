import React from 'react'

import  Projectcard  from './Projectcard'
import './Projectcard.css'
import ProjectData from './ProjectData'
 const Work = () => {



    return (
        <div className='work__container'>
            <h1 className='project-heading'> Projects</h1>
            <div className="project__container">
       {ProjectData.map((val,ind)=>{
         return(<Projectcard
            key={ind}
            imgsrc={val.imgsrc}
            projecttitle={val.projecttitle}
            projectdes={val.projectdes}
            view={val.view}
            source={val.source}
            />
            
         );

       })}

            </div>

 


        </div>
    )
}
export default Work; 
