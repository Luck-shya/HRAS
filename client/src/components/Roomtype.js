import React from "react";
import styles from "./stylesheets/Roomtype.css";

const RoomType = ({
  roomType,
  beds,
  ac,
  availability,
  friendsInvited,
  totalCapacity,
}) => (
  <div className={styles.roomType}>
    <h3>
      {roomType} {beds} BEDDED {ac ? "AC" : "NON AC"}
    </h3>
    <p className={styles.availability}>
      Availability: {availability} out of {totalCapacity}
    </p>
    {friendsInvited && (
      <p className={styles.friendsInvited}>Friends Invited: {friendsInvited}</p>
    )}
  </div>
);

RoomType.defaultProps = {
  ac: false,
  friendsInvited: 0,
};

export default RoomType;
