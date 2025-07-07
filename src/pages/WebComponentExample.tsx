import { useState } from "react";
import Heading from "../components/ui/Heading";
import PageContainer from "../components/ui/PageContainer";
import MyComponent from "../components/webcomponents/MyCustomElement";

const WebComponentExample = () => {
  const [colour, setColour] = useState("grey");
  return (
    <PageContainer>
      <Heading level={2}>Web component example</Heading>
      <div style={{ height: "5rem", width: "5rem", background: colour }}></div>
      <MyComponent
        colour={colour}
        onColourChange={(event) => setColour(event.detail)}
      />
    </PageContainer>
  );
};

export default WebComponentExample;
