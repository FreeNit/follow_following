import { GlobalStyle } from './components/GlobalStyle';
import { getUsers } from './redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { UsersCollection } from './components/users/UsersList';

import { AppStyled, SpinnerPopup } from './components/App/App.styled';
import { selectIsLoading } from './redux/selectors';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const isLoadingValue = useSelector(selectIsLoading);

  return (
    <AppStyled>
      {isLoadingValue && (
        <SpinnerPopup>
          <img src={require('./images/spinner.gif')} alt='spinner' />
          <h3>...Data is loading</h3>
        </SpinnerPopup>
      )}
      <section>
        <UsersCollection />
      </section>

      <GlobalStyle />
    </AppStyled>
  );
}

export default App;
