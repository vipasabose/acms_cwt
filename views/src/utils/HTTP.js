import axios from "axios";

//export const BASE_URL = "http://localhost:8080";
/*const production  = 'https://collaborativewriting.herokuapp.com';
const development = 'http://localhost:8000';
export const BASE_URL = (window.location.origin==process.env.NODE_ENV ? production : development);*/
//console.log(window.location.origin);
export const BASE_URL = 'https://collaborativewriting.herokuapp.com';

export const loginAPI = async requestData => {
  return await axios.post(`${BASE_URL}/login`, requestData);
};

export const createUserAPI = async requestData => {
  return await axios.post(`${BASE_URL}/createuser`, requestData);
};

export const createProjectAPI = async requestData => {
  return await axios.post(`${BASE_URL}/createproject`, requestData);
};

export const getProjectsAPI = async requestData => {
  return await axios.post(`${BASE_URL}/contributor`, requestData);
};

export const getReviewerProjectsAPI = async requestData => {
  return await axios.post(`${BASE_URL}/reviewer`, requestData);
};

export const postComments = async requestData => {
  return await axios.post(`${BASE_URL}/savecomment`, requestData);
};

export const getAllComments = async requestData => {
  return await axios.post(`${BASE_URL}/displaycomments`, requestData);
};

export const getProjectDetails = async requestData => {
  return await axios.post(`${BASE_URL}/projectdesc`, requestData);
};

export const saveProject = async requestData => {
  return await axios.post(`${BASE_URL}/saveProject`, requestData);
};

export const updateProjectStatus = async requestData => {
  return await axios.post(`${BASE_URL}/statusupdate`, requestData);
};

export const saveEnable = async requestData => {
  return await axios.post(`${BASE_URL}/saveenable`, requestData);
};
