import styled from '@emotion/styled';

export const Container = styled.div`
  display: inline-block;

  margin-top: 50px;
  padding: 4px;
  padding-top: 16px;

  border-radius: 8px;
  overflow: hidden;
  box-shadow: 11px 11px 42px 1px rgba(0, 0, 0, 0.75);
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 500;
  margin-bottom: 24px;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  min-height: 100px;
`;
export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 80px;
`;
export const Label = styled.span`
  font-size: 16px;
  color: white;
  margin-bottom: 24px;
`;
export const Percentage = styled.span`
  font-size: 24px;
  color: white;
`;
