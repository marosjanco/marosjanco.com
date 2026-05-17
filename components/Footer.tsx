import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-subtle">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col gap-3 px-5 py-8 text-[14px] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Maroš Jančo</p>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <a
            href={site.links.linkedin}
            className="transition-colors hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span aria-hidden>·</span>
          <a
            href={site.links.github}
            className="transition-colors hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span aria-hidden>·</span>
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-accent"
          >
            Email
          </a>
          <span aria-hidden>·</span>
          <a href="/feed.xml" className="transition-colors hover:text-accent">
            RSS
          </a>
        </nav>
      </div>
    </footer>
  );
}
