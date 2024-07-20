import Header from "./Components/Header";
import { ways } from "./data.js";

function WayToTeach({ title, description }) {
  return (
    <li>
      <p>
        <strong>{title}</strong> {description}
      </p>
    </li>
  );
}
export default function App() {
  return (
    <div>
      <Header />

      <main>
        <h1>Hello React</h1>
        <section>
          <h3>Our way to teach</h3>
          <ul>
            <WayToTeach {...ways[0]} />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}
