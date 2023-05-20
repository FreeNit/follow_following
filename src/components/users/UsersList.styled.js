import styled from 'styled-components';

export const UsersContainer = styled.div`
  width: 1200px;
  display: inline-flex;
  flex-direction: column;
  gap: 15px;
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
  height: 250px;
  flex-basis: calc((100% - 60px) / 4);
  display: inline-block;
  padding: 15px;
  border: 1px solid black;
`;

export const UserDate = styled.div`
  display: inline-flex;
  flex-direction: column;

  gap: 5px;
`;
