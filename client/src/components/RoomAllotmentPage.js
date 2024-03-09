import React, { useState } from "react";
// import NavBar from "./components/Navbar";
const RoomTypeOptions = ({ onSelectRoomType }) => {
  const roomTypes = [
    "4 Bed Non AC",
    "4 Bed Non AC",
    "3 Bed AC",
    "3 Bed Non AC",
    "2 Bed AC",
    "2 Bed Non AC",
  ];

  return (
    <div style={{ margin: "20px" }}>
      <h3>Select Room Type:</h3>
      <ul>
        {roomTypes.map((type, index) => (
          <li key={index} onClick={() => onSelectRoomType(type)}>
            {type}
          </li>
        ))}
      </ul>
    </div>
  );
};

const RoomAllotmentPage = () => {
  const [selectedRoomType, setSelectedRoomType] = useState("");

  const handleRoomTypeSelection = (roomType) => {
    setSelectedRoomType(roomType);
    // You can perform additional logic based on the selected room type
  };

  return (
    <div>
      <RoomTypeOptions onSelectRoomType={handleRoomTypeSelection} />
      {selectedRoomType && (
        <div style={{ margin: "20px" }}>
          <h3>Selected Room Type: {selectedRoomType}</h3>
        </div>
      )}
    </div>
  );
};

export default RoomAllotmentPage;
