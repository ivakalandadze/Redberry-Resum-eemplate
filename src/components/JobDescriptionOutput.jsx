import React from 'react'

export default function JobDescriptionOutput(props) {
    
    const {position, company, startDate, endDate, jobDescription} = props.exp
  return (
    <div>
        <h4 className="position-company">{position}, {company}</h4>
        <p className="expInfo-dates">{startDate} - {endDate}</p>
        <p className="job-description">{jobDescription}</p>
    </div>
  )
}
