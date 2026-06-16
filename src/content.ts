import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  LineChart,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Split,
  WalletCards,
  X,
} from "lucide-react";

export const checkoutUrl =
  import.meta.env.VITE_CHECKOUT_URL ||
  "https://checkout.example.com/destrave-financeiro";

export const hero = {
  headline:
    "Destrave o financeiro da sua empresa e assuma o controle do seu lucro em 2026.",
  subheadline:
    "A metodologia prática para empresários e profissionais liberais que faturam, mas não veem a cor do dinheiro.",
  cta: "QUERO DESTRAVAR MEU LUCRO AGORA",
};

export const pain = {
  intro:
    "Você construiu uma empresa, conquistou clientes. O dinheiro está entrando.",
  lead: "Mas, no fundo, você se sente perdida:",
  bullets: [
    "Não sabe exatamente para onde o dinheiro vai.",
    "Vive na insegurança de não saber quanto terá em caixa no mês seguinte.",
    "Não faz ideia se o mês fechou com lucro ou prejuízo real.",
  ],
  closing:
    "Para quem tem talento, a desorganização financeira não é apenas um detalhe — é o gargalo que trava o seu crescimento.",
  bridge:
    "Seu negócio cresceu. Mas o controle financeiro ficou para trás. O Destrave Financeiro é o treinamento direto ao ponto para quem fatura como empresa e ainda opera no amadorismo.",
};

export const testimonials = [
  {
    name: "Fernanda Ciello",
    label: "Aluna Destrave",
    phrase: "Clareza sobre minhas finanças que eu nunca tive antes",
    quote:
      "A aula me trouxe uma clareza que eu nunca tive sobre minhas finanças. Pela primeira vez consegui enxergar meus padrões, organizar melhor minhas decisões e entender que o problema vai muito além dos números.",
  },
  {
    name: "Silmara Xavier",
    label: "Aluna Destrave",
    phrase: "Crescimento real exige organização financeira",
    quote:
      "Percebi que crescimento real não acontece sem organização financeira. A experiência me mostrou que prosperidade não é sorte — é resultado de clareza, disciplina e decisão.",
  },
  {
    name: "Priscilla Ayres",
    label: "Aluna Destrave",
    phrase: "A primeira vez que aprendi finanças de forma leve e com resultados",
    quote:
      "Foi a primeira vez que aprendi sobre finanças de forma leve, objetiva e sem complicações. Já comecei a aplicar o conteúdo e consigo perceber mudanças reais na minha organização financeira.",
  },
  {
    name: "Ian Paz",
    label: "Aluno Destrave",
    phrase: "Uma relação mais consciente com as minhas próprias escolhas",
    quote:
      "Compreendi que organizar o dinheiro não é apenas uma questão de planilhas. É desenvolver uma relação mais consciente com as próprias escolhas e tomar decisões com mais clareza.",
  },
];

export const pillars = [
  {
    title: "DIAGNÓSTICO FINANCEIRO",
    description: "Identifique o verdadeiro gargalo que drena seu caixa.",
    icon: ClipboardCheck,
  },
  {
    title: "FIM DO AMADORISMO (PF x PJ)",
    description:
      "Aprenda a separar as contas de vez e defina seu pró-labore.",
    icon: Split,
  },
  {
    title: "VISÃO ESTRATÉGICA (DRE)",
    description:
      'Pare de decidir pelo "feeling". Use números para saber quando e quanto investir.',
    icon: LineChart,
  },
  {
    title: "ESTRUTURA DE LUCRO",
    description:
      "Organize sua operação para que o lucro seja a regra, não a sobra.",
    icon: CircleDollarSign,
  },
  {
    title: "SEGURANÇA FINANCEIRA",
    description:
      "Construa o capital de giro e a reserva que te dão liberdade de escolha.",
    icon: ShieldCheck,
  },
];

