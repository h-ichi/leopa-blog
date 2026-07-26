"use client";

import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
  
    const response = await fetch(
      "/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );
  
    const data = await response.json();
  
    if (response.ok) {
      window.location.href = "/admin";
    } else {
      alert(data.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-lg bg-white p-8 shadow-md"
    >
      <h1 className="mb-2 text-center text-3xl font-bold">
        🦎 Leopa Admin
      </h1>

      <p className="mb-8 text-center text-gray-500">
        管理者ログイン
      </p>

      <div className="mb-5">
        <label
          htmlFor="username"
          className="mb-2 block text-sm font-medium"
        >
          ユーザー名
        </label>

        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full rounded-md border px-4 py-2 focus:border-blue-500 focus:outline-none"
          placeholder="ユーザー名"
          required
        />
      </div>

      <div className="mb-8">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium"
        >
          パスワード
        </label>

        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md border px-4 py-2 focus:border-blue-500 focus:outline-none"
          placeholder="パスワード"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-green-600 py-2 font-semibold text-white transition hover:bg-green-700"
      >
        ログイン
      </button>
    </form>
  );
}