
import React from 'react';
import { NavLink, ServiceItem, PackageTier, CalculableService, FAQItem } from './types';

export const SITE_NAME_DISPLAY = "Kah Siqueira - Design Estratégico";
export const SITE_ROLE_DISPLAY = "Social Media Estratégista";

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Início', href: '#home' },
  { id: 'about', label: 'Sobre Mim', href: '#about' },
  { id: 'services', label: 'Serviços', href: '#services' },
  { id: 'packages', label: 'Pacotes', href: '#packages' },
  { id: 'calculator', label: 'Calculadora', href: '#calculator' },
  { id: 'contact', label: 'Contato', href: '#contact' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
];

export const aboutMeText = {
  p1: "Sou estrategista de social media com mais de 15 anos de experiência no universo do marketing. Ao longo da minha trajetória, mergulhei em diferentes áreas da comunicação digital, sempre com um olhar estratégico e apaixonado pelo que faço.",
  p2: "Minha missão é transformar ideias em resultados concretos, criando conexões autênticas entre marcas e pessoas. O marketing, para mim, vai muito além de métricas – é sobre propósito, criatividade e entrega com qualidade.",
  p3: "Levo cada projeto com comprometimento genuíno, buscando sempre superar expectativas e gerar impacto real. Meu trabalho é minha paixão, e é essa energia que me move todos os dias."
};

const PlaceholderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brand-accent">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);


export const servicesList: ServiceItem[] = [
  { id: 'strategy', title: 'Estratégia de Mídias Sociais Personalizada', description: 'Desenvolvimento de planos estratégicos alinhados aos seus objetivos de negócio, público-alvo e identidade de marca.', icon: <PlaceholderIcon /> },
  { id: 'management', title: 'Gerenciamento de Contas Sociais', description: 'Gestão completa de perfis (Instagram, Facebook, LinkedIn, etc.), incluindo postagens, interações e monitoramento.', icon: <PlaceholderIcon /> },
  { id: 'content', title: 'Criação de Conteúdo Otimizado', description: 'Produção de conteúdo relevante e engajador (posts, stories, vídeos curtos) que ressoa com sua audiência.', icon: <PlaceholderIcon /> },
  { id: 'design', title: 'Design Gráfico para Mídias Sociais', description: 'Criação de visuais atraentes e profissionais para suas publicações, fortalecendo a identidade visual da sua marca.', icon: <PlaceholderIcon /> },
  { id: 'analytics', title: 'Análise de Métricas e Relatórios', description: 'Acompanhamento de desempenho, análise de resultados e geração de relatórios com insights para otimização contínua.', icon: <PlaceholderIcon /> },
  { id: 'consulting', title: 'Consultoria Estratégica em Marketing Digital', description: 'Sessões de consultoria para orientar suas ações de marketing, solucionar dúvidas e traçar novos caminhos.', icon: <PlaceholderIcon /> },
];

export const packagesList: PackageTier[] = [
  { 
    id: 'presence', 
    name: 'Pacote Presença Digital', 
    priceStartingFrom: 'R$ 800', 
    features: [
      'Gerenciamento de 1 plataforma social', 
      '8 posts por mês (design + legenda)', 
      'Relatório mensal básico',
      'Suporte via e-mail'
    ] 
  },
  { 
    id: 'growth', 
    name: 'Pacote Crescimento Estratégico', 
    priceStartingFrom: 'R$ 1500', 
    features: [
      'Gerenciamento de 2 plataformas sociais', 
      '12 posts por mês (design + legenda)', 
      '4 stories interativos por semana',
      'Configuração e monitoramento básico de campanhas',
      'Relatório mensal detalhado',
      'Suporte prioritário'
    ],
    highlight: true,
  },
  { 
    id: 'impact', 
    name: 'Pacote Impacto Total', 
    priceStartingFrom: 'R$ 2500', 
    features: [
      'Gerenciamento de até 3 plataformas sociais', 
      '20 posts por mês (design + legenda + variação)', 
      '8 stories interativos por semana',
      'Criação de 2 vídeos curtos (Reels/TikToks) por mês',
      'Consultoria estratégica quinzenal',
      'Relatório mensal completo com insights'
    ] 
  },
];

export const calculableServicesData: CalculableService[] = [
  { id: 'platform_management', name: 'Gerenciamento de Plataforma Social', price: 300, description: 'Gestão mensal por plataforma.' },
  { id: 'content_creation_post', name: 'Criação de Post Avulso', price: 50, description: 'Design e legenda por post.' },
  { id: 'content_creation_story', name: 'Criação de Story Avulso', price: 20, description: 'Design por story.' },
  { id: 'short_video', name: 'Criação de Vídeo Curto (Reel/TikTok)', price: 150, description: 'Edição básica por vídeo.' },
  { id: 'graphic_design_banner', name: 'Design de Capa/Banner para Perfil', price: 100, description: 'Arte por design de capa.' },
  { id: 'strategic_consulting', name: 'Consultoria Estratégica', price: 250, description: 'Sessão por hora de consultoria.' },
  { id: 'detailed_report', name: 'Relatório de Desempenho Detalhado Adicional', price: 200, description: 'Análise e relatório customizado por unidade.' },
];

export const faqData: FAQItem[] = [
  { id: 'q1', question: 'O que faz um Social Media Estrategista?', answer: 'Um Social Media Estrategista planeja, cria e gerencia a presença online de uma marca nas redes sociais. Isso inclui desenvolver estratégias de conteúdo, analisar métricas, interagir com a audiência e garantir que as ações estejam alinhadas aos objetivos de marketing e negócios da empresa.' },
  { id: 'q2', question: 'Por que preciso de um profissional para gerenciar minhas mídias sociais?', answer: 'Um profissional traz expertise, economiza seu tempo, cria conteúdo de qualidade e utiliza estratégias eficazes para aumentar o engajamento, visibilidade e, consequentemente, os resultados do seu negócio. Além disso, mantém a consistência e profissionalismo da sua marca online.' },
  { id: 'q3', question: 'Quanto tempo leva para ver resultados?', answer: 'Os resultados em mídias sociais variam dependendo de diversos fatores, como o nicho de mercado, investimento, consistência e a estratégia adotada. Geralmente, resultados significativos começam a aparecer entre 3 a 6 meses de trabalho contínuo e estratégico.' },
  { id: 'q4', question: 'Vocês oferecem pacotes personalizados além dos listados?', answer: 'Sim! Os pacotes são um ponto de partida. Entendo que cada negócio é único. Podemos conversar sobre suas necessidades específicas e montar um plano totalmente personalizado. A calculadora de orçamento também ajuda a ter uma ideia de valores para serviços avulsos.' },
  { id: 'q5', question: 'Como funciona o processo de contratação?', answer: 'O primeiro passo é entrar em contato para agendarmos uma conversa inicial. Nela, vamos entender seus objetivos e desafios. Em seguida, apresento uma proposta personalizada. Após a aprovação, iniciamos o onboarding e o planejamento estratégico para suas mídias sociais.' },
];

export const contactEmail = "Katricia.siqueira@gmail.com"; 
export const contactPhone = "+55 45 9830-9598"; 
export const WHATSAPP_LINK = "https://wa.me/554598309598";
export const socialLinks = {
  instagram: "https://instagram.com/eukahsiqueira/",
};
export const DEVELOPER_NAME = "Jorge Carvalho";
export const DEVELOPER_INSTAGRAM_LINK = "https://instagram.com/jorgecarvalho.pro/";
