import React from 'react';
import css from './App.module.css';
import {Categories} from "./components/Categories/Categories";
import {Answers} from "./components/Answers/Answers";
import {createBrowserHistory} from "history";
import {Redirect, Route, Router, Switch} from "react-router-dom";
import {Questions} from "./components/Questions/Questions";

export const customHistory = createBrowserHistory();

function App() {
    return (
        <Router history={customHistory}>
            <div className={css.header}>
                <h1>F L Y L A</h1>
            </div>
            <div className={css.main}>
                <Switch>
                    <Route path='/categories' render={() => <Categories/>}/>
                    <Route path='/questions' render={() => <Questions/>}/>
                    <Route path='/answers' render={() => <Answers/>}/>
                    <Redirect to='/categories'/>
                </Switch>
            </div>
            <div className={css.footer}>
                Made by Alexander Kazakov
            </div>
        </Router>
    );
}

export default App;