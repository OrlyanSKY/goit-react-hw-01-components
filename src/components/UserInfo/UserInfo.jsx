import { Wrapper, Avatar, Title, Tag, Location } from './UserInfo.styled';
import PropTypes from 'prop-types';
export const UserInfo = ({ avatar, username, tag, location }) => {
  return (
    <Wrapper>
      <Avatar src={avatar} alt="User avatar" />
      <Title>{username}</Title>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Wrapper>
  );
};

UserInfo.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
