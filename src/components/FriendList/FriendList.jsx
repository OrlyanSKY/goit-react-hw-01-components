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
      {friends.map(friend => (
        <FriendListItem key={friend.id}>
          <Status online={friend.isOnline === true}></Status>
          <Avatar
            src={friend.avatar}
            alt={friend.name}
            width="48"
            style={{
              backgroundColor: randomColor({
                luminosity: 'dark',
                format: 'rgba',
                alpha: 0.5,
              }),
            }}
          />
          <Name>{friend.name}</Name>
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
