const fs = require("fs");
const path = require("path");

const file = path.resolve(__dirname, "../src/data/profiles.json");

if (!fs.existsSync(file)) {
  console.error(" O arquivo src/data/profiles.json não foi encontrado.");
  process.exit(1);
}

let profiles = JSON.parse(fs.readFileSync(file, "utf-8"));

profiles = profiles.map((p) => ({
  id: p.id ?? Math.floor(Math.random() * 10000),
  nome: p.nome ?? "Nome não informado",
  foto: p.foto ?? "https://i.pravatar.cc/150",
  cargo: p.cargo ?? "Profissional",
  resumo: p.resumo ?? "Profissional com experiência em sua área de atuação.",
  localizacao: p.localizacao ?? "Cidade/Estado",
  area: p.area ?? "Desenvolvimento",
  habilidadesTecnicas: p.habilidadesTecnicas ?? ["JavaScript", "HTML", "CSS"],

  softSkills: p.softSkills ?? ["Comunicação", "Trabalho em equipe"],
  experiencias: p.experiencias ?? [
    {
      empresa: "Empresa Exemplo",
      cargo: "Analista",
      inicio: "2020-01",
      fim: "2023-12",
      descricao: "Atuação em projetos de tecnologia e inovação.",
    },
  ],
  formacao: p.formacao ?? [
    {
      curso: "Sistemas de Informação",
      instituicao: "FIAP",
      ano: 2021,
    },
  ],
  projetos: p.projetos ?? [
    {
      titulo: "Projeto Padrão",
      link: "https://example.com",
      descricao: "Projeto acadêmico para portfólio.",
    },
  ],
  certificacoes: p.certificacoes ?? ["Scrum Fundamentals Certified"],
  idiomas: p.idiomas ?? [{ idioma: "Inglês", nivel: "Intermediário" }],
  areaInteresses: p.areaInteresses ?? ["Educação", "Tecnologia"],
}));

fs.writeFileSync(file, JSON.stringify(profiles, null, 2), "utf-8");
console.log(`${profiles.length} perfis ajustados com sucesso em src/data/profiles.json`);