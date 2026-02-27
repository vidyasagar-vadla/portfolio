'use client'
import { profile } from "@/lib/data";

export function Footer() {
    return (
        <footer className="bg-muted border-t">
            <div className="container mx-auto py-6 px-4 text-center text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
            </div>
        </footer>
    )
}
