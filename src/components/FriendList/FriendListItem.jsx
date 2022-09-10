import css from "./FriendListItem.module.css";

export default function FriendListItem (props) {
    const {avatar, name, isOnline} = props
    return (
        <li className={css.item}>
            <span className={`${css.status} ${isOnline && css.isOnline}`}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
      )

}

   
        

