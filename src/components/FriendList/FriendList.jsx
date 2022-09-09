import FriendListItem from "./FriendListItem";
export default function FriendList (props) {
    const {friends} = props;
    return (
        <ul class="friend-list">
        {friends.map (({avatar, name, isOnline, id}) => 
        <div key = {id}><FriendListItem
        avatar = {avatar}
        name = {name}
        isOnline = {isOnline}
        /></div>)

}

        </ul>
    )
}