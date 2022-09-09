

export default function FriendListItem (props) {
    const {avatar, name, id, isOnline} = props
    return (
    <li class="item" key = {id}>
        <span class="status"></span>
        <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p class="name">{name}</p>
    </li>)

}