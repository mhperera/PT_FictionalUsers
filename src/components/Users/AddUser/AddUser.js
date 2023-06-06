import React, { useState } from 'react';
import styles from './AddUser.module.css';
import FromGroup from '../../UI/FormGroup/FromGroup';
import Button from '../../UI/Button/Button';

const AddUser = (props) => {
	const [username, setUsername] = useState('');
	const [age, setAge] = useState('');

	const handleChangeUsername = (event) => {
		setUsername(event.target.value);
	};

	const handleChangeAge = (event) => {
		setAge(event.target.value);
	};

	const clearFormFields = () => {
		setUsername('');
		setAge('');
	};

	const handleAddUserFormSubmission = (event) => {
		event.preventDefault();
		const newUser = {
			'id': Math.random()*100,
			'username': username,
			'age' : age
		};
		clearFormFields();
		props.onAddUserFormSubmission(newUser);
	};

	return (
		<form
			onSubmit={handleAddUserFormSubmission}
			className={`${styles['component-add-user']} flex `}
		>
			<FromGroup>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					name="username"
					id="username"
					value={username}
					onChange={handleChangeUsername}
				/>
			</FromGroup>
			<FromGroup>
				<label htmlFor="age">Age (Years)</label>
				<input
					type="number"
					name="age"
					id="age"
					value={age}
					onChange={handleChangeAge}
				/>
			</FromGroup>
			<Button type="submit">Add User</Button>
		</form>
	);
};

export default AddUser;
