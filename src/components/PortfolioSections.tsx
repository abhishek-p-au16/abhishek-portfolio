import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Project = { number: string; title: string; category: string; summary: string; stack: string[] };

export function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span></div>;
}

export function SectionHeading({ title, description }: { title: ReactNode; description: string }) {
  return <div className="section-heading-row"><h2>{title}</h2><p>{description}</p></div>;
}

export function ProjectCard({ project }: { project: Project }) {
  return <motion.article className="project-row" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .5 }}>
    <div className="project-visual project-art" aria-hidden="true"><span>{project.number}</span><strong>{project.title}</strong><small>{project.category}</small><i /></div>
    <div className="project-info"><div className="project-meta"><span>{project.number} / {project.category}</span><span className="experience-label">Dotcod Innovations</span></div><h3>{project.title}</h3><p>{project.summary}</p><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div>
  </motion.article>;
}

export function SkillGroup({ index, title, items }: { index: number; title: string; items: string[] }) {
  return <div className="skill-row"><span className="skill-index">{String(index).padStart(2, "0")}</span><h3>{title}</h3><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div></div>;
}

export function ExperienceCard({ date, role, detail }: { date: string; role: string; detail: string }) {
  return <article className="timeline-item"><span className="timeline-index">●</span><div><p className="timeline-date">{date}</p><h3>{role}</h3><p className="timeline-detail">{detail}</p></div></article>;
}
