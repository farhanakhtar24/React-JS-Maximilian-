import React, { Fragment, useEffect } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';


const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();

    const { quoteId } = params;

    const { sendRequest, status, data: loadedquote, error } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId])

    if (status === 'pending') {
        return <div className='centered'>
            <LoadingSpinner></LoadingSpinner>
        </div>
    }

    if (error) {
        return <div className='centered'>
            <p>{ error }</p>
        </div>
    }

    if (!loadedquote.text) {
        return <p>Quote not found</p>
    }

    return (
        <Fragment>
            <HighlightedQuote text={ loadedquote.text } author={ loadedquote.author }></HighlightedQuote>
            <Route path={ `${match.path}` } exact>
                <div className='centered'>
                    <Link className='btn--flat' to={ `${match.url}/comments` } >Load Comments</Link>
                </div>
            </Route>
            <Route path={ `${match.path}/comments` } >
                <Comments></Comments>
            </Route>
        </Fragment >
    )
};

export default QuoteDetail;