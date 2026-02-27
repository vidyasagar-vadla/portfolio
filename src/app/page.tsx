'use client'
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";
import { profile, projects } from "@/lib/data";
import { Section, SectionTitle } from "@/components/section";

const featuredProjects = projects.slice(0, 2);

export default function HomePage() {
  return (
    <>
      <Section className="pt-24 md:pt-32 text-center">
        <Avatar className="w-28 h-28 mx-auto mb-6 border-4 border-primary shadow-lg">
          <AvatarImage src={profile.avatar} alt={profile.name} />
          <AvatarFallback className="text-4xl font-bold bg-muted">
            {profile.initials}
          </AvatarFallback>
        </Avatar>
        <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tighter mb-4">
          {profile.name}
        </h1>
        <p className="text-xl md:text-2xl text-primary font-medium mb-8">
          {profile.title}
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">
              Contact Me <ArrowRight className="ml-2" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">View My Work</Link>
          </Button>
        </div>
      </Section>

      <Section id="about" className="bg-muted">
          <SectionTitle>About Me</SectionTitle>
          <p className="max-w-3xl mx-auto text-center text-lg text-muted-foreground leading-relaxed">
              {profile.about}
          </p>
      </Section>

      <Section id="projects">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
                <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <CardHeader className="p-0">
                        <div className="relative aspect-video">
                            <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                        <h3 className="text-xl font-bold font-headline mb-2">{project.name}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                        </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                        <Button asChild variant="outline" className="w-full">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                View Project <ArrowRight className="ml-2" />
                            </a>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
