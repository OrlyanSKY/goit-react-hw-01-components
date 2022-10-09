import { Wrapper, StatsListItem, Label, Quantity } from './UserStats.styled';
import PropTypes from 'prop-types';
export const UserStats = ({ stats: { followers, views, likes } }) => {
  return (
    <Wrapper>
      <StatsListItem>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </StatsListItem>
      <StatsListItem>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </StatsListItem>
      <StatsListItem>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </StatsListItem>
    </Wrapper>
  );
};

UserStats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
