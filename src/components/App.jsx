import UserProfile from "../components/User-profile";
import dataUser from "../user.json";



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
    </div>
  );
};
