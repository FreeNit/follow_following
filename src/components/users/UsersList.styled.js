import styled from 'styled-components';

export const UsersContainer = styled.div`
  width: 1200px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  color: #ebd8ff;

  h3 {
    color: #4c2a9a;
    text-align: center;
  }
`;

export const UsersList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const UserItem = styled.li`
  position: relative;
  flex-basis: calc((100% - 45px) / 3);
  display: inline-block;
  padding: 15px;
  border: 1px solid black;
  border-radius: 20px;

  background-color: #4c2a9a;
  text-align: center;
`;

export const UserDate = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 25px;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  z-index: 5;
  display: inline-flex;
  justify-content: center;

  img {
    border-radius: 1000px;
    border: 5px solid #fff;
  }
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

export const FollowBtn = styled.button`
  /* padding: 14px 55px; */
  padding: 15px 5px;
  width: 200px;

  border-radius: 10px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 35px;
  background-color: #ebd8ff;
  cursor: pointer;
  transition: all 250ms ease-out;
  border: none;
  outline: none;

  &:hover {
    box-shadow: rgba(148, 136, 224, 0.7) 0px 5px 15px;
  }

  &.follow-green {
    background-color: #5cd3a8;
  }
`;

export const LoadMoreWrapper = styled.div`
  text-align: center;

  button {
    padding: 14px 55px;
    border-radius: 10px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 35px;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: #ebd8ff;
    transition: all 250ms ease-out;

    &:hover {
      box-shadow: rgb(76, 42, 154) 0px 5px 15px;
    }
  }
`;

export const DecorLine = styled.div`
  position: absolute;
  height: 5px;
  width: 100%;
  background-color: #fff;
  left: 0;
  top: 50%;
`;
