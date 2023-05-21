import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from '../../redux/selectors';

import {
  UsersContainer,
  UsersList,
  UserItem,
  UserDate,
  AvatarWrapper,
  FollowBtn,
  UserDetails,
  LoadMoreWrapper,
  DecorLine,
} from './UsersList.styled';
import { followUser, loadMoreUsers } from '../../redux/operations';
import { followUserStatus, increasePage } from '../../redux/contactsSlice';

export const UsersCollection = () => {
  const dispatch = useDispatch();
  let currentPage = useSelector((state) => state.users.page);
  const { users } = useSelector(selectUsers);

  return (
    <UsersContainer>
      <h3>Tweets</h3>
      {users.length > 0 && (
        <UsersList>
          {users.map((user) => (
            <UserItem key={user.id}>
              <DecorLine />
              <img src={require('./../../images/Logo.png')} alt='top_bg' />

              <div>
                <img src={require('./../../images/top_bg.png')} alt='top_bg' />
              </div>
              <UserDate>
                <AvatarWrapper>
                  <img src={user.avatar} width='80' alt='avatar' />
                </AvatarWrapper>
                <UserDetails>
                  <span>{user.tweets} TWEETS</span>
                  <span>
                    {user.followers.toLocaleString('en-US')} FOLLOWERS
                  </span>
                </UserDetails>
                {/* <span>isFollowing: {user.isFollowing.toString()}</span> */}
                <FollowBtn
                  className={
                    user.isFollowing ? 'follow-green' : 'unfollow-white'
                  }
                  type='button'
                  onClick={() => {
                    dispatch(followUser(user));

                    dispatch(followUserStatus(user.id));
                  }}
                >
                  {user.isFollowing ? 'Following' : 'Follow'}
                </FollowBtn>
              </UserDate>
            </UserItem>
          ))}
        </UsersList>
      )}
      <LoadMoreWrapper>
        <button
          type='button'
          onClick={() => {
            dispatch(loadMoreUsers(currentPage + 1));
            dispatch(increasePage(currentPage + 1));
          }}
        >
          Load more...
        </button>
      </LoadMoreWrapper>
    </UsersContainer>
  );
};
