type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps {
  level: HeadingLevel;
  children: React.ReactNode;
  className?: string;
}

/**
 * A reusable heading component that renders the appropriate heading level (h1-h6)
 * with consistent styling based on the level
 */
export default function Heading({
  level,
  children,
  className = "",
}: HeadingProps) {
  const baseStyle = "font-bold mb-4";

  const getSizeClass = () => {
    switch (level) {
      case 1:
        return "text-3xl";
      case 2:
        return "text-2xl";
      case 3:
        return "text-xl";
      case 4:
        return "text-lg";
      case 5:
        return "text-base";
      case 6:
        return "text-sm";
    }
  };

  const classes = `${baseStyle} ${getSizeClass()} ${className}`;

  switch (level) {
    case 1:
      return <h1 className={classes}>{children}</h1>;
    case 2:
      return <h2 className={classes}>{children}</h2>;
    case 3:
      return <h3 className={classes}>{children}</h3>;
    case 4:
      return <h4 className={classes}>{children}</h4>;
    case 5:
      return <h5 className={classes}>{children}</h5>;
    case 6:
      return <h6 className={classes}>{children}</h6>;
  }
}
