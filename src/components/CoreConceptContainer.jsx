import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "../components/CoreConcepts.jsx";

export default function CoreConceptContainer() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((data) => (
          <CoreConcept {...data} />
        ))}
      </ul>
    </section>
  );
}
