import React, { Fragment, useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const AllQuotes = () => {

    const { sendRequest, status, data: loadedquotes, error } = useHttp(getAllQuotes, true);
    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status === 'pending') {
        return (
            <div className='centered'>
                <LoadingSpinner></LoadingSpinner>
            </div>
        );
    };

    if (error) {
        return (
            <div className='centered'>
                <p>{ error }</p>
            </div>
        );
    };

    if (status === 'completed' && (!loadedquotes || loadedquotes.length === 0)) {
        return (
            <NoQuotesFound></NoQuotesFound>
        );
    };

    return (
        <Fragment>
            <QuoteList quotes={ loadedquotes }></QuoteList>
        </Fragment>
    );
};

export default AllQuotes;