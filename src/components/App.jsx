
import dataUser from "../components/User/user.json";
import data from "../components/Statistics/data.json";
import friends from "../components/FriendList/friends.json";
import transactions from "../components/TransactionHistory/transactions.json";

import UserProfile from "./User/User-profile";
import Statistics from "./Statistics/Statistics";
import StatList from "./Statistics/StatList";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div>
      <UserProfile
        username={dataUser.username}
        tag={dataUser.tag}
        location={dataUser.location}
        avatar={dataUser.avatar}
        stats={dataUser.stats}
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
