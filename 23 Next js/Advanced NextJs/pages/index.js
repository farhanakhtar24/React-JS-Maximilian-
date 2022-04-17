// our-domain.com/
import React, { useEffect, useState } from 'react'
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

const index = (props) => {
    return (
        <MeetupList meetups={ props.meetups } />
    )
};


// this is a server side code and will never end up in the browser when a user visits our page
// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in

export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS, // will be passed to the page component as props
        },

        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 1 seconds
        revalidate: 1,
    }
};

// // everything same as above but , This gets called on every request
// // its better to use the above function for server side rendering . 
// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     //fetch data from API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export default index