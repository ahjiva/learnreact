const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'This certification demonstrates your skills as a database professional, for both on-premises and cloud-based databases.', likesCount: 23 },
        { id: 2, message: 'Earning an MCSA: SQL 2016 Database Development certification qualifies you for a position as a database developer.', likesCount: 11 },
        { id: 3, message: 'Possess foundational IT skills. If you feel that you do not possess these skills, consider pursuing one or more Microsoft Technology Associate (MTA) certifications.', likesCount: 21 },
    ],
    newPostText : 'abakan'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 3
                  };
                state.posts.push(newPost);
                state.newPostText = '';
                return state;
        case UPDATE_NEW_POST_TEXT:
                state.newPostText = action.newText;  
                return state;
        default: 
                return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;