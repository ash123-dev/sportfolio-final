import React, { Component } from 'react'
import './Herosection2.css'


class Herosection2 extends Component {

    render() {
        return (

            <div className='herosection__container'>

                <div className='herosection'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }

}

export default Herosection2