import styles from "./FriendList.module.css";

function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <li className={styles.item} key={id}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;
