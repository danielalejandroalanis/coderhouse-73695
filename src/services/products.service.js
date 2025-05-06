import axios from "axios";
import { BASE_URL } from "./config/api";

export async function getAllProducts() {
  return await axios.get(BASE_URL);
}

export async function createNewProduct(data) {
  return await axios.post(`${BASE_URL}/add`, data);
}

export async function updateProduct(id, data) {
  return await axios.put(`${BASE_URL}/${id}`, data);
}

export async function deleteProduct(id) {
  return await axios.delete(`${BASE_URL}/${id}`);
}
