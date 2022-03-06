import React, { Fragment } from 'react';
import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

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


const QuoteDetail = () => {
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>Quote not found</p>
    }

    return (
        <Fragment>
            <HighlightedQuote text={ quote.text } author={ quote.author }></HighlightedQuote>
            <Route path={ `/quotes/${params.quoteId}/comments` } exact>
                <Comments></Comments>
            </Route>
        </Fragment>
    )
};

export default QuoteDetail;