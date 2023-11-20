import axios from "axios";

const API_URL = "http://15.228.243.32:8080";

export async function loginUser(user: string, password: string) {
  const response = await axios.post(`${API_URL}/auth/login`, {
    user,
    password,
  });
  return response.data;
}

export async function registerUser(user: string, password: string) {
  const response = await axios.post(`${API_URL}/auth/register`, {
    user,
    password,
  });
  return response.data;
}

export async function createProblem(
  cep: string,
  tipoProblema: string,
  foto: string
) {
  const response = await axios.post(`${API_URL}/problema`, {
    cep,
    tipoProblema,
    foto,
  });
  return response.data;
}

export async function getProblem(id: string) {
  const response = await axios.get(`${API_URL}/problema/${id}`);
  return response.data;
}

export async function getProblems() {
  const response = await axios.get(`${API_URL}/problema`);
  return response.data;
}

export async function deleteProblem(id: string) {
  const response = await axios.delete(`${API_URL}/problema/${id}`);
  return response.data;
}

export async function updateProblem(
  id: string,
  cep: string,
  tipoProblema: string,
  foto: string
) {
  const response = await axios.put(`${API_URL}/problema`, {
    id,
    cep,
    tipoProblema,
    foto,
  });
  return response.data;
}

export async function getPosts() {
  const response = await axios.get(`${API_URL}/posto`);
  return response.data;
}

export async function createPost(
  nome: string,
  local: string,
  gasolina: number,
  alcool: number
) {
  const response = await axios.post(`${API_URL}/posto`, {
    nome,
    local,
    gasolina,
    alcool,
  });
  return response.data;
}

export async function updatePost(
  id: string,
  nome: string,
  local: string,
  alcool: number,
  gasolina: number
) {
  const response = await axios.put(`${API_URL}/posto`, {
    id,
    nome,
    local,
    alcool,
    gasolina,
  });
  return response.data;
}

export async function deletePost(id: string) {
  const response = await axios.delete(`${API_URL}/posto/${id}`);
  return response.data;
}

export async function getPost(id: string) {
  const response = await axios.get(`${API_URL}/posto/${id}`);
  return response.data;
}
