import FriendList from './FriendList';
import friends from '../data/friends.json';
export const App = () => {
  return (
    <div>
      <FriendList friends={friends} />
    </div>
  );
};
export default App;
