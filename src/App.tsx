import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Braces,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Copy,
  CreditCard,
  FileCode,
  LockKeyhole,
  Menu,
  Mic,
  Phone,
  ScanSearch,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Terminal,
  X,
  Zap,
} from "lucide-react";

const projects = [
  {
    number: "01",
    type: "Agentic security",
    title: "Argus",
    description:
      "Terminal-first pentesting framework with planner/executor orchestration, a hypothesis engine and a Python MCP server wrapping real security tools.",
    tags: ["Python", "MCP", "SolidJS", "Bun"],
    icon: Bot,
    accent: "cyan",
    status: "OPEN SOURCE",
    href: "https://github.com/Olamzkid2005/Argus-",
  },
  {
    number: "02",
    type: "Threat detection",
    title: "ThreatShield",
    description:
      "Phishing detection engine built from a 98%-accuracy dissertation model, using 56+ structural URL features and a voting ensemble over 5,000+ URLs.",
    tags: ["scikit-learn", "Flask", "Detection"],
    icon: ShieldCheck,
    accent: "violet",
    status: "98% ACCURACY",
    href: "https://github.com/Olamzkid2005/NGIPS-Phishing-Shield",
  },
  {
    number: "03",
    type: "Security research",
    title: "vibe-security-ultra",
    description:
      "An 8,500+ line security audit reference across 22 domains, with full attack chains, vulnerable and secure code patterns, and remediation steps.",
    tags: ["AppSec", "HMAC", "OSINT"],
    icon: FileCode,
    accent: "lime",
    status: "AUDIT REFERENCE",
    href: "https://github.com/Olamzkid2005/vibe-security-enhanced",
  },
  {
    number: "04",
    type: "Fintech platform",
    title: "OnePay",
    description:
      "Flask payment platform with KoraPay integration, idempotent webhooks and a full auth stack: bcrypt, JWT refresh rotation, TOTP MFA and CSRF protection.",
    tags: ["Flask", "KoraPay", "JWT", "MFA"],
    icon: CreditCard,
    accent: "cyan",
    status: "BUILT",
    href: "https://github.com/Olamzkid2005/One-pay",
  },
  {
    number: "05",
    type: "Voice payments",
    title: "VoicePay",
    description:
      "Voice-initiated bank transfers over WhatsApp: Whisper transcription, GPT-4o intent extraction behind a hardened prompt, and Flutterwave and Paystack as payment rails.",
    tags: ["Python", "Flask", "GPT-4o", "Whisper"],
    icon: Mic,
    accent: "violet",
    status: "IN DEVELOPMENT",
  },
  {
    number: "06",
    type: "Merchant intelligence",
    title: "Merchant Parameter Intelligence",
    description:
      "FastAPI, React/Vite and SQLite (FTS5) search toolkit over Interswitch 2ISW and NNPC merchant parameter files, with a regex-based intent parser.",
    tags: ["FastAPI", "SQLite FTS5", "React"],
    icon: ScanSearch,
    accent: "lime",
    status: "INTERNAL TOOL",
    href: "https://github.com/Olamzkid2005/merchant-parameter-intelligence",
  },
  {
    number: "07",
    type: "Multimodal AI",
    title: "AI Shopping Assistant",
    description:
      "Text and voice shopping assistant built with Flask and MySQL, pairing speech libraries with the OpenAI API for conversational product discovery.",
    tags: ["Flask", "MySQL", "OpenAI", "Speech"],
    icon: ShoppingBag,
    accent: "violet",
    status: "PROTOTYPE",
  },
];

const expertise = [
  { icon: ShieldCheck, label: "Security", value: "Pentesting, AppSec audits, threat modelling" },
  { icon: Bot, label: "AI & agents", value: "Agent orchestration, MCP, LLM pipelines" },
  { icon: Braces, label: "Backend", value: "Python, Flask, FastAPI, Celery" },
  { icon: CreditCard, label: "Payments", value: "Webhook signing, idempotency, rails" },
];

