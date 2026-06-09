import { useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  LockKeyhole,
  Play,
  Quote,
  Shield,
  ShieldCheck,
  X,
} from "lucide-react";
import {
  checkoutUrl,
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
        align === "center" ? "section-header-center" : ""
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

      <Reveal className="hero-content">
        <img
          className="hero-logo"
          src={`${import.meta.env.BASE_URL}destrave-logo.png`}
          alt="Destrave Financeiro"
        />

        <h1 aria-label={hero.headline}>
          Destrave o financeiro da sua empresa
          <span>e assuma o controle do seu lucro em 2026.</span>
        </h1>

        <p className="hero-subtitle">{hero.subheadline}</p>

        <PrimaryButton checkout href={checkoutUrl}>
          {hero.cta}
        </PrimaryButton>
      </Reveal>

      <picture className="hero-image" aria-hidden="true">
        <source
          media="(max-width: 768px)"
          srcSet={`${import.meta.env.BASE_URL}hero-mobile.png`}
        />
        <img src={`${import.meta.env.BASE_URL}hero-desktop.png`} alt="" />
      </picture>
    </section>
  );
}

function PainSection() {
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
        </div>

        <div className="pain-numbered-list">
          {pain.bullets.map((item, index) => (
            <Reveal
              className="pain-numbered-item"
              delay={index * 0.08}
              key={item}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="pain-narrative">
          <p className="pain-lead">{pain.lead}</p>
          <p>{pain.bridge}</p>
          <p className="pain-closing">{pain.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}

function PillarsSection() {
  return (
    <section className="section-pad pillars-section" id="pilares">
      <div className="container">
        <SectionHeader
          eyebrow="O método"
          title="O mapa para o lucro constante e crescimento previsível:"
        />
        <div className="pillars-editorial-grid">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal
                className="pillar-chapter"
                delay={index * 0.06}
                key={pillar.title}
              >
                <div className="pillar-chapter-header">
                  <span className="pillar-chapter-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon className="pillar-chapter-icon" strokeWidth={1.7} />
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
    <section className="section-pad fit-section" id="diagnostico">
      <div className="container">
        <SectionHeader
          align="center"
          eyebrow="Para quem é"
          title="Clareza para decidir se este é o seu momento."
        />
        <div className="fit-comparison">
          <Reveal className="fit-column">
            <h3>Ideal para você</h3>
            <div className="fit-rows">
              {fit.yes.map((item) => (
                <div className="fit-row" key={item}>
                  <Check className="fit-row-icon" strokeWidth={2} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="fit-column fit-column-negative" delay={0.08}>
            <h3>Não é para você</h3>
            <div className="fit-rows">
              {fit.no.map((item) => (
                <div className="fit-row" key={item}>
                  <X className="fit-row-icon" strokeWidth={2} />
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
  const credentials = [
    "+250 mentorias realizadas",
    "Especialista em Educação Financeira",
    "Especialista em Finanças Comportamentais",
    "Especialista em Banking",
    "Coautora da obra “Quais de Mim Você Procura”",
  ];

  return (
    <section className="section-pad luana-section" id="luana">
      <div className="container luana-grid">
        <Reveal className="luana-photo-wrap">
          <img src={`${import.meta.env.BASE_URL}foto-luana.png`} alt="Luana Carraro" />
        </Reveal>

        <div className="luana-copy-wrap">
          <Reveal className="luana-header">
            <p className="eyebrow">Quem é Luana Carraro</p>
            <h2>Quem vai te guiar nessa jornada:</h2>
            <p className="luana-bio-text">{luana.bio}</p>
          </Reveal>

          <div className="luana-credentials">
            {credentials.map((credential, index) => (
              <Reveal
                className="luana-credential"
                delay={index * 0.05}
                key={credential}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{credential}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="luana-quote-strip">
            <Quote className="quote-icon" strokeWidth={1.6} />
            <p>“Conhecimento liberta e transforma!”</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section-pad testimonials-section" id="depoimentos">
      <div className="container">
        <SectionHeader
          align="center"
          eyebrow="Prova social"
          title="O que dizem os empresários que já destravaram:"
        />
        <div className="testimonial-clean-grid">
          {testimonials.map((testimonial, index) => (
            <Reveal
              className="testimonial-clean-item"
              delay={index * 0.08}
              key={testimonial.name}
            >
              <h3 className="testimonial-phrase">“{testimonial.phrase}”</h3>
              <p className="testimonial-quote">“{testimonial.quote}”</p>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section className="section-pad offer-section" id="oferta">
      <div className="container offer-wrap">
        <Reveal className="offer-copy">
          <p className="eyebrow">A oferta</p>
          <h2>{offer.title}</h2>
          <p className="offer-subtitle">
            Ao se inscrever hoje, você recebe o método completo e todos os bônus:
          </p>

          <div className="value-invoice-stack">
            {offer.valueStack?.map((item) => (
              <div className="invoice-row" key={item.title}>
                <Check className="invoice-icon" strokeWidth={1.7} />
                <div className="invoice-row-content">
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
                <div className="invoice-row-price">
                  <span>{item.isBonus ? "Incluso" : "Principal"}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="price-card" delay={0.08}>
          <div className="decision-label">Momento da decisão</div>
          <div className="price-total-original">
            <span>Valor total:</span>
            <span className="price-slashed-total">{offer.totalOriginalValue}</span>
          </div>
          <div className="price-eyebrow">{offer.priceEyebrow}</div>
          <div className="price">{offer.installment}</div>
          <p className="price-cash">{offer.cash}</p>
          <PrimaryButton checkout href={checkoutUrl}>
            {offer.cta}
          </PrimaryButton>
          <div className="offer-assurances">
            <span>
              <Play strokeWidth={1.7} />
              Aulas gravadas
            </span>
            <span>
              <ShieldCheck strokeWidth={1.7} />
              Garantia de 7 dias
            </span>
            <span>
              <LockKeyhole strokeWidth={1.7} />
              Checkout seguro
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function GuaranteeSection() {
  return (
    <section className="section-pad guarantee-open-section" id="garantia">
      <div className="container guarantee-open-container">
        <Reveal className="guarantee-open-content">
          <Shield className="guarantee-icon-minimal" strokeWidth={1.6} />
          <p className="eyebrow">Garantia Incondicional</p>
          <h2>{guarantee.title}</h2>
          <p className="guarantee-text">{guarantee.text}</p>
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
            As perguntas abaixo respondem os principais pontos antes de iniciar
            sua jornada financeira.
          </p>
        </Reveal>
        <div className="faq-list-clean">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal
                className="faq-clean-item"
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
                      <div className="faq-answer-clean">
                        <p>{faq.answer}</p>
                      </div>
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
              <Shield strokeWidth={1.7} />
              Garantia de 7 dias
            </span>
            <span>
              <LockKeyhole strokeWidth={1.7} />
              Acesso imediato
            </span>
            <span>
              <Play strokeWidth={1.7} />
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
