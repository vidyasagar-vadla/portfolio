'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { experience, education, skills } from "@/lib/data";
import { Section, SectionTitle } from "@/components/section";

export default function ExperiencePage() {
    return (
        <>
            <Section id="experience" className="pt-24 md:pt-32">
                <SectionTitle>Professional Experience</SectionTitle>
                <div className="relative max-w-3xl mx-auto pl-8">
                    <div className="absolute left-4 top-0 w-0.5 h-full bg-border -translate-x-1/2"></div>
                    {experience.map((exp, index) => (
                        <div key={index} className="relative mb-12 pl-8">
                            <div className="absolute -left-0.5 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                            <p className="text-primary font-semibold">{exp.period}</p>
                            <h3 className="text-xl font-bold font-headline mt-1">{exp.role}</h3>
                            <p className="text-muted-foreground font-medium">{exp.company}</p>
                            <p className="mt-2 text-sm">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section id="skills" className="bg-muted">
                <SectionTitle>Skills & Expertise</SectionTitle>
                <div className="grid md:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, skillList]) => (
                        <Card key={category} className="shadow-lg">
                            <CardHeader>
                                <CardTitle className="font-headline">{category}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {skillList.map(skill => {
                                    const Icon = skill.icon;
                                    return (
                                        <div key={skill.name} className="flex items-center gap-4">
                                            <span className="text-primary">
                                                <Icon className="w-6 h-6" />
                                            </span>
                                            <span>{skill.name}</span>
                                        </div>
                                    )
                                })}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section id="education">
                <SectionTitle>Education</SectionTitle>
                <div className="max-w-2xl mx-auto grid md:grid-cols-1 gap-8">
                    {education.map((edu, index) => (
                        <Card key={index} className="text-center shadow-lg p-4">
                            <CardHeader>
                                <GraduationCap className="mx-auto w-10 h-10 mb-4 text-primary" />
                                <CardTitle className="font-headline text-xl">{edu.degree}</CardTitle>
                                <CardDescription>{edu.institution}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{edu.years}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>
        </>
    );
}
