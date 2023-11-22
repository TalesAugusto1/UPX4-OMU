import axios from "axios";

const API_URL = "http://54.233.155.180:8080";

export async function loginUser(user: string, password: string) {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      user: user,
      password: password,
    });
    console.log(response);
    return response.data.tokenJwt;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to handle it in the calling code
  }
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
