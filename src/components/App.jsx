import FriendList from './FriendList';
import friends from '../data/friends.json';
import Profile from './Profile';
import user from '../data/user.json'
export const App = () => {
  return (
    <div>
      <FriendList friends={friends} />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
export default App;