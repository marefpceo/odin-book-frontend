import { useState } from "react";
import { Link } from "react-router";
import Button from "../components/Button";
import logo from "../assets/odin-book-logo.png";

import userLogin from "../api/apiAuthServices";

function Login() {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  // async function loginUser(input) {
  //   const response = await userLogin(input.email, input.password);

  //   console.log(response.ok);
  // }

  function handleChange(e) {
    const value = e.target.value;
    setLoginInput((prevData) => ({
      ...prevData,
      [e.target.name]: value,
    }));
  }

  function handleSubmit(e) {
    // logic to submit login form
    e.preventDefault();
    // loginUser(loginInput);
  }

  return (
    <>
      <title>Odin Book | Log in</title>
      <meta
        name="description"
        content="Welcome to the Odin Book. Log in to catch up on what you have missed!"
      />
      <div
        role="main"
        className="relative h-dvh p-2 flex flex-col justify-evenly"
      >
        <img
          src={logo}
          alt="Odin Book logo"
          width={100}
          className="absolute self-center top-20"
        />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-1 justify-center gap-y-4"
        >
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <Button
            text={"Log in"}
            style={
              "w-full h-10 text-odinbook-light bg-odinbook-dark z-50 self-center rounded-3xl dark:bg-odinbook-dark"
            }
          />
        </form>
        <span className="pb-8">
          <Link to={"/signup"}>
            <Button
              text={"Create new account"}
              style={
                "w-full h-10 text-odinbook-dark bg-odinbook-light border border-odinbook-dark z-50 self-center rounded-3xl dark:bg-darkmode-dark dark:text-odinbook-altDark"
              }
            />
          </Link>
        </span>
      </div>
    </>
  );
}

export default Login;
