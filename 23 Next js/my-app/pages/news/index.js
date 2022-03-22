// our-domain.com/news

import React, { Fragment } from 'react';
import Link from 'next/link';

const Newspage = () => {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href='/news/next-js-is-a-great-framework'>NextJs is a great framework</Link>
                </li>
                <li>Something else</li>
            </ul>
        </Fragment>
    );
}

export default Newspage;