import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "~/components/ui/button";
import Footer from "~/components/Footer";

export default function HomePage() {
  return (
    <>
      <h1 className="mb-4 bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
        Mx Drive
      </h1>
      <form
        action={async () => {
          "use server";

          const session = await auth();

          if (!session.userId) {
            return redirect("/sign-in");
          }

          return redirect("/drive");
        }}
        >
          <Button
            size="lg"
            type="submit"
            className="border border-neutral-700 bg-neutral-800 text-white transition-colors hover:bg-neutral-700"
            >
              Get Started
            </Button>
      </form>
      <Footer/>
    </>
  )
}