import { slugify } from "./slug"

export type Course = {
  name: string
  fullName?: string

  type: "etim" | "standalone"

  description: string
  definition: string

  jobMarket?: string
  prequalification?: string
  areas?: string
  professionRegister?: string
  matrix?: Array<{
    name: string
    url: string
  }>
}

const courses_data: Course[] = [
  {
    name: "Informática para Internet",
    fullName:
      "Ensino Médio Com Habilitação Profissional De Técnico Em Informática Para Internet",
    type: "etim",
    description:
      "Aprenda tudo sobre o mundo da tecnologia e saia preparado para o mercado de trabalho.",
    definition:
      "Nesta modalidade de ensino, baseada na Lei nº 13.415/17, o aluno cursará o Ensino Médio estruturado em conjunto com a formação de Técnico em Informática Para Internet, numa jornada de até 30 aulas semanais (até 6 aulas diárias), em cada uma das 3 séries.\n\nAo final do curso, o aluno terá concluído o Ensino Médio e obterá, também, o diploma de Técnico em Informática Para Internet, com validade nacional, de acordo com o perfil profissional a seguir: O TÉCNICO EM INFORMÁTICA PARA INTERNET é o profissional que desenvolve e realiza manutenção em websites e portais na Internet e Intranet. Utiliza ferramentas de desenvolvimento de projetos para construir soluções que auxiliam o processo de criação de interfaces e aplicativos empregados no comércio e marketing eletrônicos.",
    jobMarket:
      "Instituições públicas, privadas e do terceiro setor que demandem programação de computadores para Internet.",
    areas: "https://google.com",
    matrix: [{ name: "Matriz Curricular", url: "https://google.com" }],
  },
  {
    name: "Marketing",
    fullName: "Ensino Médio Com Habilitação Técnica Profissional Em Marketing",
    type: "etim",
    description:
      "Aprenda as últimas tendências de marketing, gatilhos mentais, publicidade e propaganda.",
    definition:
      "Nesta modalidade de ensino, baseada na Lei nº 13.415/17, o aluno cursará o Ensino Médio estruturado em conjunto com a formação de Técnico em Marketing, numa jornada de até 30 aulas semanais (até 6 aulas diárias), em cada uma das 3 séries. Ao final do curso, o aluno terá concluído o Ensino Médio e obterá, também, o diploma de Técnico em Marketing, com validade nacional, de acordo com o perfil profissional a seguir: O TÉCNICO EM MARKETING é o profissional que colabora na elaboração do plano de marketing da empresa, de acordo com seu ramo ou porte, tendo a competência aliada ao domínio técnico e no planejamento e implementação de ações de vendas e ações de mercado.\n\nExecuta tarefa de análise das vendas, preços e produtos. Operacionaliza as políticas de comunicação da empresa: fidelização de clientes, relação com fornecedores ou outras entidades. Operacionaliza políticas de apresentação dos produtos no ponto de venda. Executa o controle, estatísticas e operações de telemarketing. Participa na elaboração e na realização de estudos de mercado, interpreta e aplica a legislação da área.",
    jobMarket:
      "Instituições públicas; privadas e do terceiro setor; comércio; empresas de consultoria e de forma autônoma.",
    matrix: [{ name: "Matriz Curricular", url: "https://google.com" }],
  },
  {
    name: "Comunicação Visual",
    fullName:
      "Ensino Médio Com Habilitiação Técnica Profissional Em Comunicação Visual",
    type: "etim",
    description: "Se comunique visualmente.",
    definition:
      "Nesta modalidade de ensino, baseada na Lei nº 13.415/17, o aluno cursará o Ensino Médio estruturado em conjunto com a formação de Técnico em Comunicação Visual, numa jornada de até 30 aulas semanais (até 6 aulas diárias), em cada uma das 3 séries.\n\nAo final do curso, o aluno terá concluído o Ensino Médio e obterá, também, o diploma de Técnico em Comunicação Visual, com validade nacional, de acordo com o perfil profissional a seguir: O TÉCNICO EM COMUNICAÇÃO VISUAL é o profissional que projeta e executa projetos de comunicação visual de diferentes gêneros e formatos gráficos para peças publicitárias, como livros, portais, painéis, fôlderes, jornais. Desenvolve e emprega elementos criativos e estéticos de comunicação visual gráfica. Cria ilustrações, aplica tipografias, desenvolve elementos de identidade visual de peças. Controla, organiza e armazena materiais físicos e digitais da produção gráfica.",
    prequalification:
      "Possuir o certificado de conclusão do Ensino Fundamental nas modalidades: regular ou Educação de Jovens e Adultos – EJA ou Exame Nacional para Certificação de Competências de Jovens e Adultos – ENCCEJA.",
    matrix: [
      { name: "Design Gráfico - Matriz", url: "https://google.com" },
      { name: "Comunicação Visual - Matriz", url: "https://google.com" },
    ],
  },
  {
    name: "Jogos Digitais",
    fullName:
      "Ensino Médio Com Habilitação Técnica Profissional Em Programação De Jogos Digitais",
    type: "etim",
    description:
      "Aprenda a utilizar de ferramentas como Unity, GameMaker para criar jogos 2D e 3D.",
    definition:
      "Nesta modalidade de ensino, baseada na Lei nº 13.415/17, o aluno cursará o Ensino Médio estruturado em conjunto com a formação de Técnico em Programação de Jogos Digitais, numa jornada de até 30 aulas semanais (até 6 aulas diárias), em cada uma das 3 séries. Ao final do curso, o aluno terá concluído o Ensino Médio e obterá, também, o diploma de Técnico em Programação de Jogos Digitais, com validade nacional, de acordo com o perfil profissional a seguir: É o profissional que compõe equipes multidisciplinares na construção dos jogos digitais. Projeta, desenvolve e implementa jogos digitais. Codifica programas, desenvolve e editora elementos sonoros e gráficos em duas e três dimensões; gerencia e presta suporte a jogos digitais. Planeja e desenvolve ações de marketing e divulgação. Seleciona recursos de trabalho, linguagens de programação, ferramentas e metodologias para o desenvolvimento de jogos digitais em diversas mídias, tais como: consoles, microcomputadores, dispositivos móveis e Internet.",
    prequalification:
      "Possuir o certificado de conclusão do Ensino Fundamental nas modalidades: regular ou Educação de Jovens e Adultos – EJA ou Exame Nacional para Certificação de Competências de Jovens e Adultos – ENCCEJA.",
    matrix: [{ name: "Matriz Curricular", url: "https://google.com" }],
  },
  {
    name: "Técnico em Produção de Áudio e Vídeo",
    type: "standalone",
    description:
      "O técnico em produção de áudio e vídeo capta imagem e som, prepara material audiovisual e colabora na utilização de novas tecnologias. Ele também elabora fichas técnicas e mapas de programação, além de ser responsável pela distribuição e veiculação dos produtos de comunicação.",
    definition:
      "O TÉCNICO EM PRODUÇÃO DE ÁUDIO E VÍDEO é o profissional que colabora na captação de imagem e som, na ambientação, operação de equipamentos, por intermédio de recursos, linguagem e tecnologia dentro dos padrões técnicos dos diferentes meios de comunicação.\n\nColabora na investigação e utilização de novas tecnologias relacionadas com linguagem, tratamento acústico e de imagem, luminosidade, animação. Prepara material audiovisual. Elabora fichas técnicas, mapas de programação, distribuição, veiculação dos produtos e serviços de comunicação.",
    jobMarket:
      "O mercado de trabalho do TÉCNICO EM PRODUÇÃO DE ÁUDIO E VÍDEO é amplo, abrange diversas áreas da comunicação audiovisual, como cinema digital, TV interativa, vídeo e animação.\n\nAtua na concepção de roteiros, desenhos de produção, edição e efeitos especiais em empresas de comunicação – rádio e televisão – novas mídias e espaços alternativos de interação social, lazer e cultura. Poderá desenvolver trabalhos em provedores de Internet, produtoras independentes, estúdios de gravação, escritórios de criação publicitária e de comunicação, empresas de radiodifusão e telecomunicações, além de laboratórios de desenvolvimento e pesquisa em comunicação audiovisual.",
    professionRegister:
      "O aluno formado no curso Técnico em Produção de Áudio e Vídeo recebe um REGISTRO PROFISSIONAL que o habilita a trabalhar em diversas áreas.",
    areas: "http://google.com",
    matrix: [{ name: "Matriz Curricular", url: "https://google.com" }],
  },
  {
    name: "Técnico Em Multimídia",
    type: "standalone",
    description:
      "O técnico em multimídia trabalha com comunicação visual em meios eletrônicos e prepara arquivos digitais para sistemas de comunicação. Ele aplica técnicas de tratamento de imagens e atualiza sites, portais e páginas da web. Além disso, elabora textos técnicos de acordo com os fundamentos da área profissional.",
    definition:
      "O TÉCNICO EM MULTIMÍDIA é o profissional que desenvolve comunicação visual em meios eletrônicos, organiza e prepara arquivos digitais que podem compor telas para sistemas de comunicação para diferentes finalidades. Aplica técnicas de tratamento de imagens estáticas e em movimento que complementam estruturas de navegação em mídias digitais. Executa atualização de sites, portais e páginas da web. Elabora textos técnicos de acordo com os fundamentos e com a terminologia da área profissional.",
    jobMarket:
      "O mercado de trabalho do TÉCNICO EM MULTIMÍDIA é amplo, abrange diversas áreas da comunicação audiovisual, como cinema digital, TV interativa, vídeo e animação. Atua na concepção de roteiros, desenhos de produção, edição e efeitos especiais em empresas de comunicação – rádio e televisão – novas mídias e espaços alternativos de interação social, lazer e cultura. Poderá desenvolver trabalhos em portais de Internet, produtoras de multimídia, escritórios de criação publicitária e de comunicação, editoras de jornais e revistas on-line.",
    professionRegister:
      "O aluno formado no curso Técnico em Multimídia recebe um REGISTRO PROFISSIONAL que o habilita a trabalhar em diversas áreas.",
    areas: "http://google.com",
    matrix: [{ name: "Matriz Curricular", url: "http://youtube.com" }],
  },
]

export const courses = courses_data.map((course) => ({
  ...course,
  slug: slugify(course.name),
}))
