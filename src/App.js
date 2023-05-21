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
      <section>
        <UsersCollection />
      </section>
    </div>
  );
}

export default App;
