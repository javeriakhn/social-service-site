import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputField = ({ value, onChange, label, placeholder, type, error }) => {
  return (
    <div className="flex flex-col my-1 w-full max-md:max-w-full">
      <label className="text-base font-semibold text-zinc-900">{label}</label>
      <input
        value={value}
        onChange={onChange}
        type={type || "text"}
        placeholder={placeholder}
        className={`gap-2 p-3 mt-2 w-full max-w-full text-sm leading-6 bg-gray-50 rounded-md ${
          !!error ? "border-[#E1410E]" : "border-gray-300"
        } border-solid border-[0.795px] text-slate-500 w-[512px]`}
        aria-label={label}
      />
      {!!error && <div className="text-[#E1410E] mt-1">{error}</div>}
    </div>
  );
};

const PasswordField = ({ password, setPassword, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col mt-1 w-full text-sm max-md:max-w-full">
      <label
        htmlFor="password"
        className="text-base font-semibold text-zinc-900"
      >
        Password
      </label>
      <div className="relative mt-3 w-full">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Enter password"
          className={`p-3 w-full bg-gray-50 rounded-md border ${
            error ? "border-[#E1410E]" : "border-gray-300"
          } text-slate-500`}
          aria-label="Password"
        />
        {password.length > 0 && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
      {!!error && <div className="text-[#E1410E] mt-1">{error}</div>}
    </div>
  );
};

export { InputField, PasswordField };
