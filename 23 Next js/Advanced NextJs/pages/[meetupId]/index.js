// our-domain.com/new-meetup/[meetupId]
import React, { Fragment } from 'react'

const MeetupDetails = () => {
    return (
        <Fragment>
            <img src='https://i.pinimg.com/originals/0c/40/7f/0c407f56640b3c4316bdc7c10f9c94fe.jpg' alt='MeetUp' />
            <h1>A first Meetup</h1>
            <address>Box 564, Disneyland,USA</address>
            <p>This is meetup Description</p>
        </Fragment>
    )
}

export default MeetupDetails;