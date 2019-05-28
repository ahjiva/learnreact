import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {
	
	return (
		<BrowserRouter>
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<div className='app-wrapper-content'>
			{/* Route -компонента которая следит за УРЛом, если URL изменился 
			и стал равен dialogs он автоматически подгружает компоненту Dialogs */}
			{/* <Route path='/dialogs' component={Dialogs}/>
			<Route path='/profile' component={Profile}/>
			<Route path='/news' component={News}/> */}

			{/* <Route path='/dialogs' render={ () => <Dialogs dialogs={props.state.dialogsPage.dialogs} 
			messages={props.state.dialogsPage.messages}/> }/>
			<Route path='/profile' render={ () => <Profile poezd={props.state.profilePage.posts}/>}/>
			<Route path='/news' render={News}/> */}

			<Route path='/dialogs' render={ () => <Dialogs store={props.store} />}/>
			{/*<Route path='/profile' render={ () => <Profile store={props.store} />}/>*/}
			<Route path='/profile' render={ () => <Profile
				profilePage={props.state.profilePage}
				dispatch={props.dispatch}
			/>}/>
			<Route path='/news' render={News}/>

			{/* <Navbar state={props.state.sideBar} /> */}
			</div>
		</div>
		</BrowserRouter>
	);
}

export default App;
