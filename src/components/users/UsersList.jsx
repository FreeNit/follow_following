import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from '../../redux/selectors';

import {
  UsersContainer,
  UsersList,
  UserItem,
  UserDate,
} from './UsersList.styled';
import { followUser, getUsers } from '../../redux/operations';
import { increasePage } from '../../redux/contactsSlice';

export const UsersCollection = () => {
  const dispatch = useDispatch();
  let currentPage = useSelector((state) => state.users.page);
  console.log(currentPage);

  const { users } = useSelector(selectUsers);

  return (
    <UsersContainer>
      <h3>Tweets</h3>
      {users.length > 0 && (
        <UsersList>
          {users.map((user) => (
            <UserItem key={user.id}>
              <UserDate>
                <span>
                  <img src={user.avatar} width='50' height='50' alt='avatar' />
                </span>
                <span>{user.name}</span>

                <span>{user.tweets} TWEETS</span>
                <span>{user.followers.toLocaleString('en-US')} FOLLOWERS</span>
                <span>isFollowing: {user.isFollowing.toString()}</span>
                <button
                  type='button'
                  onClick={() => {
                    dispatch(followUser(user));
                  }}
                >
                  {user.isFollowing ? 'Following' : 'Follow'}
                </button>
              </UserDate>
            </UserItem>
          ))}
        </UsersList>
      )}
      <div>
        <button
          type='button'
          onClick={() => {
            dispatch(getUsers(currentPage + 1));
            dispatch(increasePage(currentPage + 1));
          }}
        >
          Load more...
        </button>
      </div>
    </UsersContainer>
  );
};
