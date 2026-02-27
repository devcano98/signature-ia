import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
      className="w-full"
    >
      <Button
        type="submit"
        variant="ghost"
        className="w-full justify-start p-0 h-auto font-normal"
      >
        Sign Out
      </Button>
    </form>
  );
}
