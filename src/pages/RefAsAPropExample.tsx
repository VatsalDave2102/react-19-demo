import React, { useRef } from "react";
import Card from "../components/ui/Card";
import Heading from "../components/ui/Heading";
import PageContainer from "../components/ui/PageContainer";

function RefCard({
  ref,
  onMouseEnter,
  onMouseLeave,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      ref={ref}
      className="w-60"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Card background="blue">
        <Heading level={3}>Hover on me</Heading>

        <p>This is a paragraph.</p>
        <p>This is an additional paragraph.</p>
        <p>This is a third paragraph.</p>
      </Card>
    </div>
  );
}

export default function RefAsAPropExample() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "rotate(180deg)";
      cardRef.current.style.transition = "transform 0.3s ease-in-out";
    }
  };

  const handleZoomOut = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "scale(1)";
    }
  };

  return (
    <PageContainer>
      <Heading level={2}>Use Ref as a Prop</Heading>
      <title>Ref as a Prop Example</title> {/* example of document metadata*/}
      <meta name="author" content="Vatsal" />
      <link rel="author" href="https://github.com/vatsaldave-simform" />
      <p className="mb-6">
        Starting in React 19, you can now access ref as a prop for function
        components:
      </p>
      <RefCard
        ref={cardRef}
        onMouseEnter={handleZoomIn}
        onMouseLeave={handleZoomOut}
      />
    </PageContainer>
  );
}
