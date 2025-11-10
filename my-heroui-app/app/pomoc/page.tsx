
      "use client";

      import { useState } from "react";
      import { Button } from "@heroui/button";
      import { Input } from "@heroui/input";
      import { Checkbox } from "@heroui/checkbox";
      import { title } from "@/components/primitives";

      export default function PomocPage() {
        const [imie, setImie] = useState("");
        const [telefon, setTelefon] = useState("");
        const [miejscowosc, setMiestowosc] = useState("");

        const wyślijZgłoszenie = async () => {
          console.log({ imie, telefon, miejscowosc });
          // TODO: Dodać fetch() gdy backend będzie gotowy
          window.location.href = "/potwierdzenie/wolontariusz";
        };

        return (
          <section className="flex flex-col items-center gap-6 py-8">
            <h1 className={title({ size: "lg" })}>Potrzebuję Pomocy</h1>

            <div className="w-full max-w-md flex flex-col gap-4">
              <Input
                label="Imię"
                placeholder="Wpisz swoje imię i Nazwisko"
                size="lg"
                value={imie}
                onChange={(e) => setImie(e.target.value)}
                isRequired
              />

              <Input
                label="Numer telefonu"
                placeholder="123 456 789"
                type="tel"
                size="lg"
                value={telefon}
                onChange={(e) => setTelefon(e.target.value)}
                isRequired
              />

              <Input
                label="Miejscowość"
                placeholder="Miasto"
                size="lg"
                value={miejscowosc}
                onChange={(e) => setMiestowosc(e.target.value)}
                isRequired
              />

              <Checkbox>Zapamiętaj moje dane na tym urządzeniu</Checkbox>

              <p className="text-default-600">
                Liczba dostępnych wolontariuszy: <strong>12</strong>
              </p>

              <Button
                color="primary"
                size="lg"
                className="w-full text-xl"
                onClick={wyślijZgłoszenie}
              >
                Wyślij zgłoszenie
              </Button>
            </div>
          </section>
        );
      }