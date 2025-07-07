export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  pending?: boolean; // Flag to identify optimistically added todos
}
