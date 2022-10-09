import styled from '@emotion/styled';

export const Wrapper = styled.ul`
  width: 420px;
  margin: 0 auto;
  margin-top: 50px;
  color: red;
  
  }
`;
export const FriendListItem = styled.li`
  display: flex;
  align-items: center;

  padding: 8px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 11px 11px 42px 1px rgba(0, 0, 0, 0.75);
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
export const Status = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${p => {
    return p.online ? p.theme.colors.green : p.theme.colors.red;
  }};
`;
export const Avatar = styled.img`
  border-radius: 8px;
  border: 1px solid grey;
  padding: 4px;
  margin-left: 16px;
  margin-right: 32px;
  box-shadow: 11px 11px 42px 1px rgba(0, 0, 0, 0.75);
`;

export const Name = styled.p`
  color: black;
  font-weight: 500;
  font-size: 24px;
`;
