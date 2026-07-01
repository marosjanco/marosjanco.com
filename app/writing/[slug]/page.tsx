import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Container } from "@/components/Container";
import { getAllPosts, getPost } from "@/lib/writing";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/writing/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.summary },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  // Drafts render only in local dev (npm run dev) for review; 404 in production.
  if (!post || (post.draft && process.env.NODE_ENV === "production")) {
    notFound();
  }

  return (
    <Container width="reading" className="py-20 md:py-28">
      <Link
        href="/writing"
        className="text-[15px] text-muted hover:text-accent"
      >
        ← All writing
      </Link>
      <article className="mt-8">
        <time className="font-mono text-[13px] text-muted">{post.date}</time>
        <h1 className="mt-2 font-serif text-[34px] font-semibold leading-[1.15] tracking-[-0.01em] md:text-[44px]">
          {post.title}
        </h1>
        <div className="prose prose-lg mt-10 max-w-none">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </div>
      </article>
    </Container>
  );
}
