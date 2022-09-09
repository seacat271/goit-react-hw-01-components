import UserProfile from "./User/User-profile";
import Statistics from "./Statistics/Statistics";
import dataUser from "../components/User/user.json";
import data from "../components/Statistics/data.json";
import StatList from "./Statistics/StatList";

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
    </div>
  );
};
