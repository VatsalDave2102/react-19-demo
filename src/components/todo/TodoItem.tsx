import { useState } from "react";
import Button from "../ui/Button";
import type { Todo } from "../../pages/types";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => Promise<void>;
}

/**
 * Individual todo item component
 */
export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  // Handle delete with loading state
  async function handleDelete() {
    setIsDeleting(true);
    await onDelete(todo.id);
    setIsDeleting(false);
  }

  return (
    <li className="flex items-center justify-between p-2 border rounded bg-white">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="h-5 w-5"
        />
        <span
          className={`${todo.completed ? "line-through text-gray-500" : ""} 
                     ${todo.pending ? "italic text-gray-400" : ""}`}
        >
          {todo.text}
          {todo.pending && <small className="ml-1">(adding...)</small>}
        </span>
      </div>
      <Button
        variant="secondary"
        onClick={handleDelete}
        disabled={isDeleting || todo.pending}
        className="text-sm py-1"
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </Button>
    </li>
  );
}
