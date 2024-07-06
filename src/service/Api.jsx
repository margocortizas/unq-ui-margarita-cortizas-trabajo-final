import axios from 'axios';

const API_URL = 'https://preguntados-api.vercel.app/api';


export const getDifficulties = async () => {
  const response = await axios.get(`${API_URL}/difficulty`);
  return response;
};

export const getQuestions = async (difficulty = 'easy') => {
  const response = await axios.get(`${API_URL}/questions?difficulty=${difficulty}`);
  return response;
};

export const checkAnswer = async (questionId, option) => {
  const response = await axios.post(`${API_URL}/answer`, { questionId, option });
  return response;
};


const Api = {checkAnswer, getQuestions, getDifficulties};
export default Api;