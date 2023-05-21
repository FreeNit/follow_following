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

import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'All', label: 'All' },
  { value: 'Follow', label: 'Follow' },
  { value: 'Following', label: 'Following' },
];

export const UsersCollection = () => {
  const dispatch = useDispatch();
  let currentPage = useSelector((state) => state.users.page);
  const { users } = useSelector(selectUsers);

  const [selectedOption, setSelectedOption] = useState('');

  console.log(selectedOption.value);

  const normalizedFilter = selectedOption.value
    ? selectedOption.value.toLowerCase()
    : '';

  const visibleUsers =
    users.length > 0
      ? users.filter((user) => {
          if (normalizedFilter === 'following') {
            return user.isFollowing === true;
          }
          if (normalizedFilter === 'follow') {
            return user.isFollowing === false;
          }
          return user;
        })
      : [];

  console.log('VISIBLE USERS -> ', visibleUsers);

  return (
    <UsersContainer>
      <h3>Tweets</h3>
      <div style={{ color: '#4c2a9a' }}>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
      {users.length > 0 && (
        <UsersList>
          {visibleUsers.map((user) => (
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
