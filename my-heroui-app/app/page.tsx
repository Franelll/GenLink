import { Link } from "@heroui/link";
          import { button as buttonStyles } from "@heroui/theme";

          import { siteConfig } from "@/config/site";
          import { title, subtitle } from "@/components/primitives";

          export default function Home() {
            // Inicjujemy pustą tablicę, aby nie wyświetlać dodatkowych linków na stronie głównej.
            const topLinks: typeof siteConfig.navItems = [];

            return (
              <section className="flex flex-col items-center justify-center gap-6 py-12 md:py-20">
                <div className="text-center">
                  <h1 className={title({ color: "violet", size: "lg" })}>GenLink</h1>
                  <p className={subtitle()}>Łączymy seniorów z wolontariuszami</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-20">
                  <Link
                    href="/pomoc"
                    className={buttonStyles({
                      color: "primary",
                      radius: "full",
                      variant: "shadow",
                    })}
                  >
                    <span className="text-xl sm:text-2xl py-3 px-8">Potrzebuję Pomocy</span>
                  </Link>



                  {topLinks.length > 0 && (
                    <div className="flex flex-wrap gap-2 items-center justify-center">
                      {topLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-sm text-default-600 bg-default-100 px-3 py-2 rounded-md hover:underline"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            );
          }