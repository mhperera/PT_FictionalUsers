import React, { useState } from 'react';
import styles from './AddUser.module.css';
import FromGroup from '../../UI/FormGroup/FromGroup';
import Button from '../../UI/Button/Button';

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');

	const handleChangeUsername = (event) => {
		setEnteredUsername(event.target.value);
	};

	const handleChangeAge = (event) => {
		setEnteredAge(event.target.value);
	};

	const clearFormFields = () => {
		setEnteredUsername('');
		setEnteredAge('');
	};

	const handleAddUserFormSubmission = (event) => {
		event.preventDefault();

		// Validate Empty Fields
		if (
			enteredUsername.trim().length === 0 &&
			enteredAge.trim().length === 0
		) {
			return props.onError({
				title: 'Invalid Input',
				content: 'Please enter a valid name and age.',
			});
		}

		// Validate Age
		if (+enteredAge < 1) {
			return props.onError({
				title: 'Invalid Age',
				content: 'Please enter a valid age.',
			});
		}

		const newUser = {
			id: Math.random() * 100,
			username: enteredUsername,
			age: enteredAge,
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
					value={enteredUsername}
					onChange={handleChangeUsername}
				/>
			</FromGroup>
			<FromGroup>
				<label htmlFor="age">Age (Years)</label>
				<input
					type="number"
					name="age"
					id="age"
					value={enteredAge}
					onChange={handleChangeAge}
				/>
			</FromGroup>
			<Button type="submit">Add User</Button>
		</form>
	);
};

export default AddUser;
