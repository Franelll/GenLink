    // File: `my-heroui-app/config/site.ts`
    export type NavItem = {
      label: string;
      href: string;
      position?: "top" | "bottom" | "both";
      hidden?: boolean;
    };

    export const siteConfig = {
        name: "GenLink",
        description: "Łączymy seniorów z wolontariuszami",
        navItems: [
            { label: "Strona Główna", href: "/", position: "top" },
            { label: "Potrzebuję Pomocy", href: "/pomoc", position: "bottom" },
            { label: "Baza Wiedzy", href: "/baza-wiedzy", position: "top" },    // zmieniono z "both" na "bottom"
            { label: "Panel Wolontariusza", href: "/panel", position: "top" }   // zmieniono z "both" na "bottom"
        ] as NavItem[],
        links: {
            twitter: "https://twitter.com/your_handle",
            discord: "https://discord.com/invite/your_invite",
            github: "https://github.com/your_repo",
            sponsor: "https://buymeacoffee.com/your_page",
            docs: "https://yourdocs.example.com",
        },
    };