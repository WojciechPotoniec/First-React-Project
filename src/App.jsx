import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

function App() {
  function handleSelected(selectedButton) {
    console.log(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelected('Components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelected('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelected('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelected('State')}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
