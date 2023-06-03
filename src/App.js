
import TodoList from './components/TodoList';
import NewTask from './components/NewTask';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <div className='container d-flex '>
        <NewTask ></NewTask>
        <TodoList ></TodoList>
      </div>
    </AppProvider>

  );
}

export default App;
