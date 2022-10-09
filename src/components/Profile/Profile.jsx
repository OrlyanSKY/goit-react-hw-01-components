import { UserInfo } from 'components/UserInfo/UserInfo';
import { UserStats } from 'components/UserStats/UserStats';
import { Card } from './Profile.styled';

export const Profile = ({
  user: { stats, avatar, username, tag, location },
}) => {
  return (
    <Card>
      <UserInfo
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
      />
      <UserStats stats={stats} />
    </Card>
  );
};
