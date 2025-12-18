import img from "../assets/images/profile.png";

export default function ProfileImage() {
  return (
    <div className="profile-image-wrapper">
      <img src={img} alt="Profile" />
    </div>
  );
}
