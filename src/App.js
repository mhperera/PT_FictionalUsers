import React, { useState } from 'react';
import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';
import Card from './components/UI/Card/Card';
import Modal from './components/UI/Modal/Modal';

const USER_LIST = [
	{
		id: 1,
		username: 'Manasha Perera',
		age: 10,
	},
	{
		id: 2,
		username: 'Tinith Nilaksha',
		age: 20,
	},
	{
		id: 3,
		username: 'Piyumi Lakshani',
		age: 30,
	},
	{
		id: 4,
		username: 'Charith Kanishka',
		age: 40,
	},
	{
		id: 5,
		username: 'Mayuka Prasadini',
		age: 50,
	},
];

function App() {

	const [userList, setUserList] = useState(USER_LIST);
	const [error, setError] = useState();

	const handleAddUserFormSubmission = (newUser) => {
		setUserList((prev)=>{ return [...prev, newUser] });
	};

	const handleError = (error) => {
		setError(error);
	}

	const handleModalClose = () => {
		setError(null);
	}

	return (
		<>
			<Card>
				<h1>Fictional Users</h1>
				<AddUser onAddUserFormSubmission={handleAddUserFormSubmission} onError={handleError}/>
				<UsersList userList={userList}/>
			</Card>
			{ error && <Modal
				title={error.title}
				content={error.content}
				onModalClose={handleModalClose}
			/> }

		</>
	);
}

export default App;
