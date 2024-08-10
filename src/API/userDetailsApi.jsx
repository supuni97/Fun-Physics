// leaderboardApi.js
/* eslint-disable import/no-anonymous-default-export */
import backendInstance from "./backendApi";

const api = backendInstance();

const getUserData = async (idToken, email) => {
  try {
    console.log("Fetching user data");
    const payload = {
        email,
      };
    const response = await api.post("user",payload, {
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

export  { getUserData };
