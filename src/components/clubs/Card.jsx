import React from 'react';
import styles from './Clubcard.module.css'; // Assuming you're using CSS module

const Card = ({ clubName, coordinatorName, memberCount }) => {
  return (
    <div className={styles.card}>
      <h3>{clubName}</h3>
      <div className={styles.details}>
        <p>Co-ordinator: {coordinatorName}</p>
        <p>No. of members: {memberCount}</p>
      </div>
    </div>
  );
};

export default Card;
