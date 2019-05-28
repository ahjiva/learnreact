import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './redux/state';
import * as serviceWorker from './serviceWorker';

//нам нужно вызвать какую-то функцию из state.js и по этой функции передать ей нашу rerenderEntireTree
//то есть rerenderEntireTree отдать state.js как callback

//выше мы импортируем App и ее же вызываем ниже
//также мы импортировали state и он нам принадлежит здесь и его все функции addPost, updateNewPostText
//мы их вызвали эти функции а потом отдали App - это называется callback функции которые мы отдаем чтобы их вызывали
// let rerenderEntireTree = () => {
//     ReactDOM.render(<App state={state.getState()}
//                         addPost={state.addPost}
//                         updateNewPostText={state.updateNewPostText}
//                         />, document.getElementById('root'));
// };
//getState()) не bind-им потому что вызываем его от имени state тогда как addPost и updateNewPostText bind-им
//потому что мы их здесь не вызываем, а отдаем куда-то в глубину
// где они в итоге вызываются уже от имени props(а что туда приходит другой вопрос)
//то есть мы не знаем от чего они имени там могут вызываться поэтому обезопасиваем себя 
//и делаем привязку к объекту state
//так было до Диспатча
// let rerenderEntireTree = (state) => {
//     ReactDOM.render(<App state={state} 
//                         addPost={state.addPost.bind(state)}
//                         updateNewPostText={state.updateNewPostText.bind(state)}
//                         />, document.getElementById('root'));
// };

let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)}
    store={store}/>, document.getElementById('root'));
};

// я вызываю функцию Рендер, и я же передаю state в эту функцию render.js
// таким образом, render.js не зацикливает импортируя state.js в себя, тогда как
// state.js испортирует в себя render.js
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();