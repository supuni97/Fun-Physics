// leaderboardApi.js
/* eslint-disable import/no-anonymous-default-export */
import backendInstance from "./backendApi";

const api = backendInstance();

const getLeaderboardData = async (idToken) => {
  try {
    console.log("Fetching leaderboard data");
    const response = await api.get("leaderboard", {
      headers: {
        'Authorization': `Bearer ${idToken}`
      }
    });
    console.log(response);
    return response; 
  } catch (error) {
    console.error("Error fetching leaderboard data:", error);
    throw error; // Re-throw the error to handle it in the calling code
  }
};

export  { getLeaderboardData };
