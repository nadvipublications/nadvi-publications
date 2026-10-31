import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import Storefront from "../storefront";
import { publicPages, siteOrigin } from "../public-pages";

type Props = { params: Promise<{ slug: string[] }> };
const aliases: Record<string, string> = { "/about-us": "/about", "/all-books": "/books", "/catalog": "/books", "/english": "/books/english", "/urdu": "/books/urdu", "/balochi": "/books/balochi", "/persian": "/books/persian", "/submit-book": "/submit-a-book" };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const path = "/" + (await params).slug.join("/");
  const page = publicPages.find(page => page.path === path);
  if (!page) return { title: "Page Not Found", robots: { index: false, follow: true } };
  return { title: page.title, description: page.description, alternates: { canonical: path }, openGraph: { title: `${page.title} | Nadvi Publications`, description: page.description, url: siteOrigin + path, siteName: "Nadvi Publications", images: ["/nadvi-social-preview.png"] }, twitter: { card: "summary_large_image", title: `${page.title} | Nadvi Publications`, description: page.description, images: ["/nadvi-social-preview.png"] } };
}
export default async function PublicPage({ params }: Props) {
  const path = "/" + (await params).slug.join("/");
  if (aliases[path]) permanentRedirect(aliases[path]);
  const page = publicPages.find(page => page.path === path);
  if (!page) notFound();
  return <Storefront key={page.path} initialView={page.view} />;
}
