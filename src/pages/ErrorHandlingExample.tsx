import { useState } from "react";

import Button from "../components/ui/Button";
import PageContainer from "../components/ui/PageContainer";

const Boom = () => {
  throw new Error("Error triggered!");
};

const ErrorHandlingExample = () => {
  const [triggerUncaughtError, setTriggerUncaughtError] = useState(false);
  const [triggerCaughtError, setTriggerCaughtError] = useState(false);

  return (
    <PageContainer className="flex items-center gap-2">
      <Button onClick={() => setTriggerUncaughtError(true)}>
        Trigger uncaught error
      </Button>
      {triggerUncaughtError && <Boom />}
      <Button onClick={() => setTriggerCaughtError(true)}>
        Trigger caught error
      </Button>
      {triggerCaughtError && <Boom />}
    </PageContainer>
  );
};

export default ErrorHandlingExample;
