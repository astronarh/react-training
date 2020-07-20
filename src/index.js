import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store'
import './index.css';
import {STORY_ARCHIVE} from "./constants/actionTypes";
import {getReadableStories} from "./selectors/story";

ReactDOM.render(
    <App
        stories={getReadableStories(store.getState())}
        onArchive={id => store.dispatch({type: STORY_ARCHIVE, id})}
    />,
    document.getElementById('root')
);
