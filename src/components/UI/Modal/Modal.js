import React from 'react';
import ReactDOM from 'react-dom';
import Card from './../Card/Card';
import Button from './../Button/Button';
import styles from './Modal.module.css';

const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onModalClose} />;
};

const Overlay = (props) => {
	return (
		<Card
			className={styles.modal}
			style={{
				padding: '0.5rem 1rem',
				border: '1px solid #41419c21',
			}}
		>
			<header className={styles.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={styles.content}>
				<p>{props.content}</p>
			</div>
			<footer className={styles.footer}>
				<Button style={{ margin: '0' }} onClick={props.onModalClose}>
					OK
				</Button>
			</footer>
		</Card>
	);
};

const Modal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onModalClose={props.onModalClose} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<Overlay
					title={props.title}
					content={props.content}
					onModalClose={props.onModalClose}
				/>,
				document.getElementById('overlay-root')
			)}
		</>
	);
};

export default Modal;
