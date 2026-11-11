import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, Phone, X } from "lucide-react";
import Avatar from "./components/Avatar";
import { ExperienceCard, ProjectCard, SectionHeading, SectionLabel, SkillGroup } from "./components/PortfolioSections";

const email = "abhishekp9991999@gmail.com";
const phone = "+919072700516";
const projects = [
  { number: "01", title: "Hirewalks", category: "Job portal", summary: "Built backend microservices for recruiter and candidate workflows, including job processing, search, messaging, and file storage.", stack: ["Node.js", "TypeScript", "gRPC", "RabbitMQ", "Elasticsearch", "Socket.IO", "AWS S3"] },
  { number: "02", title: "Sparks", category: "Dating & social", summary: "Developed profile, matching, discovery, and chat APIs, with photo moderation, cloud media, and performance improvements.", stack: ["NestJS", "MongoDB", "Elasticsearch", "Socket.IO", "AWS Rekognition", "Redis"] },
  { number: "03", title: "FlexRemit", category: "Fintech remittance", summary: "Implemented exchange-rate and service-charge logic, remittance workflows, KYC checks, and integrations with banking partners.", stack: ["Node.js", "TypeScript", "REST APIs", "Onfido", "OAuth"] },
  { number: "04", title: "Global Talent Exchange", category: "Resume enrichment", summary: "Created a resume extraction pipeline using OCR, Python, and the OpenAI API to turn unstructured resumes into searchable candidate profiles.", stack: ["Python", "OCR", "OpenAI API", "Node.js"] },
];

