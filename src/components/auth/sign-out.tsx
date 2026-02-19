import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export function SignOut() {
  const out = async () => await signOut();
  return (
    <form action={out} className="w-full">
      <Button
        variant="ghost"
        className="w-full justify-start p-0 h-auto font-normal"
      >
        Sign Out
      </Button>
    </form>
  );
}
