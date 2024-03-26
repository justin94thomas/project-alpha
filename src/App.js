import EntryPoint from './EntryPoint';
import { SnackbarProvider } from 'notistack';
import './App.css';
function App() {
  return (
    <div className="App">
      <SnackbarProvider>
        <EntryPoint />
      </SnackbarProvider>
    </div>
  );
}

export default App;
