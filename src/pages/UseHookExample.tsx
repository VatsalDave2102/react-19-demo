import { Suspense } from "react";
import Card from "../components/ui/Card";
import CodeBlock from "../components/ui/CodeBlock";
import FeatureList from "../components/ui/FeatureList";
import Heading from "../components/ui/Heading";
import LoadingFallback from "../components/ui/LoadingFallback";
import PageContainer from "../components/ui/PageContainer";
import UserProfile from "../components/UserProfile";
import { simulateApiCall } from "../utils/apiUtils";

// Component that uses the use() hook with the extracted UserProfile component
function UserProfileContainer() {
  const fetchUser = simulateApiCall(
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Developer",
    },
    1500
  );

  return (
    <Suspense fallback={<LoadingFallback message="Loading user profile..." />}>
      <UserProfile userDataPromise={fetchUser} />
    </Suspense>
  );
}

export default function UseHookExample() {
  const keyFeatures = [
    "Works with promises, context, and other resources",
    "Reduces boilerplate compared to useState + useEffect patterns",
    "Automatically integrates with Suspense for loading states",
    "Follows resource consumption patterns consistently",
  ];

  return (
    <PageContainer>
      <Heading level={2}>use() Hook Example</Heading>
      <p className="mb-6">
        The <CodeBlock>use()</CodeBlock> hook is a new React 19 feature that
        allows you to use resources like promises directly in your components.
        It's a more straightforward way to handle async data compared to
        useEffect + useState patterns.
      </p>

      <div className="mb-4">
        <Heading level={3}>Live Example:</Heading>
        <UserProfileContainer />
      </div>

      <Card background="gray">
        <FeatureList title="Key Features:" items={keyFeatures} />
      </Card>
    </PageContainer>
  );
}
