import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
	return (
		<button
			type={props.type || 'button'}
			className={`${styles.button} ${
				props.className ? props.className : ''
			}`}
			style={props.style}
            onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
