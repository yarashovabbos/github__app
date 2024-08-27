import React from "react";
import "../styles/globals.css";

interface Repository {
  name: string;
  html_url: string;
}

interface RepositoryListProps {
  repos: Repository[];
}

// Define arrays for different background and text colors
const backgroundColors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"];
const textColors = ["text-white", "text-black", "text-gray-200", "text-gray-800", "text-gray-400"];

const RepositoryList: React.FC<RepositoryListProps> = ({ repos }) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold blom">Oxirigi 5 ta repostoriy</h3>
      <ul>
        {repos.map((repo, index) => (
          <li
            key={repo.name}
            className={`mt-2 floop ${backgroundColors[index % backgroundColors.length]} ${textColors[index % textColors.length]} rounded-2xl p-4 text-lg`} // Dynamically set background and text color
          >
            <a
              href={ repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline" // Optional underline for links
            >
              @{repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;
