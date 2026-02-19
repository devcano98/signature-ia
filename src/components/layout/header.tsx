import { auth } from "@/auth";
import HeaderClient from "./header-client";
import UserButton from "@/components/auth/user-button";

interface HeaderProps {
  variant?: "marketing" | "app";
}

export default async function Header({ variant = "marketing" }: HeaderProps) {
  const session = await auth();

  return (
    <HeaderClient
      variant={variant}
      user={session?.user}
      userButton={session?.user ? <UserButton /> : null}
    />
  );
}
