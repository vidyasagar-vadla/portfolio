'use client'
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { navigation, profile } from "@/lib/data";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
            <Link href="/" className="font-bold font-headline">Vadla Vidyasagar</Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="transition-colors hover:text-primary">
                    {item.name}
                </Link>
                ))}
            </nav>
            <div className="flex items-center space-x-2">
                <Button asChild variant="ghost" size="icon">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                </a>
                </Button>
                <Button asChild variant="ghost" size="icon">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                </a>
                </Button>
            </div>
            </div>
        </header>
    )
}
