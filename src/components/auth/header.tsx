import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["600"], subsets: ["latin"] });

export const Header = ({ label }: { label: string }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-4">
      <h1
        className={cn("text-3xl font-bold text-foreground", poppins.className)}
      >
        Auth
      </h1>
      <p className="text-sm text-muted-foreground ">{label}</p>
    </div>
  );
};