const skills = [
  { title: "Languages & frameworks", items: ["Node.js", "TypeScript", "JavaScript", "NestJS", "Express.js", "LoopBack", "Python"] },
  { title: "Databases & data", items: ["MongoDB", "MySQL", "Redis", "TypeORM", "Mongoose", "Sequelize", "Elasticsearch"] },
  { title: "Messaging & APIs", items: ["RabbitMQ", "gRPC", "REST APIs", "Socket.IO"] },
  { title: "Cloud & security", items: ["AWS S3", "EC2", "Lambda", "Rekognition", "Firebase", "JWT", "Google OAuth", "LinkedIn OAuth", "Onfido"] },
  { title: "Architecture", items: ["Microservices", "Event-driven systems", "Caching", "Rate limiting", "API design"] },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "error" | "sent">("idle");
  const nav = [{ label: "Work", href: "#work" }, { label: "About", href: "#about" }, { label: "Skills", href: "#skills" }, { label: "Contact", href: "#contact" }];
  const closeMenu = () => setMenuOpen(false);
  const submitContact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) { setFormState("error"); return; }
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio enquiry from ${String(data.get("name"))}`);
    const body = encodeURIComponent(`From: ${String(data.get("name"))} (${String(data.get("email"))})\n\n${String(data.get("message"))}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setFormState("sent");
    form.reset();
  };

  return <div className="page-shell">
    <header className="site-header">
      <a href="#home" className="wordmark" onClick={closeMenu}>abhishek<span>.dev</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{nav.map(item => <a className="nav-link" key={item.href} href={item.href}>{item.label}</a>)}</nav>
      <a className="header-contact" href={`mailto:${email}`}>Let's talk <ArrowUpRight size={15} /></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
    </header>
    {menuOpen && <nav className="mobile-menu" aria-label="Mobile navigation">{nav.map(item => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}</nav>}
    <main>
      <section id="home" className="hero-section">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> BACKEND DEVELOPER · NODE.JS · NESTJS</p>
          <h1>Building dependable<br />backend systems<br /><span>that scale.</span></h1>
          <p className="hero-intro">I'm Abhishek P, a backend developer with 3.5+ years of experience building production systems across job-tech, social, and fintech. Currently strengthening my cloud and operations skills through a DevOps course.</p>
          <div className="hero-actions"><a href="#work" className="button button-dark">Explore my work <ArrowUpRight size={17} /></a><a href="/abhishek-p-resume.docx" className="button button-light" download>Download resume <ArrowDown size={15} /></a></div>
        </motion.div>
        <div className="hero-art"><Avatar /></div>
        <div className="hero-footnote"><p><strong>Open to backend engineering roles</strong><br /><span>Kozhikode, Kerala · Open to relocate across South India</span></p><a href="#about" className="scroll-cue">SCROLL TO EXPLORE <ArrowDown size={14} /></a></div>
      </section>

      <section id="about" className="content-section about-section">
        <SectionLabel number="01 /">About me</SectionLabel>
        <div className="about-grid"><h2>Production-minded<br />backend developer<br /><span>and problem solver.</span></h2><div className="about-text">
          <p>I'm Abhishek, a backend developer with 3.5+ years of experience designing and building production-grade systems with Node.js, TypeScript, and NestJS.</p>
          <p>At Dotcod Innovations, I worked on four platforms spanning job-tech, social, and fintech remittance. My work included microservices, event-driven processing, search, real-time messaging, third-party integrations, and AWS services.</p>
          <p>Since August 2025, I have used a planned career break to invest in the next stage of my career. I am currently taking a DevOps course while refreshing backend development, system design, and data structures and algorithms, and building personal projects. I’m now preparing to bring this learning into a full-time backend engineering role.</p>
          <p>Based in Kozhikode and open to relocate anywhere in South India, including Chennai, Coimbatore, Hyderabad, Kochi, and Thiruvananthapuram.</p>
          <a className="text-link" href={`mailto:${email}`}>Get in touch <ArrowUpRight size={16} /></a>
        </div></div>
      </section>

      <section id="work" className="content-section work-section">
        <SectionLabel number="02 /">Selected experience</SectionLabel>
        <SectionHeading title={<>Systems I've<br /><span>helped build.</span></>} description="A selection of backend work delivered at Dotcod Innovations across four production platforms." />
        <div className="project-list">{projects.map(project => <ProjectCard key={project.number} project={project} />)}</div>
      </section>

      <section id="skills" className="content-section skills-section">
        <SectionLabel number="03 /">Technical skills</SectionLabel>
        <SectionHeading title={<>Tools for reliable<br /><span>backend systems.</span></>} description="Technologies and concepts used across production services, integrations, and data workflows." />
        <div className="skills-list">{skills.map((group, index) => <SkillGroup key={group.title} index={index + 1} {...group} />)}</div>
      </section>

      <section className="content-section experience-section">
        <SectionLabel number="04 /">Experience</SectionLabel>
        <SectionHeading title={<>Hands-on product work.<br /><span>Continuous learning.</span></>} description="Professional experience and current focus, as described in my resume." />
        <div className="timeline"><ExperienceCard date="Nov 2021 – Jul 2025 · Bengaluru (Remote/Hybrid)" role="Backend Developer · Dotcod Innovations Pvt Ltd" detail="Built and maintained backend microservices across four production platforms in job-tech, social, and fintech. Delivered service communication, asynchronous processing, search, real-time messaging, authentication, AWS integrations, and external API workflows." /><ExperienceCard date="Aug 2025 – Present · Professional development" role="DevOps training & backend upskilling" detail="Taking a DevOps course while strengthening backend engineering foundations through system design, data structures and algorithms, and personal projects. Preparing to apply this broader perspective in a full-time backend engineering role." /></div>
      </section>

      <section id="contact" className="contact-section">
        <SectionLabel number="05 /">Contact</SectionLabel>
        <div className="contact-main"><h2>Let's talk<br /><span>backend.</span></h2><a className="contact-circle" href={`mailto:${email}`} aria-label="Send an email"><ArrowUpRight size={34} /></a></div>
        <div className="contact-bottom"><p>Open to backend engineering opportunities and conversations about building dependable software.</p><div className="social-links">
          <a href={`mailto:${email}`}><Mail size={16} /> Email</a><a href={`https://wa.me/${phone.replace("+", "")}`} target="_blank" rel="noreferrer"><Phone size={16} /> WhatsApp</a>
          <a href="https://github.com/abhishek-p-au16" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a href="https://www.linkedin.com/in/abhishek-p-118a5b1b9/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
        </div></div>
        <form className="contact-form" onSubmit={submitContact} noValidate>
          <label>Name<input name="name" autoComplete="name" required minLength={2} /></label><label>Email<input name="email" type="email" autoComplete="email" required /></label>
          <label className="message-field">Message<textarea name="message" rows={4} required minLength={10} /></label><button className="button button-dark" type="submit">Send a message <ArrowUpRight size={16} /></button>
          <p className="form-status" role="status">{formState === "error" ? "Please complete all fields with a valid email and a message of at least 10 characters." : formState === "sent" ? "Your email app should open with the message ready to send." : "Your email app will open to send this message."}</p>
        </form>
      </section>
    </main>
    <footer className="site-footer"><a href="#home" className="wordmark">abhishek<span>.dev</span></a><span>© {new Date().getFullYear()} Abhishek P</span><a href="#home" className="back-top">BACK TO TOP <ArrowDownRight size={14} /></a></footer>
  </div>;
}
