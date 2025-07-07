interface CardProps {
  children: React.ReactNode;
  className?: string;
  border?: boolean;
  background?: "white" | "gray" | "blue" | "yellow";
}

/**
 * A reusable card component for displaying content in a visually distinct container
 */
export default function Card({
  children,
  className = "",
  border = false,
  background = "white",
}: CardProps) {
  const getBgColor = () => {
    switch (background) {
      case "gray":
        return "bg-gray-50";
      case "blue":
        return "bg-blue-50";
      case "yellow":
        return "bg-yellow-50";
      default:
        return "bg-white";
    }
  };

  const getBorderColor = () => {
    if (!border) return "";

    switch (background) {
      case "blue":
        return "border border-blue-200";
      case "yellow":
        return "border border-yellow-200";
      case "gray":
        return "border border-gray-200";
      default:
        return "border border-gray-200";
    }
  };

  return (
    <div
      className={`${getBgColor()} ${getBorderColor()} p-4 rounded-md ${className}`}
    >
      {children}
    </div>
  );
}
