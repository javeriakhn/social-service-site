import signIn from "../assets/signin.png";
import SignInForm from "../components/SignInForm";

const SignInPage = () => {
  return (
    <main className="flex overflow-hidden flex-col justify-center items-center px-16 py-12 bg-white max-md:px-5 font-[Inter]">
      <div className="flex flex-wrap gap-10 w-full max-w-[1320px] max-md:max-w-full">
        <section className="flex flex-col grow shrink self-stretch my-auto rounded-none min-w-[240px] w-[610px] max-md:max-w-full">
          <div className="relative pt-px  w-full  rounded-[30px] max-md:max-w-full">
            <img
              loading="lazy"
              src={signIn}
              className="object-contain w-full aspect-[0.9] rounded-[30px] max-md:max-w-full"
              alt=""
            />
          </div>
        </section>
        <section className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[410px] max-md:max-w-full">
          <div className="flex flex-col self-start text-zinc-800 max-md:max-w-full">
            <h1 className="text-4xl font-semibold leading-tight">Sign in</h1>
            <p className="my-2 text-base opacity-75 max-md:max-w-full">
              Let’s sign in to your account and get started.
            </p>
          </div>
          <SignInForm />
        </section>
      </div>
    </main>
  );
};

export default SignInPage;
