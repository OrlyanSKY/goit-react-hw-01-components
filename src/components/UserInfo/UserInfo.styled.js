import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px;
  padding-bottom: 50px;
  border-bottom: 1px solid grey;
`;
export const Avatar = styled.img`
  border-radius: 50%;
  margin-top: 50px;
  margin-bottom: 30px;
  width: 150px;
  background-color: blue;
`;
export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 30px;
`;
export const Tag = styled.p`
  font-size: 20px;
  margin-bottom: 8px;
  color: grey;
  font-weight: 600;
`;
export const Location = styled.p`
  color: grey;
  font-size: 18px;
  font-weight: 600;
`;
