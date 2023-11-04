import { API_URL } from "../config";

export async function getUser() {
    const res = await fetch(`${API_URL}/logins?populate=*`);
  
    if (!res.ok) {
      throw new Error('Something went wrong');
    }
    const { data } = await res.json();
    return data;
  }

