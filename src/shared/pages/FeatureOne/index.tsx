import React from 'react';
import { Helmet } from 'react-helmet-async';
import favicon from '../../assets/favicon.png';

import css from './FeatureOne.module.css';

const FeatureOne = () => {
    // @ts-ignore
    return (
        <div className="featureOne">
            <Helmet
                defaultTitle="React Feature Onee - Best for SEO - React"
                titleTemplate="%s - Best for SEO - React"
                link={[{ rel: 'icon', type: 'image/png', href: favicon }]}
            />
            <div className={css.pageContent}>
                <div className={css.headingSection}>
                    <h2 className={css.h2}>Feature One!</h2>
                    <h5 className={css.h5}>
                        This is the parent page/component of this entire feature-set.
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default FeatureOne;
