import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {
  
    profilePage: {
      posts: [
          { id: 1, message: 'This certification demonstrates your skills as a database professional, for both on-premises and cloud-based databases.', likesCount: 23 },
          { id: 2, message: 'Earning an MCSA: SQL 2016 Database Development certification qualifies you for a position as a database developer.', likesCount: 11 },
          { id: 3, message: 'Possess foundational IT skills. If you feel that you do not possess these skills, consider pursuing one or more Microsoft Technology Associate (MTA) certifications.', likesCount: 21 },
      ],
      newPostText : 'abakan'
    },
  
    dialogsPage: {
      dialogs: 
      [
          { id: 1, name: 'Andrey' },
          { id: 2, name: 'Vasya' },
          { id: 3, name: 'Petr' },
          { id: 4, name: 'Gosho' },
          { id: 5, name: 'Luiza' },
          { id: 6, name: 'Sveta' },
      ],
  
      messages: [
          { id: 1, message: 'Hi!' },
          { id: 2, message: 'How are you?' },
          { id: 3, message: 'How is your web programming?' },
          { id: 4, message: 'Yep' },
          { id: 5, message: 'Yo' }
      ],
      newMessText: 'you will be developer almost'
    },
  
    sideBar: {
      dialogs: 
      [
          { id: 1, name: 'Andrey' },
          { id: 2, name: 'Vasya' },
          { id: 3, name: 'Petr' },
          { id: 4, name: 'Gosho' },
          { id: 5, name: 'Luiza' },
          { id: 6, name: 'Sveta' },
      ],
  
      messages: [
          { id: 1, message: 'Hi!' },
          { id: 2, message: 'How are you?' },
          { id: 3, message: 'How is your web programming?' },
          { id: 4, message: 'Yep' },
          { id: 5, message: 'Yo' }
      ]
    }
  
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('State changed');
  },
  //бизнес-функция BII меняет базу данных state, а не UI
  //это фнкции меняющие state
  // так было до Диспатча, методы были сами по себе.
  // addPost() {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 3
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state);
  // },
  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },
  subscribe(observer) {
    //rerenderEntireTree выходит во вне этой функции и начинает искать внутри файла 
    //глобальную переменную которую создали выше let rerenderEntireTree = () => {} и присваивает ей новое значени
    //то есть выполнение функции rerenderEntireTree из INDEX.JS
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);
    
    this._callSubscriber(this._state);
  }
}

// export let addPost = (postMessage) => {    - сообщение уже сидит в state. newPostText
//   let newPost = {
//     id: 5,
//     message: postMessage,
//     likesCount: 3
//   };
//   state.profilePage.posts.push(newPost);
//   rerenderEntireTree(state);
// }

// addMessage
// export let addMessage = () => {
//   let newMessage = {
//     message: state.dialogsPage.newMessage,
//   };
//   state.dialogsPage.messages.push(newMessage);
//   state.dialogsPage.newMessage = '';
//   rerenderEntireTree(state);
// }

// export let updateNewMessage = (newMes) => {
//   state.dialogsPage.newMessage = newMes;
//   rerenderEntireTree(state);
// }
export default store;
window.store=store;
