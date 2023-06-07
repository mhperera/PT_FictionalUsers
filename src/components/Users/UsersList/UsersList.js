import React from 'react';
import UserItem from '../UserItem/UserItem';
import Card from '../../UI/Card/Card';
import styles from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card style={{width:'100%',border:'1px solid #41419c21', padding: '1rem'}}>
        <ul className={styles['users-list']}>
            {props.userList.map((user) => (
              <UserItem key={user.id} username={user.username} age={user.age}/>
            ))}
        </ul>
    </Card>
  )
}

export default UsersList