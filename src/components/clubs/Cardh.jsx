import React from 'react';
import Card from './Card'; 
import styles from './Clubcard.module.css';

const ClubsPage = () => {
  const clubs = [
    { name: 'E-cell', coordinator: 'Coordinator Name', members: 54 },
    { name: 'IEEE SB', coordinator: 'Another Coordinator', members: 30 },

    
  ];

  return (
    <div className={styles.container}>
      {clubs.map((club) => (
        <Card
          key={club.name}
          clubName={club.name}
          coordinatorName={club.coordinator}
          memberCount={club.members}
        />
      ))}
    </div>
  );
};

export default ClubsPage;
