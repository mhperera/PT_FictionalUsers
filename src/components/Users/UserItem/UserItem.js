import React from 'react';
import styles from './UserItem.module.css';

const UserItem = (props) => {
  return (
    <li className={styles['user-item']} >
      <label style={{fontWeight: 'bold'}}>{props.username}</label>
      <label htmlFor="">{`${props.age} years old`}</label>
    </li>
  )
}

export default UserItem