import { useDispatch, useSelector } from 'react-redux';
import { UsersCollection } from '../components/users/UsersList';
import { getUsers } from '../redux/operations';
import { useEffect } from 'react';
import { selectIsLoading } from '../redux/selectors';
import { SpinnerPopup } from '../components/App/App.styled';
import { clearState } from '../redux/contactsSlice';

export const Twits = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearState());
    dispatch(getUsers());
  }, [dispatch]);

  const isLoadingValue = useSelector(selectIsLoading);

  return (
    <section>
      {isLoadingValue && (
        <SpinnerPopup>
          <img src={require('./../images/spinner.gif')} alt='spinner' />
          <h3>...Data is loading</h3>
        </SpinnerPopup>
      )}

      <UsersCollection />
    </section>
  );
};
