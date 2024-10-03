import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmailValue] = useState("");
    const [password, setPasswordValue] = useState("");
    const navigate = useNavigate();

    const setEmail = (e) => {
        setEmailValue(e.target.value);
    }

    const setPassword = (e) => {
        setPasswordValue(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        };

        try {
            const response = await axios.post("http://localhost:8080/user/loginUser", data);
            console.log("this is the response " + response.data);
            alert("Login Successful");
            navigate("/home");
        } catch (error) {
            console.error(error);
            alert("Invalid Email or Password");
        }
    }

    const redirectToRegister = () => {
        window.location.href = "/register";
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email:</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={setEmail}
                            className="mt-1 p-2 border border-gray-300 rounded w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password:</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={setPassword}
                            className="mt-1 p-2 border border-gray-300 rounded w-full"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <a
                            onClick={redirectToRegister}
                            className="text-blue-500 hover:underline cursor-pointer"
                        >
                            Don't have an account?
                        </a>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