export const fit = {
  yes: [
    "Mistura PF e PJ e não vê o dinheiro sobrando.",
    "Não tem previsibilidade de caixa.",
    'Vive na roda de "trabalhar apenas para pagar boletos".',
    "Sofre de ansiedade ao abrir o extrato bancário.",
  ],
  no: [
    "Busca uma fórmula mágica sem precisar aplicar o método.",
    "Prefere continuar no improviso e apagando incêndios.",
    "Não está disposto a encarar os números da própria empresa.",
  ],
};

export const luana = {
  bio: "Consultora e Mentora Financeira especializada em empresários que faturam bem e não veem o dinheiro sobrar.",
  stats: "+ de 250 mentorias | + 5 anos guiando profissionais e empresários",
  highlights: [
    {
      title: "Experiência",
      description:
        "Nos últimos 5 anos, conduziu mais de 250 mentorias e processos de consultoria financeira.",
    },
    {
      title: "Especializações",
      description:
        "Especialista em Educação Financeira, Finanças Comportamentais e Banking.",
    },
    {
      title: "Resultados",
      description:
        "Ajudou centenas de profissionais e empresários a deixarem o modo sobrevivência para trás.",
    },
    {
      title: "Obra Publicada",
      description:
        "Coautora da obra Quais de Mim Você Procura (Mulheres nas Finanças).",
    },
  ],
};

export const offer = {
  title: "Assuma o controle do seu negócio hoje.",
  priceEyebrow: "Investimento único:",
  installment: "R$ 97",
  cash: "Acesso imediato e completo",
  cta: "QUERO COMEÇAR AGORA",
  valueStack: [
    {
      title: "Metodologia Destrave Financeiro para Empresas",
      subtitle: "O método completo para organizar o financeiro do seu CNPJ.",
      originalPrice: "R$ 197",
      isBonus: false,
    },
    {
      title: "Planilhas para Controle Financeiro PF e PJ",
      subtitle: "A ferramenta pronta para controle de caixa e visualização de lucros.",
      originalPrice: "R$ 129",
      isBonus: true,
    },
    {
      title: "Aula Bônus: Análise Estratégica",
      subtitle: "Como tomar decisões financeiras com clareza e dados concretos.",
      originalPrice: "R$ 97",
      isBonus: true,
    },
    {
      title: "Checklist Financeiro",
      subtitle: "O passo a passo diário, semanal e mensal para manter a organização.",
      originalPrice: "R$ 67",
      isBonus: true,
    },
  ],
  totalOriginalValue: "R$ 490",
};

export const guarantee = {
  title: "Risco Zero para você.",
  text: "Eu confio tanto no método que te dou 7 dias para testar. Se você não sentir que é para você, basta solicitar o reembolso. Devolvemos 100% do seu investimento, sem burocracia.",
};

export const faqs = [
  {
    question: "O curso é ao vivo?",
    answer:
      "Não, as aulas são gravadas para você assistir no seu ritmo e rever quantas vezes precisar.",
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer: "O acesso é por 1 ano, incluindo todas as atualizações.",
  },
  {
    question: "Serve para MEI?",
    answer:
      "Com certeza. O método serve para qualquer empresário que precise organizar o CNPJ.",
  },
  {
    question: "Preciso entender de matemática ou planilhas?",
    answer:
      "Não. O foco é estratégia e gestão, de forma simples e visual.",
  },
];

export const credibilityBadges = [
  { label: "Especialista em Educação Financeira", icon: BadgeCheck },
  { label: "+ de 250 mentorias", icon: BriefcaseBusiness },
  { label: "Finanças, Investimentos e Banking", icon: BarChart3 },
];

export const compactBadges = [
  { label: "Aulas gravadas", icon: Sparkles },
  { label: "Aplicação imediata", icon: WalletCards },
  { label: "Garantia de 7 dias", icon: LockKeyhole },
  { label: "Checkout", icon: ArrowUpRight },
];

export const checkIcon = Check;
export const xIcon = X;
