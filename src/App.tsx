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
  Search,
  ShieldAlert,
  HelpCircle,
  Briefcase,
  Award,
  BookOpen,
  TrendingUp,
  Calculator,
  CheckSquare,
  Shield,
  Zap,
  Play,
  Check,
  X,
  Plus,
} from "lucide-react";
import {
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
    <section className="hero" id="top">
      <div className="hero-overlay" aria-hidden="true" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          className="hero-logo"
          src={`${import.meta.env.BASE_URL}destrave-logo.png`}
          alt="Destrave Financeiro"
        />
        
        <div className="micro-badge">
          <ShieldCheck className="h-4 w-4" />
          <span>Especialista em Educação Financeira</span>
        </div>

        <h1 aria-label={hero.headline}>
          Destrave o financeiro <span>da sua empresa</span> e assuma o controle do seu lucro em 2026.
        </h1>

        <p className="hero-subtitle">
          {hero.subheadline}
        </p>

        <div className="hero-actions">
          <PrimaryButton checkout href={checkoutUrl}>
            {hero.cta}
          </PrimaryButton>
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
      </motion.div>

      <div className="hero-image" aria-hidden="true">
        <img src={`${import.meta.env.BASE_URL}hero-luana.png`} alt="Luana Carraro" />
      </div>
    </section>
  );
}

