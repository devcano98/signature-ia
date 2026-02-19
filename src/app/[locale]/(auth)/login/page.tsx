import { useTranslations } from "next-intl";
import { LoginForm } from "@/components/auth/login-form";
import { Link } from "@/i18n/navigation";
import { Rocket } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  const t = useTranslations("Auth");

  return (
    <div className="absolute w-sm top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-4">
      <Card className="bg-card w-full max-w-md backdrop-blur-xl border-border/50 shadow-xl">
        <CardHeader className="space-y-1 text-center items-center">
          <CardTitle className="text-2xl font-bold tracking-tight flex items-center justify-center gap-2">
            <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
              <Rocket className="h-5 w-5 text-primary" />
            </div>
            {t("title")}
          </CardTitle>
          {/* <CardDescription>{t("subtitle")}</CardDescription> */}
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <p className="px-8 text-center text-xs text-muted-foreground w-full">
            <Link
              href="/privacy"
              className="hover:text-primary underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            {" · "}
            <Link
              href="/terms"
              className="hover:text-primary underline underline-offset-4"
            >
              Terms of Service
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
