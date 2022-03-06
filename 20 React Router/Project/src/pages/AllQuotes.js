import React, { Fragment } from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    {
        id: "q1",
        author: "Maxilmilian",
        text: "React OP",
    },
    {
        id: "q2",
        author: "Schwarzmuler",
        text: "Learning React is fun",
    }
];

const AllQuotes = () => {
    return (
        <Fragment>
            <QuoteList quotes={ DUMMY_QUOTES }></QuoteList>
        </Fragment>
    )
};

export default AllQuotes;