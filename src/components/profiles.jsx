import React from 'react';

export default function Profiles({ Leaderboard }) {
  return (
    <div style={styles.profileContainer}>
      {Leaderboard.map((value, index) => (
        <div key={index} style={styles.profileItem}>
          <span style={{ ...styles.rank, ...getRankStyle(index + 1) }}>
            {index + 1}.
          </span>
          <div style={styles.info}>
            <h3 style={styles.userName}>{value.userName}</h3>
          </div>
          <div style={styles.score}>
            <span>{value.userScore}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function getRankStyle(rank) {
  switch (rank) {
    case 1:
      return { color: '#E74C3C', fontWeight: 'bold' };
    case 2:
      return { color: '#F4D03F' };
    case 3:
      return { color: '#D35400' };
    default:
      return { color: '#34495E' };
  }
}

const styles = {
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  profileItem: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
    padding: '10px 0',
    borderBottom: '1px solid #ccc',
  },
  rank: {
    width: '10%',
    fontSize: '1.2rem',
    textAlign: 'left',
  },
  info: {
    width: '100%',
    textAlign: 'left',
  },
  userName: {
    margin: '0',
    fontSize: '1.2rem',
    color: '#34495E',
  },
  score: {
    width: '30%',
    textAlign: 'right',
    fontSize: '1.2rem',
    color: '#34495E',
  },
};
