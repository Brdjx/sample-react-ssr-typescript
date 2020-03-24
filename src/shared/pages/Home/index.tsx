import React from 'react';
import { Helmet } from 'react-helmet-async';
import ArticlesCarousel from 'layout/ArticlesCarousel';
import favicon from '../../assets/favicon.png';

import css from './Home.module.css';

const Home = () => {
    // @ts-ignore
    return (
        <div className={css.home}>
            <Helmet
                defaultTitle="React SSR + Typescript - Best for SEO - React"
                titleTemplate="%s - Best for SEO - React"
                link={[{ rel: 'icon', type: 'image/png', href: favicon }]}
            />
            <ArticlesCarousel />
            <div className={css.pageContent}>
                <div className={css.headingSection}>
                    <h2 className={css.h2}>Welcome to the React SSR + TypeScript Site</h2>
                    <h5 className={css.h5}>
                        Completely setup for page crawling by search engines.
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Home;
