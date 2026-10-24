import JSXDemo from './JSXDemo';
import ButtonWithLogging from './ButtonWithLogging';
import DataLoader from './DataLoader';

function App() {
  return (
    <div>
      <h1>TP JSX et Composition</h1>
      <JSXDemo />
      <ButtonWithLogging label="Cliquer ici" />
      <DataLoader
        render={(data) => (
          <ul>
            {data.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        )}
      />
    </div>
  );
}

export default App;
