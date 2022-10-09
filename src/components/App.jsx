import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from '../user.json';
import data from '../data';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
