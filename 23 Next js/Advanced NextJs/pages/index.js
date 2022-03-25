// our-domain.com/
import React from 'react'
import Layout from '../components/layout/Layout'
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first meetup',
        image: 'https://i.pinimg.com/originals/0c/40/7f/0c407f56640b3c4316bdc7c10f9c94fe.jpg',
        address: '123 Main St, New York, NY',
        description: 'This is our first meetup'
    },
    {
        id: 'm2',
        title: 'A first meetup',
        image: 'https://i.pinimg.com/originals/0c/40/7f/0c407f56640b3c4316bdc7c10f9c94fe.jpg',
        address: '123 Main St, New York, NY',
        description: 'This is our second meetup'
    },
    {
        id: 'm3',
        title: 'A first meetup',
        image: 'https://i.pinimg.com/originals/0c/40/7f/0c407f56640b3c4316bdc7c10f9c94fe.jpg',
        address: '123 Main St, New York, NY',
        description: 'This is our third meetup'
    },
]

const index = () => {
    return (
        <MeetupList meetups={ DUMMY_MEETUPS } />
    )
};

export default index