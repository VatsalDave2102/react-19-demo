interface LoadingFallbackProps {
  message?: string;
  className?: string;
}

/**
 * A consistent loading fallback component to use with Suspense
 */
export default function LoadingFallback({
  message = "Loading...",
  className = "",
}: LoadingFallbackProps) {
  return (
    <div
      className={`p-4 border border-gray-200 rounded bg-gray-50 ${className}`}
    >
      {message}
    </div>
  );
}
