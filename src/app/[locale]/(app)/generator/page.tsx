import { auth } from "@/auth";
import SignatureGenerator from "@/components/signature-builder/SignatureGenerator";

export default async function GeneratorPage() {
  const session = await auth();

  return <SignatureGenerator user={session?.user} />;
}
