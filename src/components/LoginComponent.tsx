import { User } from "../interfaces/User";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/userSlice";
import { useState } from "react";
import { AppDispatch } from "../redux/store";

export const LoginComponent = () => {
  const dispatch: AppDispatch = useDispatch(); 
  const navigate = useNavigate()

  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null); // State for error handling

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // Dispatch the login action and await the result
      const result = await dispatch(login(user)).unwrap();
      if(result) navigate('/notes')
    } catch (error: any) {
      // Handle the error, and display the error message
      setError(error.message || 'Something went wrong');
    }
  };

  return (
    <div className="w-full">
      <p className="text-white font-semibold text-2xl">Sign in to your account</p>
      <form onSubmit={handleSubmit} className="mt-10 flex flex-col text-white">
        <label>E-mail</label>
        <input
          className="border border-black rounded-md text-black"
          onChange={handleChange}
          type="email"
          name="email"
          value={user.email}
        />

        <label>Password</label>
        <input
          className="border border-black rounded-md text-black"
          onChange={handleChange}
          type="password"
          name="password"
          value={user.password}
        />
        <button
          type="submit"
          className="bg-secondaryBlue border border-white rounded-md hover:scale-105 mt-5"
        >
          Login
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};
