import { useFormStatus } from "react-dom";
import Button from "../ui/Button";

interface TodoFormProps {
  formRef: React.RefObject<HTMLFormElement | null>;
  addTodo: (formData: FormData) => Promise<void>;
}

/**
 * Form component for adding new todos with loading state
 */
export function TodoForm({ formRef, addTodo }: TodoFormProps) {
  // Get form status - pending state during submission
  const { pending } = useFormStatus();

  return (
    <form ref={formRef} action={addTodo} className="mt-2">
      <div className="flex flex-col gap-2">
        <input
          type="text"
          name="todoText"
          className="border rounded p-2"
          placeholder="What needs to be done?"
          disabled={pending}
          required
        />
        <Button type="submit" disabled={pending}>
          {pending ? "Adding..." : "Add Todo"}
        </Button>
      </div>
    </form>
  );
}
