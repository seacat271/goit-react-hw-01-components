import FriendListItem from "./FriendListItem";
export default function FriendList (props) {
    const {friends} = props;
    return (
        <ul class="friend-list">
            {/* <FriendListItem
            items = {friends}/> */}
        {friends.map (({avatar, name, id, isOnline}) => 
        <FriendListItem
        avatar = {avatar}
        name = {name}
        id = {id}
        isOnline = {isOnline}
        />)

}

        </ul>
    )
}