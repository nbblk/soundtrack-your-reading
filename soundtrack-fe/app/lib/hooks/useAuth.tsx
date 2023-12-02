import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import { FieldValues } from "react-hook-form";

export default function useAuth() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse.code);
      // TODO: send code to server to get token
    },
    onError: (error) => console.log(error),
    flow: "auth-code",
  });

  const signup = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      window.location.href = "/signup";
      // TODO: send code to server to get token
    },
    onError: (error) => console.log(error),
    flow: "auth-code",
  });

  const completeSignup = (userInfo: FieldValues) => {
    // TODO: send userInfo to server
    console.log("signup", userInfo);
  };

  const logout = () => googleLogout();

  return { login, signup, completeSignup, logout };
}
