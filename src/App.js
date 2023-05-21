import { GlobalStyle } from './components/GlobalStyle';
import { getUsers } from './redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { UsersCollection } from './components/users/UsersList';

import { AppStyled } from './components/App/App.styled';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <AppStyled>
      <section>
        <UsersCollection />
      </section>

      <GlobalStyle />
    </AppStyled>
  );
}

export default App;
