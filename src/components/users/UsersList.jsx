import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from '../../redux/selectors';

import {
  UsersContainer,
  UsersList,
  UserItem,
  UserDate,
} from './UsersList.styled';
import { followUser } from '../../redux/operations';

export const UsersCollection = () => {
  const dispatch = useDispatch();

  const { users } = useSelector(selectUsers);
  // console.log(users);

  return (
    <UsersContainer>
      <h3>Tweets</h3>
      {users.length > 0 && (
        <UsersList>
          {users.map((user) => (
            <UserItem key={user.id}>
              <UserDate>
                <span>
                  <img src={user.avatar} width='50' height='50' />
                </span>
                <span>{user.name}</span>

                <span>{user.tweets} TWEETS</span>
                <span>{user.followers} FOLLOWERS</span>
                <span>isFollowing: {user.isFollowing.toString()}</span>
                <button
                  type='button'
                  onClick={() => {
                    dispatch(followUser(user));
                  }}
                >
                  {user.isFollowing ? 'Unfollow' : 'Follow'}
                </button>
              </UserDate>
            </UserItem>
          ))}
        </UsersList>
      )}
      <div>
        <button type='button'>Load more...</button>
      </div>
    </UsersContainer>
  );
};
