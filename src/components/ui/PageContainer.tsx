interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A container component for page content with consistent styling
 * Used as the main wrapper for all pages in the application
 */
export default function PageContainer({
  children,
  className = "",
}: PageContainerProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
}
