import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:{default:"Nadwi Publications | Multilingual Books",template:"%s | Nadwi Publications"},description:"Independent eBooks and audiobooks in English, Urdu, Balochi, and Persian.",openGraph:{title:"Nadwi Publications",description:"Stories, scholarship, and voices that endure.",type:"website"},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
