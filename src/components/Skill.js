import React from 'react'
import './Skill.css'


const Skill = () => {
    return (<>
        <div className='skill__category'>
        <div className='container'>
            <h1 className='title-text'>FRONT-END</h1>
            <div className='skill-box'>
                <span className='title'>HTML</span>
                <div className='skill-bar'>
                    <span className='skill-per html'>
                        <span className='tooltip'>90%</span>
                    </span>
                </div>
            </div>

            <div className='skill-box'>
                <span className='title'>CSS</span>
                <div className='skill-bar'>
                    <span className='skill-per css'>
                        <span className='tooltip'>70%</span>
                    </span>
                </div>
            </div>
 
            <div className='skill-box'>
                <span className='title'>JAVASCRIPT</span>
                <div className='skill-bar'>
                    <span className='skill-per javascript'>
                        <span className='tooltip'>60%</span>
                    </span>
                </div>
            </div>
            <div className='skill-box'>
                <span className='title'>REACT JS</span>
                <div className='skill-bar'>
                    <span className='skill-per react'>
                        <span className='tooltip'>60%</span>
                    </span>
                </div>
            </div>
            <div className='skill-box'>
                <span className='title'>BOOTSTRAP</span>
                <div className='skill-bar'>
                    <span className='skill-per bootstrap'>
                        <span className='tooltip'>65%</span>
                    </span>
                </div>
            </div>
            <div className='skill-box'>
                <span className='title'>GIT</span>
                <div className='skill-bar'>
                    <span className='skill-per git'>
                        <span className='tooltip'>75%</span>
                    </span>
                </div>
            </div>

        </div>



        <div className='container'>
            <h1 className='title-text'>BACK-END</h1>
            <div className='skill-box'>
                <span className='title'>JAVA</span>
                <div className='skill-bar'>
                    <span className='skill-per java'>
                        <span className='tooltip'>80%</span>
                    </span>
                </div>
            </div>

            <div className='skill-box'>
                <span className='title'>SPRING</span>
                <div className='skill-bar'>
                    <span className='skill-per spring'>
                        <span className='tooltip'>75%</span>
                    </span>
                </div>
            </div>
 
            <div className='skill-box'>
                <span className='title'>SPRING BOOT</span>
                <div className='skill-bar'>
                    <span className='skill-per springboot'>
                        <span className='tooltip'>80%</span>
                    </span>
                </div>
            </div>
            <div className='skill-box'>
                <span className='title'>JDBC</span>
                <div className='skill-bar'>
                    <span className='skill-per jdbc'>
                        <span className='tooltip'>70%</span>
                    </span>
                </div>
            </div>
            <div className='skill-box'>
                <span className='title'>HIBERNATE</span>
                <div className='skill-bar'>
                    <span className='skill-per hibernate'>
                        <span className='tooltip'>80%</span>
                    </span>
                </div>
            </div>
            <div className='skill-box'>
                <span className='title'>MYSQL</span>
                <div className='skill-bar'>
                    <span className='skill-per mysql'>
                        <span className='tooltip'>70%</span>
                    </span>
                </div>
            </div>

        </div>


        </div>


        </>
    )
}

export default Skill