import { Link } from "react-router-dom";
import { SignUpButton } from "../Button";
import tick from "../../assets/tick.png";

function SignUpSuccess() {
  return (
    <main className="flex flex-col items-center px-10 py-11 bg-white rounded-lg">
      <div className="flex gap-7 items-center p-3 rounded-[56px]">
        <img
          loading="lazy"
          src={tick}
          alt=""
          className="object-contain self-stretch my-auto h-[67px] aspect-[0.98]"
        />
      </div>
      <section className="flex flex-col items-center mt-8 w-full mb-5">
        <h1 className="text-2xl font-semibold leading-none text-neutral-950">
          Sign up successful
        </h1>
        <p className="mt-3 text-base leading-6 text-center text-zinc-600">
          Congratulations! Your account has been created successfully.
        </p>
      </section>
      <Link to="/signin">
        <SignUpButton text="Go to Sign in Page" />
      </Link>
    </main>
  );
}

export default SignUpSuccess;
