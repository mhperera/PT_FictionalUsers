import React, { useState } from 'react';
import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';
import Card from './components/UI/Card/Card';

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

	const handleAddUserFormSubmission = (newUser) => {
		// setUserList([...userList, newUser]);
		setUserList((prev)=>{ return [...prev, newUser] });
	};

	return (
		<Card>
			<h1>Fictional Users</h1>
			<AddUser onAddUserFormSubmission={handleAddUserFormSubmission} />
			<UsersList userList={userList}/>
		</Card>
	);
}

export default App;
