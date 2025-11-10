// File: my-heroui-app/app/potwierdzenie/page.tsx
import { Button } from "@heroui/button";
import { title, subtitle } from "@/components/primitives";
import Link from "next/link";

export default function PotwierdzeniePage() {
  return (
    <section className="flex flex-col items-center gap-6 py-8 text-center">
      <h1 className={title({ size: "md", color: "green" })}>
        Dziękujemy!
      </h1>

      <p className={subtitle()}>
        Przyjęliśmy Twoje zgłoszenie. Wolontariusz skontaktuje się z Tobą
        telefonicznie w ciągu najbliższych <strong>8 minut</strong>.
      </p>

      <Button as={Link} href="/" color="primary" size="lg">
        Wróć do strony głównej
      </Button>
    </section>
  );
}