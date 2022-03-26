// our-domain.com/new-meetup/[meetupId]
import React, { Fragment } from 'react'
import classes from './MeetupDetail.module.css';

const MeetupDetail = (props) => {
    return (
        <div className={ classes.detail }>
            <img src={ props.img } alt='MeetUp' />
            <h1>{ props.title }</h1>
            <address>{ props.address }</address>
            <p>{ props.description }</p>
        </div>
    )
};

export default MeetupDetail;