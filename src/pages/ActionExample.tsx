import { useOptimistic, useRef, useState, useTransition } from "react";

import { TodoForm } from "../components/todo/TodoForm";
import { TodoList } from "../components/todo/TodoList";
import Card from "../components/ui/Card";
import CodeBlock from "../components/ui/CodeBlock";
import FeatureList from "../components/ui/FeatureList";
import Heading from "../components/ui/Heading";
import PageContainer from "../components/ui/PageContainer";
import { simulateApiCall } from "../utils/apiUtils";
import type { Todo } from "./types";

/**
 * Example component showcasing React 19 Actions
 */
export default function ActionExample() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React 19 Actions", completed: false },
    { id: 2, text: "Build a demo app", completed: false },
    { id: 3, text: "Share with the community", completed: false },
  ]);
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  // Action features to highlight
  const actionFeatures = [
    "Simplified form handling with form actions",
    "Built-in loading states with useFormStatus",
    "Optimistic UI updates with useOptimistic",
    "Concurrent rendering with useTransition",
    "Progressive enhancement support",
  ];

  // Optimistic UI updates
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo: Todo) => [...state, { ...newTodo, pending: true }]
  );

  // Form action to add new todo with simulated API delay
  async function addTodo(formData: FormData) {
    const todoText = formData.get("todoText") as string;

    if (!todoText.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: todoText.trim(),
      completed: false,
    };

    // Add optimistically with pending flag
    addOptimisticTodo(newTodo);

    startTransition(async () => {
      // Simulate API call
      await simulateApiCall(newTodo, 1500);

      // Update real state using transition for smoother UI
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    });

    // Reset form
    formRef.current?.reset();
  }

  // Toggle todo completion with transition for better UX
  function toggleTodo(id: number) {
    startTransition(() => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    });
  }

  // Delete todo with simulated API delay
  async function deleteTodo(id: number) {
    // Remove optimistically
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

    // Simulate API call to delete
    await simulateApiCall(id, 1000);
  }

  return (
    <PageContainer>
      <Heading level={2}>React 19 Actions Example</Heading>

      <p className="mb-4">
        Actions in React 19 simplify handling form submissions, loading states,
        and transitions. This example demonstrates client-side actions for
        managing a todo list with optimistic updates and transitions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card background="blue">
          <Heading level={3}>Add New Todo</Heading>
          <TodoForm formRef={formRef} addTodo={addTodo} />
        </Card>

        <Card>
          <Heading level={3}>
            Todo List {isPending && <small>(Updating...)</small>}
          </Heading>
          <TodoList
            todos={optimisticTodos}
            isPending={isPending}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        </Card>
      </div>

      <Card background="gray">
        <FeatureList title="Key Action Features:" items={actionFeatures} />
        <div className="mt-4">
          <Heading level={4}>Implementation Notes:</Heading>
          <p>
            This example uses <CodeBlock>useOptimistic</CodeBlock> for immediate
            UI updates, <CodeBlock>useFormStatus</CodeBlock> for form submission
            state, and <CodeBlock>useTransition</CodeBlock> for non-blocking
            updates.
          </p>
        </div>
      </Card>
    </PageContainer>
  );
}
