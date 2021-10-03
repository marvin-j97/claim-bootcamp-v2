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
  // TODO: implement
  return undefined;
}
