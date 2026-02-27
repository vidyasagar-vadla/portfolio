'use client'
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/lib/data";
import { Section, SectionTitle } from "@/components/section";

export default function ContactPage() {
    return (
        <Section id="contact" className="pt-24 md:pt-32">
            <SectionTitle>Get In Touch</SectionTitle>
            <div className="max-w-xl mx-auto text-center">
                <p className="text-lg text-muted-foreground mb-8">
                    I&apos;m currently open to new opportunities and collaborations. My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <a href={`mailto:${profile.email}`} className="font-medium hover:underline">{profile.email}</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <a href={`tel:${profile.phone}`} className="font-medium hover:underline">{profile.phone}</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="font-medium">{profile.location}</span>
                    </div>
                </div>
                <div className="mt-8 flex justify-center gap-4">
                    <Button asChild variant="outline" size="icon" className="w-12 h-12">
                        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github className="h-6 w-6" />
                        </a>
                    </Button>
                    <Button asChild variant="outline" size="icon" className="w-12 h-12">
                        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className="h-6 w-6" />
                        </a>
                    </Button>
                </div>
            </div>
        </Section>
    );
}
