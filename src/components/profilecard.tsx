function ProfileCard(props) {
  console.log(props);
  return (
    <div className="profile-card">
      <h1>My Github Details</h1>
      <img src={props.profile.avatar_url} alt="User Avatar" />
      <h2>{props.profile.login}</h2>
      <p>{props.profile.bio}</p>
      <p>Followers: {props.profile.followers}</p>
      <p>Following: {props.profile.following}</p>
    </div>
  );
}

export default ProfileCard;
