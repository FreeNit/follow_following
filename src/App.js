import logo from './logo.svg';
import './App.css';

import { getUsers } from './redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { UsersCollection } from './components/users/UsersList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className='App'>
      {/* <header className='App-header'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header> */}

      <section>
        <UsersCollection />
      </section>
    </div>
  );
}

export default App;
