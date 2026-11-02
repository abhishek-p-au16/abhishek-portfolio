import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from 'lucide-react'
import Avatar from './components/Avatar'

type Project = {
  number: string
  title: string
  summary: string
  stack: string[]
  category: string
  href: string
  visual: 'grid' | 'orbit' | 'terminal'
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Business management system',
    summary: 'A business operations platform for managing customers, jobs, materials, invoices and financial performance.',
    stack: ['NestJS', 'TypeScript', 'PostgreSQL', 'React'],
    category: 'Product engineering',
    href: 'https://github.com/',
    visual: 'grid',
  },
  {
    number: '02',
    title: 'Distributed services & real-time systems',
    summary: 'Backend services using asynchronous messaging, caching and service-to-service communication.',
    stack: ['Node.js', 'RabbitMQ', 'Redis', 'gRPC'],
    category: 'Backend architecture',
    href: 'https://github.com/',
    visual: 'orbit',
  },
  {
    number: '03',
    title: 'Cloud recording pipeline',
    summary: 'A media workflow integrating cloud recording, object storage and video processing.',
    stack: ['Agora', 'AWS S3', 'FFmpeg', 'HLS'],
    category: 'Cloud integrations',
    href: 'https://github.com/',
    visual: 'terminal',
  },
]

const skills = [
  { title: 'Backend engineering', items: ['Node.js', 'NestJS', 'Express', 'TypeScript', 'REST APIs', 'Microservices', 'gRPC', 'Socket.IO'] },
  { title: 'Data & messaging', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Elasticsearch'] },
  { title: 'Cloud & DevOps', items: ['Linux', 'AWS', 'Docker', 'Nginx', 'Git', 'CI/CD', 'PM2'] },
]

const experience = [
  { date: 'Professional experience', role: 'Backend developer', detail: 'Building APIs, backend services, database integrations and real-time application features with Node.js and TypeScript.' },
  { date: 'Current focus', role: 'Cloud & DevOps engineering', detail: 'Developing practical skills in Linux, containerization, cloud deployment, automation and production operations.' },
]

function ProjectVisual({ type }: { type: Project['visual'] }) {
  if (type === 'terminal') {
    return <div className="visual-terminal"><div className="flex gap-1.5"><i /><i /><i /></div><p><span>$</span> upload recording.mp4</p><p className="pl-4 text-neutral-500">→ storage bucket connected</p><p className="pl-4 text-neutral-500">→ transcoding complete</p><p><span>✓</span> pipeline finished</p></div>
  }
  if (type === 'orbit') {
    return <div className="visual-orbit"><div className="orbit-ring orbit-one" /><div className="orbit-ring orbit-two" /><div className="orbit-core">API</div><span className="orbit-node node-a">Redis</span><span className="orbit-node node-b">gRPC</span><span className="orbit-node node-c">Queue</span></div>
  }
  return <div className="visual-grid"><div className="mini-window"><div className="mini-top"><span>OVERVIEW</span><span>•••</span></div><div className="mini-stats"><div><small>REVENUE</small><b>₹ 2.4L</b></div><div><small>JOBS</small><b>128</b></div></div><div className="mini-bars"><i /><i /><i /><i /><i /><i /><i /></div><div className="mini-lines"><i /><i /><i /></div></div></div>
}

function SectionLabel({ number, children }: { number: string; children: string }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span></div>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const nav = [{ label: 'Work', href: '#work' }, { label: 'About', href: '#about' }, { label: 'Skills', href: '#skills' }, { label: 'Contact', href: '#contact' }]

  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="page-shell">
        <header className="site-header">
          <a href="#home" className="wordmark" onClick={closeMenu}>abhishek<span>.dev</span></a>
          <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
            {nav.map(item => <a className="nav-link" key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <a className="header-contact hidden md:inline-flex" href="mailto:hello@example.com">Let's talk <ArrowUpRight size={15} /></a>
          <button className="menu-toggle md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </header>
        {menuOpen && <nav className="mobile-menu md:hidden">{nav.map(item => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}</nav>}

        <main>
          <section id="home" className="hero-section">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="hero-copy">
              <p className="eyebrow"><span className="status-dot" /> BACKEND ENGINEER · CLOUD & DEVOPS</p>
              <h1>Backend engineer<br />and cloud infrastructure<br /><span>builder.</span></h1>
              <div className="hero-actions">
                <a href="#about" className="button button-light">About me</a>
                <a href="#work" className="button button-dark">See my work <ArrowUpRight size={17} /></a>
              </div>
            </motion.div>
            <div className="hero-art"><Avatar /></div>
            <div className="hero-footnote"><p><strong>Building reliable software systems</strong><br /><span>From backend architecture and APIs to cloud infrastructure and deployment.</span></p><a href="#about" className="scroll-cue">SCROLL TO EXPLORE <ArrowDown size={14} /></a></div>
          </section>

          <section id="about" className="content-section about-section">
            <SectionLabel number="01 /">A little about me</SectionLabel>
            <div className="about-grid">
              <h2>I like turning<br />complex problems<br /><span>into simple systems.</span></h2>
              <div className="about-text"><p>I'm Abhishek, a backend engineer focused on building dependable applications and the systems behind them.</p><p>My work revolves around Node.js, NestJS, databases, APIs and distributed services. I'm also growing deeper into cloud infrastructure and DevOps — understanding not only how software is built, but how it runs in production.</p><p>I value clear architecture, practical solutions and code that the next engineer can understand.</p><a className="text-link" href="mailto:hello@example.com">Get in touch <ArrowUpRight size={16} /></a></div>
            </div>
          </section>

          <section id="work" className="content-section work-section">
            <SectionLabel number="02 /">Selected work</SectionLabel>
            <div className="section-heading-row"><h2>Things I've<br /><span>worked on.</span></h2><p>A selection of engineering work, integrations and systems. Some details are simplified to keep client and company information private.</p></div>
            <div className="project-list">{projects.map(project => <motion.article key={project.number} className="project-row" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .55 }}><a href={project.href} target="_blank" rel="noreferrer" className="project-visual-link" aria-label={`Open ${project.title}`}><ProjectVisual type={project.visual} /></a><div className="project-info"><div className="project-meta"><span>{project.number} / {project.category}</span><a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}><ArrowUpRight size={20} /></a></div><h3>{project.title}</h3><p>{project.summary}</p><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div></motion.article>)}</div>
          </section>

          <section id="skills" className="content-section skills-section">
            <SectionLabel number="03 /">What I work with</SectionLabel>
            <div className="section-heading-row"><h2>Tools are just tools.<br /><span>Understanding matters.</span></h2><p>I choose technologies based on the problem, the team and the operational needs of the product.</p></div>
            <div className="skills-list">{skills.map((group, index) => <div className="skill-row" key={group.title}><span className="skill-index">0{index + 1}</span><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
          </section>

          <section className="content-section experience-section">
            <SectionLabel number="04 /">Experience & direction</SectionLabel>
            <div className="section-heading-row"><h2>Always learning.<br /><span>Always building.</span></h2><p>A quick overview of where I've been and what I'm working towards.</p></div>
            <div className="timeline">{experience.map((item, index) => <div className="timeline-item" key={item.role}><span className="timeline-index">0{index + 1}</span><div><p className="timeline-date">{item.date}</p><h3>{item.role}</h3><p className="timeline-detail">{item.detail}</p></div></div>)}</div>
          </section>

          <section id="contact" className="contact-section">
            <SectionLabel number="05 /">Have a good problem?</SectionLabel>
            <div className="contact-main"><h2>Let's make<br /><span>it work.</span></h2><a className="contact-circle" href="mailto:hello@example.com" aria-label="Send an email"><ArrowUpRight size={34} /></a></div>
            <div className="contact-bottom"><p>Open to backend engineering opportunities, interesting collaborations and conversations about building better software.</p><div className="social-links"><a href="mailto:abhishekp9991999@gmail.com"><Mail size={16} /> Email</a><a href="https://github.com/abhishek-p-au16" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a href="https://www.linkedin.com/in/abhishek-p-118a5b1b9" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a></div></div>
          </section>
        </main>
        <footer className="site-footer"><a href="#home" className="wordmark">abhishek<span>.dev</span></a><span>Designed & built with care · © {new Date().getFullYear()}</span><a href="#home" className="back-top">BACK TO TOP <ArrowDownRight size={14} /></a></footer>
      </div>
    </div>
  )
}
