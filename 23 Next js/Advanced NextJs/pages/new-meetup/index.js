// our-domain.com/new-meetup
import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetUpPage = () => {
    const addMeetupHandler = function (enteredData) {
        console.log(enteredData);
    }

    return (
        <NewMeetupForm onAddMeetup={ addMeetupHandler } />
    )
};

export default NewMeetUpPage;