import Feed from "@/components/Feed";
import React from "react";

const Home = () => {
  return (
    <div>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Discover & Share
          <br/>
          <span className="orange_gradient text-center">
            AI-Powered Prompts
          </span>
        </h1>
        <p className="desc text-center">
          Promptopia is an open-source AI promptiong tool for modern world to
          discover, create & share creative prompts.
        </p>
        <Feed />
      </section>
    </div>
  );
};

export default Home;
