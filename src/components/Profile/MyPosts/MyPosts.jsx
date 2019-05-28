import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';


const MyPosts = (props) => {

    let postsElements = props.posts
    .map ( pos => <Post message={pos.message} likesCount={pos.likesCount}/>)

    // эта переменная будет содержать ссылку на какой-то элемент из JSX (в нашем случае из textarea)
    let newPostElement = React.createRef();

    // мы value получили из newPostElement, затем присвоили его переменной text и передали его в addPost
    // это обработчик события
    let addPost = () => { 
    //  let text = newPostElement.current.value; - нет смысла отправлять сюда текст
    //  props.addPost (text); - нет смысла отправлять сюда текст
        //props.addPost ();
        props.dispatch (addPostActionCreator());
        // newPostElement.current.value = ''; -так занулять нельзя
        // props.updateNewPostText(''); - это зануление переносим в бизнес
    }

    let onChangePost = () => {

       let text = newPostElement.current.value;
       let action = updateNewPostTextActionCreator(text);
        props.dispatch (action);
        //props.updateNewPostText (text);
    }
    // let addPost = () => { 
    //    let text = document.getElementById('new-post').value 
    //     alert (text)
    // }

    // let addPost = () => {
    //     alert ('samuraijs.com')
    // }   value={props.newPostText}
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                {/* <textarea id='new-post'></textarea> */}
                <textarea onChange={ onChangePost } ref={ newPostElement }  />
            </div>
            <div>
                <button onClick = { addPost }>Add post</button>
            </div>
            <div className={s.posts}>
            {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;