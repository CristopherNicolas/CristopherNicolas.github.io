import React from "react";
const profileImg =
  "/src/assets/images/profile.png";

export function ProfileImage() {
  return (
    <>
      <img
        src={profileImg}
        alt="Profile"
        width={410}
        height={410}
      
        style={{ borderRadius: "50%" }} // Ejemplo de estilo par
      />
    </>
  );
}

export default ProfileImage;
