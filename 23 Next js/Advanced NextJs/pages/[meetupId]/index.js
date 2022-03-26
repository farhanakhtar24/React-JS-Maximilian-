// our-domain.com/[meetupID]

import React, { Fragment } from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
    return (
        <Fragment>
            <MeetupDetail
                img={ 'https://i.pinimg.com/originals/0c/40/7f/0c407f56640b3c4316bdc7c10f9c94fe.jpg' }
                title={ 'First Meetup' }
                address={ 'Some address' }
                description={ 'This is first meetup' }
            />
        </Fragment>)
}

export default MeetupDetails;