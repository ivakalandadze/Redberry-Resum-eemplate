import React from 'react'

export default function JobDescriptionInput(props) {
  return (
    <div className='inputs'>
              <div className='position-input'>
                <label htmlFor={`position${props.index}`}>თანამდებობა</label>
                <input type="text" id={`position${props.index}`} name='position' value={props.expInfo[props.index].position} onChange={props.handleChange}/>
                <label htmlFor={`position${props.index}`}>მინიმუმ 2 სიმბოლო</label>
              </div>
              <div className='company-input'>
                <label htmlFor={`company${props.index}`}>თანამდებობა</label>
                <input type="text" id={`company${props.index}`} name='company' value={props.expInfo[props.index].company} onChange={props.handleChange}/>
                <label htmlFor={`company${props.index}`}>მინიმუმ 2 სიმბოლო</label>
              </div>
              <div className="company-date-input">
                <div className="start-date">
                  <label htmlFor={`startDate${props.index}`}>დაწყების რიცხვი</label>
                  <input type="date" name='startDate' id={`startDate${props.index}`} value={props.expInfo[props.index].startDate} onChange={props.handleChange}/>
                </div>
                <div className="start-date">
                  <label htmlFor={`endDate${props.index}`}>დაწყების რიცხვი</label>
                  <input type="date" name='endDate' id={`endDate${props.index}`} value={props.expInfo[props.index].endDate} onChange={props.handleChange}/>
                </div>
              </div>
              <div className="job-description">
                <label htmlFor={`endDate${props.index}`}>დაწყების რიცხვი</label>
                <textarea name="jobDescription" id={`jobDescription${props.index}`} cols="72" rows="6" value={props.expInfo[props.index].jobDescription} onChange={props.handleChange}/>
              </div>
            </div>
  )
}
