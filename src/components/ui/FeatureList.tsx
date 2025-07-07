interface FeatureListProps {
  items: React.ReactNode[];
  title?: string;
  className?: string;
}

/**
 * A component for displaying a list of features or items with consistent styling
 */
export default function FeatureList({
  items,
  title,
  className = "",
}: FeatureListProps) {
  return (
    <div className={className}>
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <ul className="list-disc pl-5 space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
