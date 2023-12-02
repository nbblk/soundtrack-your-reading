"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function checkIfUserLoggedIn() {
  const accessToken = window.localStorage.getItem("accessToken");
  return accessToken !== null;
}

const withAuth = (WrappedComponent: React.ComponentType) => {
  const Auth = () => {
    const router = useRouter();
    const isLoggedIn = checkIfUserLoggedIn();

    useEffect(() => {
      if (!isLoggedIn) {
        router.push("/");
      }
    }, [isLoggedIn, router]);

    return isLoggedIn ? WrappedComponent : null;
  };
  return Auth;
};
export default withAuth;
