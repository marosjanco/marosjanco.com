import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container
      width="reading"
      className="flex min-h-[60vh] flex-col items-center justify-center py-28 text-center"
    >
      <p className="font-mono text-[13px] text-muted">404</p>
      <h1 className="mt-3 font-serif text-[32px] font-semibold tracking-[-0.01em] md:text-[44px]">
        This page doesn&rsquo;t exist.
      </h1>
      <p className="mt-4 text-[17px] text-muted">
        The link may be broken or the page may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 border-b border-accent pb-0.5 text-accent hover:opacity-70"
      >
        Back to home →
      </Link>
    </Container>
  );
}
