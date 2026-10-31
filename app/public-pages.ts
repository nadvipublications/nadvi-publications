export const siteOrigin = "https://www.nadvipublications.online";
export const publicPages = [
  { path: "/", view: "home", title: "Timeless Books Across Languages", description: "Discover books in Balochi, Urdu, Persian and English from Nadvi Publications." },
  { path: "/books", view: "catalog", title: "All Books", description: "Browse the Nadvi Publications book catalogue across languages and formats." },
  ...["English", "Urdu", "Balochi", "Persian"].map(language => ({ path: `/books/${language.toLowerCase()}`, view: language.toLowerCase(), title: `${language} Books`, description: `Explore ${language} books from Nadvi Publications.` })),
  { path: "/ebooks", view: "ebooks", title: "eBooks", description: "Explore PDF and EPUB books from Nadvi Publications." },
  { path: "/audiobooks", view: "audiobooks", title: "Audiobooks", description: "Browse the Nadvi Publications audiobook collection." },
  { path: "/new-releases", view: "new-releases", title: "New Releases", description: "Discover newly released books from Nadvi Publications." },
  { path: "/best-sellers", view: "best-sellers", title: "Best Sellers", description: "Explore featured best sellers in the Nadvi Publications catalogue." },
  { path: "/free-books", view: "free-books", title: "Free Books and Samples", description: "Explore free books and reading samples from Nadvi Publications." },
  { path: "/about", view: "about-us", title: "About Us", description: "Learn about Nadvi Publications and our publishing programme across languages." },
  { path: "/submit-a-book", view: "submit-a-book", title: "Submit a Book", description: "Contact Nadvi Publications about submitting your manuscript for publication." },
] as const;
export function pathForView(view: string) { return publicPages.find(page => page.view === view)?.path; }
