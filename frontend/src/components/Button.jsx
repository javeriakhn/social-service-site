import { Link } from "react-router-dom";

const RegularButton = ({ children, ...props }) => {
  return (
    <button
      className="px-6 py-3 my-1 text-2xl md:text-3xl bg-zinc-300 bg-opacity-60 rounded-[40px]"
      {...props}
    >
      {children}
    </button>
  );
};

const HeaderButton = ({ children, ...props }) => {
  return (
    <button
      className="px-6 py-1 md:py-3 my-1 text-2xl md:text-3xl bg-zinc-300 bg-opacity-60 rounded-[40px]"
      {...props}
    >
      {children}
    </button>
  );
};

const SignUpButton = ({ text }) => {
  return (
    <button className="flex flex-col w-full font-semibold text-zinc-100 max-md:max-w-full">
      <span className="gap-1 self-stretch p-4 w-full rounded bg-neutral-950 min-h-[48px] max-md:max-w-full">
        {text}
      </span>
    </button>
  );
};

export default RegularButton;
export { HeaderButton, SignUpButton };
