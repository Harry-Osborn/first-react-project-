import Header from "./components/header.jsx";

import CoreConceptContainer from "./components/CoreConceptContainer.jsx";
import ExamplesContainer from "./components/ExamplesContainer.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConceptContainer />
        <ExamplesContainer />
      </main>
    </>
  );
}

export default App;
