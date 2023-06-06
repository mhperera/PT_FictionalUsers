import React, { useState } from 'react';
import AddUser from './components/Users/AddUser/AddUser';
import Card from './components/UI/Card/Card';

const USER_LIST = [
	{
		id: 1,
		username: 'User 1',
		age: 10,
	},
	{
		id: 2,
		username: 'User 2',
		age: 20,
	},
	{
		id: 3,
		username: 'User 3',
		age: 30,
	},
];

function App() {
	const [userList, setUserList] = useState(USER_LIST);

	const handleAddUserFormSubmission = (newUser) => {
		setUserList([...userList, newUser]);
	};

	return (
		<Card>
			<h1>Fictional Users</h1>
			<AddUser onAddUserFormSubmission={handleAddUserFormSubmission} />

			{userList.map((user) => (
				<div key={user.id}>
					<label htmlFor="">{user.username}</label>
					<br />
				</div>
			))}
		</Card>
	);
}

export default App;