function PainSection() {
  const painCards = [
    {
      icon: Search,
      num: "01",
      text: "Não sabe exatamente para onde o dinheiro vai.",
    },
    {
      icon: ShieldAlert,
      num: "02",
      text: "Vive na insegurança de não saber quanto terá em caixa.",
    },
    {
      icon: HelpCircle,
      num: "03",
      text: "Não faz ideia se o negócio realmente gera lucro.",
    },
  ];

  return (
    <section className="section-pad pain-section" id="problema">
      <div className="container editorial-grid">
        <div className="pain-left-content">
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
          <Reveal className="pain-narrative">
            <p className="pain-lead">{pain.lead}</p>
            <div className="editorial-callout">{pain.bridge}</div>
            <p className="pain-closing">{pain.closing}</p>
          </Reveal>
        </div>
        
        <div className="pain-cards-stack">
          {painCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal
                className={`pain-card pain-card-${index + 1}`}
                delay={index * 0.08}
                key={card.num}
              >
                <div className="pain-card-header">
                  <span className="pain-card-num">{card.num}</span>
                  <div className="pain-card-icon-wrap">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <p className="pain-card-text">{card.text}</p>
              </Reveal>
            );
          })}
        </div>
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
          title="O que dizem os empresários que já destravaram:"
        />
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <Reveal
              className={`testimonial-card testimonial-card-${index + 1}`}
              delay={index * 0.08}
              key={testimonial.name}
            >
              <div className="testimonial-header">
                <div className="testimonial-profile">
                  <div className="avatar">{testimonial.name.slice(0, 1)}</div>
                  <div className="profile-info">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.label}</span>
                  </div>
                </div>
                <div className="stars" aria-label="Avaliação cinco estrelas">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      className="h-3 w-3 star-icon"
                      fill="currentColor"
                      key={starIndex}
                    />
                  ))}
                </div>
              </div>
              
              <div className="testimonial-divider" />
              
              <div className="testimonial-body">
                <h3 className="testimonial-phrase">“{testimonial.phrase}”</h3>
                <p className="testimonial-quote">“{testimonial.quote}”</p>
              </div>
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
                <div className="pillar-card-header">
                  <div className="pillar-icon">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="pillar-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
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
    <section className="section-pad compact-section fit-section" id="diagnostico">
      <div className="container">
        <SectionHeader
          align="center"
          eyebrow="Para quem é"
          title="Clareza para decidir se este é o seu momento."
        />
        <div className="fit-grid">
          <Reveal className="fit-card positive">
            <div className="fit-card-header">
              <div className="fit-icon-badge positive">
                <Check className="h-5 w-5" />
              </div>
              <h3>Ideal para você</h3>
            </div>
            <div className="fit-rows">
              {fit.yes.map((item) => (
                <div className="fit-row" key={item}>
                  <Check className="h-4 w-4 fit-row-icon" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
          
          <Reveal className="fit-card negative" delay={0.08}>
            <div className="fit-card-header">
              <div className="fit-icon-badge negative">
                <X className="h-5 w-5" />
              </div>
              <h3>Não é para você</h3>
            </div>
            <div className="fit-rows">
              {fit.no.map((item) => (
                <div className="fit-row" key={item}>
                  <X className="h-4 w-4 fit-row-icon" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal className="fit-actions" delay={0.12}>
          <PrimaryButton checkout href={checkoutUrl}>
            QUERO DESTRAVAR MINHA EMPRESA AGORA
          </PrimaryButton>
        </Reveal>
      </div>
    </section>
  );
}

function LuanaSection() {
  const luanaIcons = [Briefcase, Award, TrendingUp, BookOpen];

  return (
    <section className="section-pad luana-section" id="luana">
      <div className="container luana-grid">
        <Reveal className="luana-photo-wrap">
          <div className="editorial-photo-container">
            <div className="editorial-frame-backdrop" />
            <div className="editorial-frame">
              <img src={`${import.meta.env.BASE_URL}foto-luana.png`} alt="Luana Carraro" />
            </div>
            <div className="editorial-frame-accent" />
          </div>
        </Reveal>
        
        <div className="luana-copy-wrap">
          <Reveal className="luana-header">
            <p className="eyebrow">Quem é Luana Carraro</p>
            <h2>Quem vai te guiar nessa jornada:</h2>
            <p className="luana-bio-text">{luana.bio}</p>
          </Reveal>
          
          <div className="luana-highlights-grid">
            {luana.highlights ? luana.highlights.map((highlight, index) => {
              const Icon = luanaIcons[index];
              return (
                <Reveal
                  className={`luana-highlight-card highlight-card-${index + 1}`}
                  delay={index * 0.06}
                  key={highlight.title}
                >
                  <div className="highlight-icon-wrap">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h4>{highlight.title}</h4>
                  <p>{highlight.description}</p>
                </Reveal>
              );
            }) : null}
          </div>
          
          <Reveal className="luana-quote-strip">
            <Quote className="h-5 w-5 quote-icon" />
            <p>“Conhecimento liberta e transforma!”</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  const offerIcons = [BookOpen, Award, TrendingUp, Calculator, CheckSquare];

  return (
    <section className="section-pad offer-section" id="oferta">
      <div className="offer-atmosphere" aria-hidden="true" />
      <div className="container offer-wrap">
        <Reveal className="offer-copy">
          <p className="eyebrow">A oferta</p>
          <h2>{offer.title}</h2>
          <p className="offer-subtitle">Ao se inscrever hoje, você recebe o método completo e todos os bônus:</p>
          
          <div className="value-stack">
            {offer.valueStack ? offer.valueStack.map((item, index) => {
              const Icon = offerIcons[index];
              return (
                <div className={`value-card ${item.isBonus ? "bonus" : "core"}`} key={item.title}>
                  <div className="value-card-icon-wrap">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="value-card-info">
                    <div className="value-card-header">
                      {item.isBonus && <span className="bonus-tag">BÔNUS EXCLUSIVO</span>}
                      <h4>{item.title}</h4>
                    </div>
                    <p>{item.subtitle}</p>
                  </div>
                  <div className="value-card-price">
                    {item.isBonus ? (
                      <>
                        <span className="price-slashed">{item.originalPrice}</span>
                        <span className="price-free">GRÁTIS</span>
                      </>
                    ) : (
                      <span className="price-included">Incluso</span>
                    )}
                  </div>
                </div>
              );
            }) : null}
          </div>
        </Reveal>
        
        <Reveal className="price-card" delay={0.08}>
          <div className="decision-label">Momento da decisão</div>
          <div className="price-total-original">
            <span>Valor Total:</span>
            <span className="price-slashed-total">{offer.totalOriginalValue}</span>
          </div>
          <div className="price-eyebrow">{offer.priceEyebrow}</div>
          <div className="price">{offer.installment}</div>
          <p className="price-cash">{offer.cash}</p>
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
    <section className="section-pad guarantee-section" id="garantia">
      <div className="container">
        <Reveal className="guarantee-box">
          <div className="guarantee-icon-wrap">
            <Shield className="h-14 w-14 guarantee-icon" />
          </div>
          <div className="guarantee-content">
            <span className="guarantee-badge">Garantia Incondicional</span>
            <h2>{guarantee.title}</h2>
            <p className="guarantee-text">{guarantee.text}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-pad faq-section" id="faq">
      <div className="container faq-grid">
        <Reveal className="faq-info">
          <p className="eyebrow">Dúvidas frequentes</p>
          <h2>FAQ</h2>
          <h3 className="faq-subtitle">Ainda com dúvidas?</h3>
          <p className="faq-lead-text">
            As perguntas abaixo respondem os principais pontos antes de iniciar sua jornada financeira.
          </p>
        </Reveal>
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
            <PrimaryButton checkout href={checkoutUrl}>
              QUERO DESTRAVAR MEU LUCRO AGORA
            </PrimaryButton>
          </div>
          <div className="footer-badges-list">
            <span>
              <Shield className="h-4 w-4" />
              Garantia de 7 dias
            </span>
            <span>
              <Zap className="h-4 w-4" />
              Acesso imediato
            </span>
            <span>
              <Play className="h-4 w-4" />
              Aulas gravadas
            </span>
          </div>
        </div>

        <div className="footer-signature">
          <img
            className="footer-logo"
            src={`${import.meta.env.BASE_URL}destrave-logo.png`}
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
      <PillarsSection />
      <FitSection />
      <LuanaSection />
      <TestimonialsSection />
      <OfferSection />
      <GuaranteeSection />
      <FaqSection />
      <Footer />
    </>
  );
}
