import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight, Briefcase, FileSearch, Heart } from "lucide-react";

type Project = { number: string; title: string; category: string; summary: string; stack: string[] };

export function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span></div>;
}

export function SectionHeading({ title, description }: { title: ReactNode; description: string }) {
  return <div className="section-heading-row"><h2>{title}</h2><p>{description}</p></div>;
}

export function ProjectCard({ project }: { project: Project }) {
  const artwork = {
    "Hirewalks": <><div className="artwork-window"><div className="artwork-window-top"><i /><i /><i /></div><div className="artwork-job"><Briefcase size={19} /><span><b>Backend Engineer</b><small>Product team · Remote</small></span></div><div className="artwork-lines"><i /><i /><i /></div><div className="artwork-chip">JOB MATCH <strong>92%</strong></div></div></>,
    "Sparks": <><div className="artwork-orbit orbit-a" /><div className="artwork-orbit orbit-b" /><div className="artwork-heart"><Heart size={29} fill="currentColor" /></div><div className="artwork-chip match-chip">GOOD MATCH <strong>♡</strong></div><i className="artwork-spark spark-a" /><i className="artwork-spark spark-b" /></>,
    "FlexRemit": <><div className="artwork-transfer"><span className="currency currency-from">₹</span><div className="transfer-line"><i /><ArrowLeftRight size={23} /><i /></div><span className="currency currency-to">$</span></div><div className="artwork-chip transfer-chip">TRANSFER COMPLETE <strong>✓</strong></div></>,
    "Global Talent Exchange": <><div className="artwork-resume"><div className="resume-heading"><FileSearch size={20} /><b>PROFILE</b></div><div className="resume-line long" /><div className="resume-line medium" /><div className="resume-tags"><i>Python</i><i>Data</i><i>Design</i></div><div className="resume-check">✓ PARSED</div></div></>,
  }[project.title];
  return <motion.article className="project-row" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .5 }}>
    <div className={`project-visual project-art project-art-${project.number}`} aria-hidden="true"><span>{project.number}</span><strong>{project.title}</strong><small>{project.category}</small><div className="project-artwork">{artwork}</div></div>
    <div className="project-info"><div className="project-meta"><span>{project.number} / {project.category}</span><span className="experience-label">Dotcod Innovations</span></div><h3>{project.title}</h3><p>{project.summary}</p><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div>
  </motion.article>;
}

export function SkillGroup({ index, title, items }: { index: number; title: string; items: string[] }) {
  return <div className="skill-row"><span className="skill-index">{String(index).padStart(2, "0")}</span><h3>{title}</h3><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div></div>;
}

export function ExperienceCard({ date, role, detail }: { date: string; role: string; detail: string }) {
  return <article className="timeline-item"><span className="timeline-index">●</span><div><p className="timeline-date">{date}</p><h3>{role}</h3><p className="timeline-detail">{detail}</p></div></article>;
}
