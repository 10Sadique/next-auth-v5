import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function SettingsPage() {
  const session = await auth();

  return (
    <div className="p-5 space-y-4">
      <div className="border p-3 rounded-md w-auto inline-block">
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>

      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <Button size={"lg"}>Sign Out</Button>
      </form>
    </div>
  );
}
