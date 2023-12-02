import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Home() {
  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID || ""}
    >
      <main className="w-full h-full flex flex-col items-center justify-between">
        <Navbar />
        <section className="w-full">this is the main page</section>
        <Footer />
      </main>
    </GoogleOAuthProvider>
  );
}
