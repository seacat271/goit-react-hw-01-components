import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList (props) {
    const {friends} = props;
    return (
        <ul className={css.friend__list}>
        {friends.map (({avatar, name, isOnline, id}) => 
        <FriendListItem key = {id}
            avatar = {avatar}
            name = {name}
            isOnline = {isOnline}
        />
        )}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    })),
  };