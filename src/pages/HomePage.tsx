import PageContainer from "../components/ui/PageContainer";
import Heading from "../components/ui/Heading";
import Card from "../components/ui/Card";
import FeatureList from "../components/ui/FeatureList";
import CodeBlock from "../components/ui/CodeBlock";

export default function HomePage() {
  const reactFeatures = [
    <>
      <CodeBlock>ref</CodeBlock> as a prop
    </>,
    <>
      The <CodeBlock>use()</CodeBlock> hook for data fetching
    </>,
    "Document API for metadata management",
    <>
      Enhanced Form management with <CodeBlock>useOptimistic</CodeBlock>,{" "}
      <CodeBlock>useFormStatus</CodeBlock>, <CodeBlock>useTransition</CodeBlock>
    </>,
    "New React Compiler",
    "Better Suspense integration",
  ];

  return (
    <PageContainer>
      <Heading level={2}>Welcome to React 19 Demo</Heading>
      <title>Home</title> {/* example of document metadata*/}
      <meta name="author" content="Vatsal" />
      <link rel="author" href="https://github.com/vatsaldave-simform" />
      <p className="mb-4">
        This demo application showcases some of the new features in React 19.
        Use the sidebar to navigate between different examples.
      </p>
      <Card background="blue" border={true}>
        <FeatureList title="New Features in React 19" items={reactFeatures} />
      </Card>
    </PageContainer>
  );
}
