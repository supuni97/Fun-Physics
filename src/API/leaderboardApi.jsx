/* eslint-disable import/no-anonymous-default-export */
import backendInstance from "./backendApi";

const api = backendInstance();

const getLeaderboardData = async (gameId, limit) => {
  const response = api.get(`leaderboard/${gameId}?limit=${limit}`);
  return response;
};

export default { getLeaderboardData };
