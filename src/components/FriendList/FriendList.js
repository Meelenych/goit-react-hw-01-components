import FriendListItem from "./FriendListItem";
import friends from "./friends.json";
import styles from "./FriendList.module.css";
import PropTypes from "prop-types";

// let { avatar, name, isOnline } = friends;
console.log(friends);

function FriendList({ friends }) {
  return (
    <>
      <ul className={styles.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            id={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </>
  );
}

FriendList.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendList;
