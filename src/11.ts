import fetch from "node-fetch";

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

/**
 * Fetches a todo from https://jsonplaceholder.typicode.com
 * Should throw error if the response is not successful:
 * -> "Request failed with status {status}"
 *
 * https://developer.mozilla.org/de/docs/Web/API/Fetch_API
 */
export async function getTodo(id: number): Promise<ITodo> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (response.ok) {
    const data = (await response.json()) as ITodo;
    return data;
  }
  throw new Error(`Request failed with status ${response.status}`);
}
