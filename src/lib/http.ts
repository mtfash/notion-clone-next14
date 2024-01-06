import axios from "axios";

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export async function getRequest<T = any>(path: string, params?: Object): Promise<T> {
  try {
    const { data } = await http.get<T>(path, {
      params,
    });

    return data;
  } catch (error) {
    console.error("error fetching data:", error);
    throw error;
  }
}

export async function postRequest<T = any>(path: string, body?: Object): Promise<T> {
  try {
    const { data } = await http.post<T>(path, body);
    return data;
  } catch (error) {
    console.error("error posting data:", error);
    throw error;
  }
}

export async function putRequest<T = any>(path: string, body?: Object): Promise<T> {
  try {
    const { data } = await http.put<T>(path, body);
    return data;
  } catch (error) {
    console.error("error updating resource:", error);
    throw error;
  }
}

export async function deleteRequest<T = any>(path: string): Promise<T> {
  try {
    const { data } = await http.delete<T>(path);
    return data;
  } catch (error) {
    console.error("error deleting resource:", error);
    throw error;
  }
}
