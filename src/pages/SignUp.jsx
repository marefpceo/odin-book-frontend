import { Link } from "react-router";
import Button from "../components/Button";
import logo from "../assets/odin-book-logo.png";

function SignUp() {
  function handleSubmit(e) {
    // logic to submit sign up form
    e.preventDefault();
  }
  // TODO optional - bio and avatar
  return (
    <>
      <title>Odin Book | Sign up</title>
      <meta
        name="description"
        content="Sign up today to start meet new friends. Everyone is waiting. Sign up today!"
      />
      <div
        role="main"
        className="relative h-dvh p-2 flex flex-col justify-evenly"
      >
        <img
          src={logo}
          alt="Odin Book logo"
          width={100}
          className="pt-4 self-center"
        />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-1 justify-center gap-y-4"
        >
          <span className="flex w-fit *:w-1/2 gap-x-2">
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First name"
            />
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last name"
            />
          </span>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
          <input type="text" name="email" id="email" placeholder="Email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            placeholder="Confirm password"
          />
          <Button
            text={"Sign up"}
            style={
              "w-full h-10 text-odinbook-light bg-odinbook-dark z-50 self-center rounded-3xl dark:bg-odinbook-dark"
            }
          />
        </form>
        <span className="pb-8">
          <Link to={"/login"}>
            <Button
              text={"Already signed up? Log in"}
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

export default SignUp;
