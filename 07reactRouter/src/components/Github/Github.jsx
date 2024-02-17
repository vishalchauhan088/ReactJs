import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import GithubCard from "./GithubCard";

export default function Github() {
  const [githubUser, setGithubUser] = useState("vishalchauhan088");
  const [githubData, setGithubData] = useState({});

  const [user, setUser] = useState("");

  const api = `https://api.github.com/users/${githubUser}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios;
        const res = await axios.get(api);
        setGithubData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [githubUser]);

  useEffect(() => {
    console.log(githubData);
  }, [githubData]);

  useEffect(()=>{
    console.log(user);
  },[user])

  return (
    <div className="flex justify-start my-16 items-center ">

      <div className="">
        
        <GithubCard data = {githubData}/>
      </div>

      <form className=" max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto  bg-white shadow-lg rounded-lg text-gray-900 h-40">
        <input
          className=" w-80 h-10  mx-3 ps-10 text-sm border border-gray-300 rounded-lg bg-white-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="search"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        ></input>
        <input 
          className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  my-3 focus:outline-none"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setGithubUser(user);
          }}
        />
      </form>

      
    </div>
  );
}
