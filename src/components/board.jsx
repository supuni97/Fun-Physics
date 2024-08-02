import React, { useState, useEffect } from "react";
import Profiles from "./profiles";
import { getLeaderboardData } from "../API/leaderboardApi";

export default function Board({ idToken }) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getLeaderboardData(idToken);
      setResult(response.data.data);
      console.log(result);
    };

    fetchData();
  }, [idToken]);

  return (
    <div className="board" style={{ marginLeft: "10vw", marginRight: "20vw" }}>
      <h1 className="leaderboard">Leaderboard</h1>
      <Profiles Leaderboard={sort(result)}></Profiles>
    </div>
  );
}

function sort(data) {
  return data.sort((a, b) => {
    if (a.score === b.score) {
      return b.userScore - a.userScore;
    } else {
      return b.userScore - a.userScore;
    }
  });
}
