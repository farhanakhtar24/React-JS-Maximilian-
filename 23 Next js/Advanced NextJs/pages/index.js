// our-domain.com/
import React from 'react'
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first meetup',
        image: 'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3N0b25laGVuZ2UtbGFuZG1hcmstMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMH19fQ==',
        address: '123 Main St, New York, NY',
        description: 'This is our first meetup'
    },
    {
        id: 'm2',
        title: 'A first meetup',
        image: 'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3N0b25laGVuZ2UtbGFuZG1hcmstMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMH19fQ==',
        address: '123 Main St, New York, NY',
        description: 'This is our second meetup'
    },
    {
        id: 'm3',
        title: 'A first meetup',
        image: 'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3N0b25laGVuZ2UtbGFuZG1hcmstMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMH19fQ==',
        address: '123 Main St, New York, NY',
        description: 'This is our third meetup'
    },
]

const index = () => {
    return (
        <div>
            <MeetupList meetups={ DUMMY_MEETUPS } />
        </div>
    )
}

export default index