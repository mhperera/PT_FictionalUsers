import React, { useRef } from 'react';
import styles from './AddUser.module.css';
import FromGroup from '../../UI/FormGroup/FromGroup';
import Button from '../../UI/Button/Button';

const AddUser = (props) => {

	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const handleAddUserFormSubmission = (event) => {

		event.preventDefault();

		const enteredUserName = nameInputRef.current.value;
		const enteredUserAge = ageInputRef.current.value;

		// Validate Empty Fields
		if (
			enteredUserName.trim().length === 0 &&
			enteredUserAge.trim().length === 0
		) {
			return props.onError({
				title: 'Invalid Input',
				content: 'Please enter a valid name and age.',
			});
		}

		// Validate Age
		if (+enteredUserAge < 1) {
			return props.onError({
				title: 'Invalid Age',
				content: 'Please enter a valid age.',
			});
		}

		const newUser = {
			id: Math.random() * 100,
			username: enteredUserName,
			age: enteredUserAge,
		};
		props.onAddUserFormSubmission(newUser);
		nameInputRef.current.value = '';
		ageInputRef.current.value = '';
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
					ref = {nameInputRef}
				/>
			</FromGroup>
			<FromGroup>
				<label htmlFor="age">Age (Years)</label>
				<input
					type="number"
					name="age"
					id="age"
					ref = {ageInputRef}
				/>
			</FromGroup>
			<Button type="submit">Add User</Button>
		</form>
	);
};

export default AddUser;
