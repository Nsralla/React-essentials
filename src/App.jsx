import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import { CORE_CONCEPTS } from "./data.js";
import CoreConspet from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";
// this is called a component
function App() {
  const [selectedTopic, setSelectedTopic] = useState(); // init value

  function handleSelect(clickedButton) {
    setSelectedTopic(clickedButton);
  }

  let tabContent = <p>Please select a Content</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      {/* call the header */}
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {/* call core concepts component */}
            {CORE_CONCEPTS.map((conceptItem, index) => (
              <CoreConspet key={index} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* I will pass a function as a prop */}
            <TabButton
              isSelected={selectedTopic === "components" ? true : false}
              onSelect={() => handleSelect("components")}
            >
              Component
            </TabButton>

            <TabButton
              isSelected={selectedTopic === "jsx" ? true : false}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>

            <TabButton
              isSelected={selectedTopic === "props" ? true : false}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>

            <TabButton
              isSelected={selectedTopic === "state" ? true : false}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
