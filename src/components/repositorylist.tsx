import { useState, useEffect } from "react";

const RepositoryList = (props) => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function getRepo() {
      const response = await fetch(props.repositoriesUrl.repos_url);
      const data = await response.json();
      return setRepositories(data);
    }
    getRepo();
  }, [props.repositoriesUrl.repos_url]);

  return (
    <div className="repository-list">
      <h2>Repositories</h2>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;
