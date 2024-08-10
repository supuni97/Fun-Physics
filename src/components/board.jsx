import React, { useState, useEffect } from "react";
import Profiles from "./profiles";
import { getLeaderboardData } from "../API/leaderboardApi";

export default function Board({ idToken }) {
  const [result, setResult] = useState([]);
  const fetchData = async () => {
    const response = await getLeaderboardData(idToken);
    setResult(response.data.data);
  };
  useEffect(() => {
    fetchData();
  }, [idToken]);

  return (
    <div style={styles.boardContainer}>
      <h1 style={styles.leaderboardHeader}>LEADERBOARD</h1>
      <Profiles Leaderboard={sort(result)}></Profiles>
    </div>
  );
}

function sort(data) {
  return data.sort((a, b) => b.userScore - a.userScore);
}

const styles = {
  boardContainer: {
    padding: '20px',
    width: '80%',
    backgroundColor: '#FFFFF',
    borderRadius: '10px',
    textAlign: 'center',
  },
  leaderboardHeader: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#E74C3C',
  }
};
