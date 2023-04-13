import Header from './Components/Header';
import './App.css';
import { UserProvider } from './Context/context';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Header />
        <main className='repo-container'>
          <div className='repo-content'>
            <div className='repo'></div>
            <div className='repo'></div>
            <div className='repo'></div>
            <div className='repo'></div>
            <div className='repo'></div>
            <div className='repo'></div>
            <div className='repo'></div>
          </div>
        </main>
      </div>
    </UserProvider>
  );
}

export default App;
