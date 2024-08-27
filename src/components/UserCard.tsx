import React from "react";
import RepositoryList from "./RepositoryList";

interface UserData {
  login: string;
  avatar_url: string;
  public_repos: number;
}

interface Repository {
  name: string;
  html_url: string;
}

interface UserCardProps {
  user: UserData;
  repos: Repository[];
}

const UserCard: React.FC<UserCardProps> = ({ user, repos }) => {
  return (
    <div className="jone blok__user card bg-base-100 shadow-md mt-4 p-4 flex flex-col items-center">
     
      <a
        href={`https://github.com/${user.login}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 flex justify-center" 
      >
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-32 h-32 rounded-full transform transition-transform duration-200 hover:scale-110 shadow-lg" // Larger image, hover effect, and shadow
        />
      </a>

      <div className="text__user text-center flex items-center justify-between">
       
        <div className="end">
          <a
            href={`https://github.com/${user.login}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl  font-bold" 
          >
            username : @{user.login}
          </a>
          <p >Repositories: {user.public_repos}</p>
        </div>
      </div>
      
      <RepositoryList repos={repos} />
    </div>
  );
};

export default UserCard;
