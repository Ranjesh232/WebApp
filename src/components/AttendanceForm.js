import React, { Component } from 'react'
import './AttendanceStyle.css'

class AttendanceForm extends Component {

    

    render() {
        return (
            <div >
                <form>
                
                    <fieldset className='f1'>
                    <fieldset className='f2'>
                    	<legend align='right'>Time In</legend>
                        <svg  >
                            <circle cx="30" cy="30" r="30" stroke="black" strokeWidth="1" fill="none" />
                        </svg>
                    </fieldset>
                    <fieldset className='f2'>
                        <legend align='right'>Time Out</legend>
                        <svg  >
                            <circle cx="30" cy="30" r="30" stroke="black" strokeWidth="1" fill="none" />
                        </svg>
                    </fieldset>
                    </fieldset>

                    <fieldset className='f1'>
                    <fieldset className='f2'>
                        <legend align='right'>Time In</legend>
                        <svg  >
                            <circle cx="30" cy="30" r="30" stroke="black" strokeWidth="1" fill="none" />
                        </svg>
                    </fieldset>
                    <fieldset className='f2'>
                        <legend align='right'>Time Out</legend>
                        <svg  >
                            <circle cx="30" cy="30" r="30" stroke="black" strokeWidth="1" fill="none" />
                        </svg>
                    </fieldset>
                    </fieldset>
                    
                </form>
            </div>
        )
    }
}

export default AttendanceForm
