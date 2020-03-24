import React from 'react';
import { Helmet } from 'react-helmet-async';
import favicon from '../../assets/favicon.png';

const NotFoundPage = () => {
    // @ts-ignore
    return (
        <div className="notFound">
            <Helmet
                defaultTitle="NBA Numbers - Page Not Found - Leading NBA Stats"
                titleTemplate="%s – React SSR Starter – TypeScript Edition"
                link={[{ rel: 'icon', type: 'image/png', href: favicon }]}
            />
            <h1>404</h1>
            <h5>Not Found</h5>
        </div>
    );
};

export default NotFoundPage;
