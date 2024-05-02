import EntryPoint from './EntryPoint';
import { SnackbarProvider } from 'notistack';
import './App.css';
import { connect } from 'react-redux';
function App() {
  return (
    <div className="App">
      <SnackbarProvider>
        <EntryPoint />
      </SnackbarProvider>
    </div>
  );
}

const mapStateToProps = state => ({
  dashboardProjects: state.dashboardProjects,
  showProjects: state.showProjects
})
export default connect(mapStateToProps)(App);
