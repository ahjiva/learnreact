import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    
    return (
        <div className={s.item}>
            <img src='https://media.vanityfair.com/photos/5c5325d33889055ec0570bcf/master/pass/t-ava-max-interview.jpg'></img>
           {props.message} 
            <div>
                <span>Like</span>&nbsp;
                <span>{props.likesCount} </span>
            </div>
        </div>
    );
}

export default Post;