const email = "davidolamijulo2005@gmail.com";
const phone = "08100518807";
const phoneHref = "tel:+2348100518807";
const github = "https://github.com/Olamzkid2005";
const linkedin = "https://www.linkedin.com/in/david-olamijulo/";

function Logo() {
  return (
    <a href="#top" className="logo" aria-label="David Olamijulo, home">
      <span className="logo-mark">DO</span>
      <span className="logo-copy">
        DAVID
        <small>OLAMIJULO</small>
      </span>
    </a>
  );
}

function SecurityCore() {
  const coreRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -18;
    coreRef.current?.style.setProperty("--rx", `${y}deg`);
    coreRef.current?.style.setProperty("--ry", `${x}deg`);
  };

  const reset = () => {
    coreRef.current?.style.setProperty("--rx", "0deg");
    coreRef.current?.style.setProperty("--ry", "0deg");
  };

  return (
    <div className="visual-wrap" onPointerMove={handlePointerMove} onPointerLeave={reset}>
      <div className="core-scene" ref={coreRef}>
        <div className="orbit orbit-one">
          <span />
        </div>
        <div className="orbit orbit-two">
          <span />
        </div>
        <div className="orbit orbit-three">
          <span />
        </div>
        <div className="core-shadow" />
        <div className="core-shell">
          <div className="core-grid" />
          <div className="core-face">
            <ShieldCheck size={56} strokeWidth={1.35} />
            <span>ONLINE</span>
          </div>
          <div className="core-glow" />
        </div>
        <div className="data-tag tag-one">
          <i /> WEBHOOK SIGNED
        </div>
        <div className="data-tag tag-two">
          OWASP TOP 10 <i />
        </div>
        <div className="data-tag tag-three">
          <i /> THREAT: 0
        </div>
      </div>
      <div className="scan-line" />
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top">
      <nav className={scrolled ? "nav scrolled" : "nav"}>
        <Logo />
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#expertise">Expertise</a>
        </div>
        <a className="nav-cta" href="#contact">
          Let’s connect <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#work" onClick={closeMenu}>
            Work
          </a>
          <a href="#expertise" onClick={closeMenu}>
            Expertise
          </a>
          <a href="#contact" onClick={closeMenu}>
            Let’s connect
          </a>
        </div>
      )}

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-noise" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span /> SECURITY ENGINEER · OFFENSIVE SECURITY · THREAT DETECTION
          </div>
          <h1 id="hero-title">
            I break systems
            <strong>before attackers do.</strong>
          </h1>
          <p>
            I’m David Olamijulo, a security-focused engineer: pentesting agentic systems with Argus,
            auditing payment code, and building the Python services — signed webhooks, idempotency,
            MFA — that survive those audits.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#work">
              Explore my work <ArrowDown size={17} />
            </a>
            <a className="text-button" href="#about">
              More about me <ChevronRight size={17} />
            </a>
          </div>
          <div className="hero-metrics">
            <div>
              <strong>98%</strong>
              <span>detection accuracy</span>
            </div>
            <div>
              <strong>22</strong>
              <span>security domains audited</span>
            </div>
            <div>
              <strong>07</strong>
              <span>selected builds</span>
            </div>
          </div>
        </div>
        <SecurityCore />
        <a href="#about" className="scroll-cue" aria-label="Scroll to about section">
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown size={16} />
        </a>
      </section>

      <section className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>
            APPLICATION SECURITY <i />
          </span>
          <span>
            OFFENSIVE SECURITY <i />
          </span>
          <span>
            THREAT DETECTION <i />
          </span>
          <span>
            PAYMENTS ENGINEERING <i />
          </span>
          <span>
            APPLICATION SECURITY <i />
          </span>
          <span>
            OFFENSIVE SECURITY <i />
          </span>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section-label">
          <span>01</span> ABOUT
        </div>
        <div className="about-grid">
          <h2>
            Offense is the
            <br />
            best <em>defense.</em>
          </h2>
          <div className="about-copy">
            <p className="lead">
              Security-focused engineer (Christland University, 2025) working across offensive
              security, threat detection and the payment backends I help harden.
            </p>
            <p>
              Most of what I do is finding what breaks before someone else does — building a
              pentesting platform for agentic systems, modelling phishing detection, and auditing
              LLM-driven payment code. That work sits on real payment infrastructure: signed
              webhooks, idempotency, rate limiting, MFA and repeated security reviews, with
              day-to-day exposure to Interswitch merchant and terminal data. Payments are where the
              security has to hold, so I build those backends in Python too.
            </p>
            <div className="principles">
              <span>
                <ShieldCheck size={16} /> CEH · valid to Aug 2027
              </span>
              <span>
                <LockKeyhole size={16} /> CompTIA Security+
              </span>
              <span>
                <Zap size={16} /> Pentesting · AppSec
              </span>
              <span>
                <Terminal size={16} /> Python · TypeScript
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-heading">
          <div>
            <div className="section-label">
              <span>02</span> SELECTED WORK
            </div>
            <h2>
              Finding the cracks, then <em>closing them.</em>
            </h2>
          </div>
          <p>
            Security work leads: pentesting agentic systems, detecting phishing, auditing app code —
            alongside the payments platforms those controls exist to protect.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className={`project-card ${project.accent}`} key={project.title}>
                <div className="project-top">
                  <span>{project.number}</span>
                  {project.href ? (
                    <a
                      className="project-arrow"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <ArrowUpRight size={19} />
                    </a>
                  ) : (
                    <span className="project-arrow" aria-hidden="true">
                      <ArrowUpRight size={19} />
                    </span>
                  )}
                </div>
                <div className="project-visual">
                  <div className="project-rings" />
                  <Icon size={48} strokeWidth={1.25} />
                  <span className="project-status">
                    <i /> {project.status}
                  </span>
                </div>
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="expertise section" id="expertise">
        <div className="expertise-intro">
          <div className="section-label">
            <span>03</span> EXPERTISE
          </div>
          <h2>
            I audit like an attacker and <em>build like a defender.</em>
          </h2>
          <p>
            Offensive security is the through-line: I break agentic systems and payment flows on
            purpose, then write the fixes — signature checks, throttling, MFA — into the backend
            itself.
          </p>
        </div>
        <div className="expertise-list">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="expertise-row" key={item.label}>
                <span className="expertise-number">0{index + 1}</span>
                <span className="expertise-icon">
                  <Icon size={21} />
                </span>
                <strong>{item.label}</strong>
                <span>{item.value}</span>
                <ArrowUpRight className="row-arrow" size={19} />
              </div>
            );
          })}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-glow" />
        <Sparkles className="contact-spark spark-one" />
        <Sparkles className="contact-spark spark-two" />
        <span className="availability">
          <i /> OPEN TO SECURITY, APPSEC &amp; BACKEND ROLES
        </span>
        <h2>Have a hard problem?</h2>
        <p>Let’s find the gaps before someone else does.</p>
        <div className="contact-actions">
          <a className="primary-button light" href={`mailto:${email}`}>
            Start a conversation <ArrowUpRight size={17} />
          </a>
          <button className="copy-button" type="button" onClick={copyEmail}>
            {copied ? <Check size={17} /> : <Copy size={17} />}
            {copied ? "Copied to clipboard" : email}
          </button>
          <a className="copy-button phone-button" href={phoneHref} aria-label={`Call David on ${phone}`}>
            <Phone size={17} />
            {phone}
          </a>
        </div>
      </section>

      <footer>
        <Logo />
        <p>Security-first engineering — and the payments backends behind it.</p>
        <div className="socials">
          <a href={github} target="_blank" rel="noreferrer" aria-label="David on GitHub">
            <Braces size={18} />
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer" aria-label="David on LinkedIn">
            <BriefcaseBusiness size={18} />
          </a>
          <a href={`mailto:${email}`} aria-label="Email David">
            <BrainCircuit size={18} />
          </a>
        </div>
        <span>© {new Date().getFullYear()} DAVID OLAMIJULO</span>
      </footer>
    </main>
  );
}

export default App;
