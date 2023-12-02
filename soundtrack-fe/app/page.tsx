import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Main from "./main/page";

export default function Home() {
  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID || ""}
    >
      <main className="w-full h-full flex flex-col items-center justify-between">
        <Navbar />
        <Main />
        <Footer />
      </main>
    </GoogleOAuthProvider>
  );
}
