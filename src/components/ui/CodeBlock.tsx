interface CodeBlockProps {
  children: string;
  className?: string;
}

/**
 * A component for rendering inline code blocks with consistent styling
 */
export default function CodeBlock({
  children,
  className = "",
}: CodeBlockProps) {
  return (
    <code className={`bg-gray-100 px-1 font-mono text-sm ${className}`}>
      {children}
    </code>
  );
}
