import React from "react";
const profileImg =
  "https://media.licdn.com/dms/image/v2/D4D03AQHf0ZiiA3N4vQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719622103452?e=1733961600&v=beta&t=6bBcI0dh5Z6hLE3sc_7mNB1VBnmN34QdUEVdatwVxKw";

export function ProfileImage() {
  return (
    <>
      <img
        src={profileImg}
        alt="Profile"
        width={100}
        height={100}
        className="logo"
        style={{ borderRadius: "50%" }} // Ejemplo de estilo par
      />
    </>
  );
}

export default ProfileImage;
