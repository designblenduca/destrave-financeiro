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
  intro: "Você construiu sua empresa, conquistou clientes e o dinheiro está entrando.",
  lead: "Mas, no fundo, você se sente perdida:",
  bullets: [
    "Não sabe exatamente para onde o dinheiro vai.",
    "Vive na insegurança de não saber quanto terá em caixa no mês seguinte.",
    "Não faz ideia se o mês fechou com lucro ou prejuízo real.",
  ],
  closing:
    "Para quem tem talento, a desorganização financeira não é apenas um detalhe, é o gargalo estratégico que segura o seu crescimento e rouba o seu sono.",
  bridge:
    "Sua empresa cresceu, mas o seu controle ficou para trás? O Destrave Financeiro é o treinamento direto ao ponto para quem faturar como empresa, mas ainda opera no amadorismo.",
};

export const testimonials = [
  {
    name: "Fernanda Ciello",
    label: "Aluna Destrave",
    phrase: "Finanças de forma leve e com clareza imediata",
    quote:
      "Eu nunca tinha feito uma aula sobre finanças tão leve. Sempre tive dificuldades de olhar para o financeiro por ter um perfil impulsivo, mas as ferramentas me trouxeram clareza sobre o meu momento atual. Super recomendo o trabalho, pois vai muito além dos números.",
  },
  {
    name: "Silmara Xavier",
    label: "Aluna Destrave",
    phrase: "Um divisor de águas para o crescimento da empresa",
    quote:
      "Entendi que não existe crescimento real sem controle financeiro. Essa aula foi um divisor de águas e me provou que finanças não são apenas números, mas sim consciência e visão de futuro. Tive uma mudança de mentalidade: prosperidade é gestão, disciplina e decisão.",
  },
  {
    name: "Priscilla Ayres",
    label: "Aluna Destrave",
    phrase: "Conteúdo prático, sem termos difíceis e com resultados",
    quote:
      "Foi a primeira vez que ouvi sobre finanças de forma tão leve, clara e objetiva, sem termos difíceis. Amei as planilhas e o suporte recebido. Já coloquei a organização em prática e a diferença para entender as contas e visualizar metas é notória.",
  },
  {
    name: "Ian Paz",
    label: "Aluno Destrave",
    phrase: "Uma relação mais saudável com o dinheiro e escolhas conscientes",
    quote:
      "Compreendi que organizar o dinheiro vai além de planilhas, trata-se de uma relação psicológica mais saudável. Percebi que o problema não se resolve apenas ganhando mais, mas sim olhando com consciência para o que temos, entendendo nossos padrões e tomando decisões com clareza.",
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
  bio: "Entusiasta do universo das finanças! Me tornei Mentora e Consultora Financeira após descobrir que conhecimento liberta e transforma! Entendi que meu propósito de vida estava em levar esse conhecimento e transformar a mentalidade e a vida financeira das pessoas mundo afora!",
  specialty:
    "ESPECIALISTA EM EDUCAÇÃO FINANCEIRA, FINANÇAS, INVESTIMENTOS E BANKING E FINANÇAS COMPORTAMENTAIS.",
  book:
    "COAUTORA DA OBRA ‘QUAIS DE MIM VOCÊ PROCURA?’ – Mulheres no Digital e Mulheres nas Finanças.",
  stats:
    "+ de 200 mentorias | + 5 anos guiando profissionas e pessoas a conquistarem seus sonhos.",
};

export const offer = {
  title: "Assuma o controle do seu negócio hoje.",
  includes: [
    "Acesso imediato às aulas gravadas (assista onde e quando quiser).",
    "Ferramentas práticas para aplicação imediata.",
    "Metodologia validada por centenas de alunos.",
  ],
  priceEyebrow: "DE R$ XXX POR APENAS",
  installment: "12x de R$ XX,XX",
  cash: "ou R$ XXX,00 à vista",
  cta: "QUERO COMEÇAR AGORA",
};

export const guarantee = {
  title: "Risco Zero para você.",
  text: "Garantia Incondicional de 7 dias. Eu confio tanto no método que te dou uma semana inteira para testar. Se você assistir às aulas e sentir que não é para você, basta solicitar o reembolso e devolvemos 100% do seu investimento. Sem burocracia.",
};

export const faqs = [
  {
    question: "O curso é ao vivo?",
    answer:
      "Não, as aulas são gravadas para você assistir no seu ritmo e rever quantas vezes precisar.",
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer: "O acesso é por [1 ano / vitalício], incluindo todas as atualizações.",
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
  { label: "+ de 200 mentorias", icon: BriefcaseBusiness },
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
