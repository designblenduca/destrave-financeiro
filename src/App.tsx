import { useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ChevronDown,
  Quote,
  ShieldCheck,
  Star,
} from "lucide-react";
import {
  checkIcon as CheckIcon,
  checkoutUrl,
  compactBadges,
  credibilityBadges,
  faqs,
  fit,
  guarantee,
  hero,
  luana,
  offer,
  pain,
  pillars,
  testimonials,
  xIcon as XIcon,
} from "./content";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

function scrollToOffer() {
  document.getElementById("oferta")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`section-header ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <p className="section-lead">{body}</p> : null}
    </Reveal>
  );
}

function PrimaryButton({
  children,
  onClick,
  href,
  checkout = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  checkout?: boolean;
}) {
  const className = "primary-button group";

  if (href) {
    return (
      <a
        className={className}
        href={href}
        rel="noreferrer"
        target={checkout ? "_blank" : undefined}
      >
        <span>{children}</span>
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} type="button">
      <span>{children}</span>
      <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
    </button>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="top">
      {/* Mobile-only header logo and visual background block */}
      <div className="hero-mobile-header" aria-hidden="true">
        <img
          className="hero-mobile-logo"
          src="/destrave-logo.png"
          alt="Destrave Financeiro"
        />
      </div>
      <div className="hero-visual" aria-hidden="true" />

      <div className="hero-texture" aria-hidden="true" />
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Logo visible only on desktop */}
          <img
            className="hero-logo desktop-only-logo"
            src="/destrave-logo.png"
            alt="Destrave Financeiro"
          />
          <div className="micro-badge">
            <ShieldCheck className="h-4 w-4" />
            <span>Especialista em Educação Financeira</span>
          </div>
          <h1 aria-label={hero.headline}>
            <span className="hero-line">Destrave o financeiro</span>
            <span className="hero-line">da sua empresa</span>
            <span className="hero-line">e assuma o controle</span>
            <span className="hero-line">do seu lucro em 2026.</span>
          </h1>
          <p>{hero.subheadline}</p>
          <div className="hero-actions">
            <PrimaryButton onClick={scrollToOffer}>{hero.cta}</PrimaryButton>
          </div>
          <div className="hero-proof" aria-label="Credenciais">
            {credibilityBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <span key={badge.label}>
                  <Icon className="h-4 w-4" />
                  {badge.label}
                </span>
              );
            })}
          </div>
          <div className="hero-editorial-note" aria-hidden="true">
            <span>01</span>
            <p>caixa, lucro e decisão caminhando na mesma direção</p>
          </div>
        </motion.div>
        {/* Empty container visible only on desktop */}
        <div className="hero-empty desktop-only-empty" aria-hidden="true">
          <img src="/hero-luana.png" alt="" />
        </div>
      </div>
    </section>
  );
}

function PainSection() {
  const emphasizedPain = [
    <>
      Não sabe exatamente <mark>para onde o dinheiro vai</mark>.
    </>,
    <>
      Vive na insegurança de não saber quanto terá em caixa no mês seguinte.
    </>,
    <>
      Não faz ideia se o mês fechou com <mark>lucro ou prejuízo real</mark>.
    </>,
  ];

  return (
    <section className="section-pad pain-section" id="problema">
      <div className="container editorial-grid">
        <SectionHeader
          eyebrow="O problema"
          title={
            <>
              <span className="section-title-line">O dinheiro entra.</span>
              <span className="section-title-line">A clareza ainda não.</span>
            </>
          }
          body={pain.intro}
        />
        <Reveal className="pain-panel">
          <p className="pain-lead">{pain.lead}</p>
          <div className="pain-list">
            {pain.bullets.map((item, index) => (
              <div className="pain-item" key={item}>
                <span />
                <p>{emphasizedPain[index]}</p>
              </div>
            ))}
          </div>
          <div className="pain-tags" aria-label="Pontos de identificação">
            <span>Não sabe para onde o dinheiro vai</span>
            <span>Vive apagando incêndios</span>
            <span>Não sabe se teve lucro</span>
          </div>
          <p>{pain.closing}</p>
          <div className="editorial-callout">{pain.bridge}</div>
        </Reveal>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section-pad soft-band" id="depoimentos">
      <div className="container">
        <SectionHeader
          align="center"
          eyebrow="Prova social"
          title="O que dizem as empresárias que já destravaram:"
        />
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <Reveal
              className={`testimonial-card testimonial-card-${index + 1}`}
              delay={index * 0.08}
              key={testimonial.quote}
            >
              <div className="testimonial-top">
                <div className="avatar">{testimonial.role.slice(0, 1)}</div>
                <div>
                  <span>Aluna Destrave</span>
                  <strong>{testimonial.role}</strong>
                  <div className="stars" aria-label="Avaliação cinco estrelas">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        className="h-3.5 w-3.5"
                        fill="currentColor"
                        key={starIndex}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <Quote className="quote-icon h-7 w-7" />
              <p>“{testimonial.quote}”</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarsSection() {
  return (
    <section className="section-pad pillars-section" id="pilares">
      <div className="container">
        <SectionHeader
          eyebrow="Os 5 pilares"
          title="Você terá acesso imediato às aulas gravadas que formam o plano de ação das grandes empresárias:"
        />
        <div className="pillars-grid">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal
                className={`pillar-card pillar-card-${index + 1}`}
                delay={index * 0.06}
                key={pillar.title}
              >
                <div className="pillar-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="pillar-icon">
                  <Icon className="h-5 w-5" />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FitSection() {
  return (
    <section className="section-pad compact-section fit-section">
      <div className="container">
        <SectionHeader
          eyebrow="Para quem é / não é"
          title="Clareza para decidir se este é o seu momento."
        />
        <div className="fit-grid">
          <Reveal className="fit-card positive">
            <h3>Este curso é para você que:</h3>
            {fit.yes.map((item) => (
              <div className="fit-row" key={item}>
                <CheckIcon className="h-5 w-5" />
                <p>{item}</p>
              </div>
            ))}
          </Reveal>
          <Reveal className="fit-card negative" delay={0.08}>
            <h3>Este curso NÃO é para você que:</h3>
            {fit.no.map((item) => (
              <div className="fit-row" key={item}>
                <XIcon className="h-5 w-5" />
                <p>{item}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function LuanaSection() {
  return (
    <section className="section-pad luana-section" id="luana">
      <div className="container luana-grid">
        <Reveal className="luana-photo">
          <div className="photo-frame">
            <img src="/foto-luana.png" alt="Luana Carraro" />
          </div>
        </Reveal>
        <Reveal className="luana-copy">
          <p className="eyebrow">Quem é Luana Carraro</p>
          <h2>Quem vai te guiar nessa jornada:</h2>
          <p>{luana.bio}</p>
          <div className="credential-stack">
            <div>{luana.specialty}</div>
            <div>{luana.book}</div>
          </div>
          <div className="luana-human-note">
            “Conhecimento liberta e transforma!”
          </div>
          <div className="stat-strip">{luana.stats}</div>
        </Reveal>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section className="section-pad offer-section" id="oferta">
      <div className="offer-atmosphere" aria-hidden="true" />
      <div className="container offer-wrap">
        <Reveal className="offer-copy">
          <p className="eyebrow">A oferta</p>
          <h2>{offer.title}</h2>
          <p>Ao se inscrever no Curso Destrave Financeiro, você recebe:</p>
          <div className="offer-list">
            {offer.includes.map((item) => (
              <div className="fit-row" key={item}>
                <CheckIcon className="h-5 w-5" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="price-card" delay={0.08}>
          <div className="decision-label">Momento da decisão</div>
          <div className="price-eyebrow">{offer.priceEyebrow}</div>
          <div className="price">{offer.installment}</div>
          <p>{offer.cash}</p>
          <PrimaryButton checkout href={checkoutUrl}>
            {offer.cta}
          </PrimaryButton>
          <div className="offer-badges">
            {compactBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <span key={badge.label}>
                  <Icon className="h-4 w-4" />
                  {badge.label}
                </span>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function GuaranteeSection() {
  return (
    <section className="section-pad guarantee-section">
      <div className="container">
        <Reveal className="guarantee-card">
          <div className="guarantee-seal">
            <ShieldCheck className="h-9 w-9" />
            <span>7 dias</span>
          </div>
          <div>
            <p className="eyebrow">Garantia e segurança</p>
            <h2>{guarantee.title}</h2>
            <p>{guarantee.text}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-pad faq-section">
      <div className="container faq-grid">
        <SectionHeader eyebrow="Dúvidas frequentes" title="FAQ" />
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal
                className="faq-item"
                delay={index * 0.04}
                key={faq.question}
              >
                <button
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  type="button"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={isOpen ? "rotate-180" : ""} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="footer">
      <div className="container footer-inner">
        <div className="footer-conversion">
          <h2>
            Seu negócio já exige muito de você.
            <br />
            As suas finanças não deveriam ser mais um peso.
          </h2>
          <p>
            Chegou a hora de parar de trabalhar no escuro e assumir o controle
            financeiro da sua empresa com clareza, estratégia e lucro.
          </p>
          <div className="footer-cta-wrap">
            <PrimaryButton onClick={scrollToOffer}>
              QUERO DESTRAVAR MEU LUCRO AGORA
            </PrimaryButton>
          </div>
          <div className="footer-badges-list">
            <span>🛡️ Garantia de 7 dias</span>
            <span>⚡ Acesso imediato</span>
            <span>🎥 Aulas gravadas</span>
          </div>
        </div>

        <div className="footer-signature">
          <img
            className="footer-logo"
            src="/destrave-logo.png"
            alt="Destrave Financeiro"
          />
          <p className="footer-copyright">
            © 2026 Destrave Financeiro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Hero />
      <PainSection />
      <TestimonialsSection />
      <PillarsSection />
      <FitSection />
      <LuanaSection />
      <OfferSection />
      <GuaranteeSection />
      <FaqSection />
      <Footer />
    </>
  );
}
