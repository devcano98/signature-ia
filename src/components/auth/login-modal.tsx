import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LoginForm } from "@/components/auth/login-form";
import { useTranslations } from "next-intl";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const t = useTranslations("Auth");
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t("unlockTitle")}</DialogTitle>
          <DialogDescription>{t("unlockDescription")}</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <LoginForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
