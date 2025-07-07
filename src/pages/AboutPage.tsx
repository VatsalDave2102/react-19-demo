import PageContainer from "../components/ui/PageContainer";
import Heading from "../components/ui/Heading";

export default function AboutPage() {
  return (
    <PageContainer>
      <Heading level={2}>About This Demo</Heading>
      <title>About</title> {/* example of document metadata*/}
      <meta name="author" content="Vatsal" />
      <link rel="author" href="https://github.com/vatsaldave-simform" />
      <p className="mb-4">
        This application was created to demonstrate how to use React 19 features
        along with Tailwind CSS and React Router.
      </p>
      <p className="mb-4">
        React 19 introduces several new features and improvements that make it
        easier to build more interactive and responsive applications.
      </p>
      <p>
        Explore the sidebar menu to see different examples of React 19 features
        in action.
      </p>
    </PageContainer>
  );
}
