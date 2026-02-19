import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function LandingPage() {
  const t = useTranslations("Index");

  return (
    <div className="flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl leading-normal font-extrabold tracking-tight lg:text-5xl mb-6 bg-clip-text text-transparent bg-linear-to-r from-primary to-purple-600">
        {t("title")}
      </h1>
      <p className="text-xl leading-normal text-muted-foreground mb-8 max-w-2xl mx-auto">
        {t("subtitle")}
      </p>
      <div className="flex gap-4 justify-center">
        <Button asChild size="lg" className="rounded-full px-8">
          <Link href="/generator">Creat Your Signature (Free)</Link>
        </Button>
        <Button variant="outline" size="lg" className="rounded-full px-8">
          Learn More
        </Button>
      </div>
    </div>
  );
}
