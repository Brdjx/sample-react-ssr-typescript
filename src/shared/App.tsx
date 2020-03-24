import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

// App CSS Module

// Pages Components
import Home from 'pages/Home';
import FeatureOne from 'pages/FeatureOne';
import FeatureTwo from 'pages/FeatureTwo';

// Layout Components
import NotFoundPage from 'pages/NotFoundPage';
import Nav from 'layout/Nav';
import Footer from './layout/Footer';
import css from './App.module.css';

// import { Locale } from './store/app/types';
// import { setLocale } from './store/app/actions';

const App: React.FC<any> = () => {
    // const dispatch = useDispatch();
    // const handleLocaleChange = useCallback(
    //     (e: React.FormEvent<HTMLButtonElement>) => {
    //         dispatch(setLocale(e.currentTarget.value as Locale));
    //     },
    //     [dispatch]
    // );

    return (
        <div className={css.app}>
            <Nav />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/feature-one" component={FeatureOne} />
                <Route path="/feature-two" component={FeatureTwo} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;
