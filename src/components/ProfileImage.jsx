import img from "../assets/images/profile.png" 

export function ProfileImage() {
  return (
    <>
      <img
        src={img}
        alt="Profile"
        width={410}
        height={380}
      
        style={{ borderRadius: "50%" }} // Ejemplo de estilo par
      />
    </>
  );
}

export default ProfileImage;
