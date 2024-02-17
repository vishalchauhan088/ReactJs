import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios';
export default function Github() {
  const [githubUser, setGithubUser] = useState("vishalchauhan088");
  const api = `https://api.github.com/users/vishalchauhan088`;
  const [githubData, setGithubData] = useState({});

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setGithubData(res);
        console.log(res);
        console.log(githubData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [githubUser]);

  return (
    <div>
      <form>
        <input type="text" value={githubUser.name}></input>
        <input
          type="submit"
          onSubmit={(e) => {
            e.preventDefault();
            setGithubUser(e.target.value);
          }}
        />
      </form>

      <div>
        <p>{githubData.name}</p>
      </div>
    </div>
  );
}
