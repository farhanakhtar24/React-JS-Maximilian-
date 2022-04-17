// our-domain.com/[meetupID]

import { useRouter } from 'next/router';
import React, { Fragment } from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = (props) => {
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

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    // console.log(meetupId);


    // fetch data for a single meetup
    return {
        props: {
            id: { meetupId },
            img: 'https://i.pinimg.com/originals/0c/40/7f/0c407f56640b3c4316bdc7c10f9c94fe.jpg',
            title: 'First Meetup',
            address: 'Some address',
            description: 'This is first meetup',
        }
    }
}

export default MeetupDetails;