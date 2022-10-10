import randomColor from 'randomcolor';
import PropTypes from 'prop-types';
import {
  Wrapper,
  FriendListItem,
  Status,
  Avatar,
  Name,
} from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <Wrapper>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem key={id}>
          <Status online={isOnline === true}></Status>
          <Avatar
            src={avatar}
            alt={name}
            width="48"
            style={{
              backgroundColor: randomColor({
                luminosity: 'dark',
                format: 'rgba',
                alpha: 0.5,
              }),
            }}
          />
          <Name>{name}</Name>
        </FriendListItem>
      ))}
    </Wrapper>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
