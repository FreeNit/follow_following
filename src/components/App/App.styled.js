import styled from 'styled-components';

export const AppStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export const SpinnerPopup = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(221, 221, 221, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 300px;
    height: 300px;
    object-fit: fill;
  }
`;
