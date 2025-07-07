import type { Todo } from "../../pages/types";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  isPending: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => Promise<void>;
}

/**
 * Component to display the list of todo items
 */
export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return <p className="text-gray-500">No todos yet. Add one above!</p>;
  }

  return (
    <ul className="space-y-2 mt-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
