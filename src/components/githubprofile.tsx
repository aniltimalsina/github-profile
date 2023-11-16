import { useState, useEffect } from "react";
import ProfileCard from "./profilecard";
import RepositoryList from "./repositorylist";
import "../profile.css";

function GitHubProfile() {
  const [profileData, setProfileData] = useState([]);
  const userName = "aniltimalsina";

  useEffect(() => {
    async function getProfile() {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      return setProfileData(data);
    }
    getProfile();
  }, []);

  return (
    <div>
      {profileData ? (
        <div className="container">
          <ProfileCard profile={profileData} />
          <RepositoryList repositoriesUrl={profileData} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default GitHubProfile;
