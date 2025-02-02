import { SignInButton } from "@clerk/nextjs";
import Footer from "~/components/Footer";

export default function HomePage() {
  return (
    <>
      <SignInButton forceRedirectUrl={"/drive"} />
      <Footer/>
    </>
  )
}