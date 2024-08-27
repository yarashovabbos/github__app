// src/app/page.tsx

"use client";

import React, { useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";

interface UserData {
  login: string;
  avatar_url: string;
  public_repos: number;
}

interface Repository {
  name: string;
  html_url: string;
}

const HomePage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [error, setError] = useState<string>("");

  const fetchUserData = async (username: string) => {
    try {
      setError(""); // Reset error state
      const userResponse = await axios.get<UserData>(
        `https://api.github.com/users/${username}`
      );
      setUserData(userResponse.data);

      const reposResponse = await axios.get<Repository[]>(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created`
      );
      setRepos(reposResponse.data);
    } catch (error) {
      setError("User not found");
      setUserData(null);
      setRepos([]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchUserData(username);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="max input input-bordered w-full max-w-xs"
        />
        <button type="submit" className=" btn btn-primary mt-2">
          Search
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {userData && <UserCard user={userData} repos={repos} />}
    </div>
  );
};

export default HomePage;
