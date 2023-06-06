import React from 'react';
import styles from './FormGroup.module.css'

const FromGroup = (props) => {
  return (
    <div className={`${styles['form-group']} ${props.className ? props.className : ''}`}>{props.children}</div>
  )
}

export default FromGroup