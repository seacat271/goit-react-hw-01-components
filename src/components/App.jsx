
import {user, data, friends, transactions} from "../data";


import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import StatList from "./Statistics/StatList";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics 
        title="Upload stats"
      >
        <StatList
        stats={data}
        />
      </Statistics>
      <FriendList
      friends = {friends}/>
      <TransactionHistory
      items = {transactions}/>
    </div>
  );
};
