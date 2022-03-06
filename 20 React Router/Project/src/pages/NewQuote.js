import React from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
    const history = useHistory();
    const addQuoteHandler = function (quoteData) {
        history.push("/quotes")
        console.log(quoteData);
    }
    return (
        <QuoteForm onAddQuote={ addQuoteHandler }></QuoteForm>
    )
};

export default NewQuote;