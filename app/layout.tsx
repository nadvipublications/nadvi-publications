import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:{default:"Nadvi Publications | Multilingual Books",template:"%s | Nadvi Publications"},description:"Independent eBooks and audiobooks in English, Urdu, Balochi, and Persian.",icons:{icon:"/nadvi-publications-logo.gif",shortcut:"/nadvi-publications-logo.gif"},openGraph:{title:"Nadvi Publications",description:"Stories, scholarship, and voices that endure.",type:"website"},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
