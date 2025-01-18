"use client"

import { signIn } from "next-auth/react"

const Login = () => {
  return (
    <div>
        <button onClick={() => signIn("github", { redirectTo: "/dashboard" })}>Sign in with Github</button>
        <button onClick={() => signIn("google", { redirectTo: "/dashboard" })}>Sign in with Google</button>
    </div>
  )
}

export default Login