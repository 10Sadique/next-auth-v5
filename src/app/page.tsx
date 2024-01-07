import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["600"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-background">
      <div className="space-y-4 text-center">
        <h1
          className={cn(
            "text-6xl font-bold text-foreground",
            poppins.className
          )}
        >
          Auth
        </h1>
        <p className="text-lg text-foreground">
          A simple authentication service with Auth.js, Drizzle & Turso
        </p>

        <div>
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
