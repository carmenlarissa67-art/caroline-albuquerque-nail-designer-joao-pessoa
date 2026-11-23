// ==============================================================================
// CONFIGURAÇÃO CENTRAL DA CLIENTE: CAROL ALBUQUERQUE NAIL DESIGNER (JOÃO PESSOA)
// Toda a personalização do site fica neste arquivo.
// Fontes: perfil @carolalbuquerquenails_ (bio, post "Minha jornada" e fotos de
// trabalhos) e ficha do Google (endereço em Mumbaba, horário e telefone).
// ATENÇÃO: os valores abaixo são uma ESTIMATIVA para a demo. O perfil dela não
// mostra preços. Trocar pelos valores reais da Carol antes da entrega.
// ==============================================================================

export const studioConfig = {
  name: "Carol Albuquerque",
  ownerName: "Carol",
  nameSuffix: "Nail Designer",
  fullName: "Carol Albuquerque Nail Designer",
  tagline: "Alongamento em gel, banho de gel e esmaltação em gel",
  subtitle:
    "23 anos fazendo unhas, 5 deles só com gel. Escolha o serviço, veja o valor e reserve seu horário em poucos toques, sem esperar resposta no direct.",
  city: "João Pessoa, PB",
  neighborhood: "Mumbaba",
  addressShort: "Residencial Canaã 1, Mumbaba",
  address: "R. Panamá - Mumbaba, João Pessoa - PB, 58083-608",
  addressNote: "Residencial Canaã 1, perto do Bairro das Indústrias",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Caroline+Albuquerque+Nail+Designer,+R.+Panamá,+Mumbaba,+João+Pessoa+-+PB",
  whatsappNumber: "5515981085930", // Apenas dígitos com DDI e DDD
  whatsappDisplay: "(15) 98108-5930",
  instagramHandle: "@carolalbuquerquenails_",
  instagramUrl: "https://www.instagram.com/carolalbuquerquenails_",
  // Link do Calendly. Na demo usamos a agenda de teste; na entrega vai o da Carol.
  calendlyUrl: "https://calendly.com/carbosalarissa/30min",
  workingHours: [
    { days: "Segunda a Sexta", hours: "9h às 20h" },
    { days: "Sábado", hours: "10h às 14h30" },
    { days: "Domingo", hours: "Fechado" },
  ],
  workingHoursShort: "Seg a sex 9h às 20h, sáb até 14h30",
  // Dias sem atendimento (0 = domingo ... 6 = sábado). Vazio = abre todos os dias.
  closedWeekdays: [0],
  periods: [
    { id: "Manhã (9h às 13h)", label: "Manhã", sub: "9h às 13h" },
    { id: "Tarde (13h às 20h)", label: "Tarde", sub: "13h às 20h, exceto sábado" },
  ],
  paymentNote: "Os valores podem variar conforme o comprimento e a decoração. A Carol confirma tudo pelo WhatsApp.",
  // Avisos que a cliente confirma antes de agendar
  bookingNotes: [
    "Chegue 5 minutinhos antes do seu horário.",
    "Se precisar desmarcar, avise com antecedência para liberar a vaga.",
    "Nail art e efeitos têm valor à parte.",
  ],
  decoratedNote: "Quer francesinha colorida, olho de gato ou um detalhe à mão? Escreva nas observações ou mande a foto da inspiração no WhatsApp.",

  // Sobre a profissional
  about: {
    photo: "/images/carol.webp",
    title: "23 anos de unhas, 5 só com gel",
    text: "A Carol se tornou mãe aos 16 anos e foi nas unhas que encontrou o seu caminho. Sem dinheiro para cursos caros, aprendeu nos gratuitos e treinou nas amigas e na família até virar profissional. Hoje é Master Elite Advanced, especializada em alongamento, e atende com hora marcada no Residencial Canaã 1, em Mumbaba. A missão dela continua a mesma: você sair do atendimento se sentindo mais bonita.",
    highlights: ["Alongamento em gel", "Banho de gel", "Esmaltação em gel", "Master Elite Advanced"],
    coursesText: "",
  },

  // Categorias de serviço (cada uma com suas opções e valores)
  categories: [
    {
      id: "alongamento",
      title: "Alongamento em Gel",
      short: "Alongamento",
      description: "A especialidade da Carol. Unha comprida, fina e resistente, no formato amendoado, quadrado ou bailarina.",
      image: "/images/nude-glitter-amendoada.webp",
      duration: "2h a 2h30",
      maintenance: "Manutenção indicada a cada 20 a 25 dias",
      notes: ["Inclui cutilagem", "Francesinha sem custo extra"],
      items: [
        { id: "along-gel", title: "Alongamento em gel", price: 140, popular: true },
        { id: "manut", title: "Manutenção do alongamento", price: 90 },
        { id: "reposicao", title: "Reposição de unha (por unha)", price: 10 },
      ],
    },
    {
      id: "gel",
      title: "Banho de Gel",
      short: "Banho de gel",
      description: "Gel sobre a unha natural: mais força para quem quer deixar crescer, com brilho que dura semanas.",
      image: "/images/vermelho-classico.webp",
      duration: "1h30",
      maintenance: "Manutenção a cada 20 dias",
      notes: ["Inclui cutilagem", "Na unha natural"],
      items: [
        { id: "banho-gel", title: "Banho de gel", price: 80, popular: true },
        { id: "manut-banho", title: "Manutenção do banho de gel", price: 65 },
      ],
    },
    {
      id: "esmaltacao",
      title: "Esmaltação em Gel",
      short: "Esmaltação",
      description: "Cor de gel na unha natural, sem descascar. Nude, vermelho, lilás, preto e o que mais você quiser.",
      image: "/images/lilas-candy.webp",
      duration: "1h",
      maintenance: "",
      notes: ["Inclui cutilagem"],
      items: [
        { id: "gel-mao", title: "Esmaltação em gel nas mãos", price: 50, popular: true },
        { id: "gel-pe", title: "Esmaltação em gel nos pés", price: 50 },
        { id: "olho-gato", title: "Efeito olho de gato", price: 15 },
      ],
    },
    {
      id: "natural",
      title: "Manicure e Pedicure",
      short: "Tradicional",
      description: "Foi onde tudo começou. Cutilagem caprichada e esmaltação comum para o dia a dia.",
      image: "/images/nude-rose-quadrada.webp",
      duration: "1h",
      maintenance: "",
      notes: ["Esmaltação comum inclusa"],
      items: [
        { id: "mao", title: "Manicure", price: 25 },
        { id: "pe", title: "Pedicure", price: 30 },
        { id: "pe-mao", title: "Manicure e pedicure", price: 50, popular: true },
      ],
    },
  ],

  // Adicionais que podem ser somados no agendamento
  addons: [
    { id: "olho-gato-add", name: "Efeito olho de gato", price: 15 },
    { id: "francesinha-cor", name: "Francesinha colorida ou com glitter", price: 10 },
    { id: "nail-art", name: "Nail art à mão (por unha)", price: 5 },
    { id: "remocao", name: "Remoção de gel ou alongamento", price: 30 },
  ],

  // Informações importantes
  policies: [
    {
      title: "Pontualidade",
      description: "Chegue 5 minutinhos antes. Assim o seu horário rende e ninguém fica esperando.",
    },
    {
      title: "Desmarcar",
      description: "Imprevisto acontece. Avise com antecedência para a vaga ir para outra cliente.",
    },
    {
      title: "Sábado",
      description: "No sábado o atendimento vai das 10h às 14h30. Os horários acabam rápido, reserve cedo.",
    },
    {
      title: "Remoção",
      description: "Vem com gel ou alongamento de outro lugar? Avise no agendamento para reservar o tempo da remoção.",
    },
  ],

  // Galeria de fotos de resultados (fotos reais do Instagram)
  gallery: [
    { url: "/images/vermelho-classico.webp", tag: "Vermelho clássico em gel" },
    { url: "/images/nude-glitter-amendoada.webp", tag: "Nude com brilho, amendoada" },
    { url: "/images/francesinha-azul-olho-de-gato.webp", tag: "Francesinha azul com olho de gato" },
    { url: "/images/preto-francesinha-glitter.webp", tag: "Preto com francesinha e glitter" },
    { url: "/images/nude-rose-quadrada.webp", tag: "Nude rosé, quadrada" },
    { url: "/images/lilas-candy.webp", tag: "Lilás suave" },
  ],
};

// Lista "achatada" de todos os serviços, usada no agendamento
export const allServices = studioConfig.categories.flatMap((cat) =>
  cat.items.map((item) => ({
    ...item,
    category: cat.title,
    categoryId: cat.id,
    duration: item.duration || cat.duration,
  }))
);

export const formatPrice = (value) =>
  value === null || value === undefined
    ? "Sob consulta"
    : `R$ ${Number(value).toFixed(2).replace(".", ",")}`;
