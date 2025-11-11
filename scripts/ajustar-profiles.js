const fs = require("fs");
const path = require("path");

const file = path.resolve(__dirname, "../src/data/profiles.json");

if (!fs.existsSync(file)) {
  console.error(" O arquivo src/data/profiles.json não foi encontrado.");
  process.exit(1);
}

let profiles = JSON.parse(fs.readFileSync(file, "utf-8"));

function ensure(value, fallback) {
  if (Array.isArray(value)) return value.length > 0 ? value : fallback;
  if (typeof value === "string") return value.trim() !== "" ? value : fallback;
  return value ?? fallback;
}

profiles = profiles.map((p) => ({
  id: ensure(p.id ?? Math.floor(Math.random() * 10000)),
  nome: ensure(p.nome ?? "Nome não informado"),
  foto: ensure(p.foto ?? "https://i.pravatar.cc/150"),
  cargo: ensure(p.cargo ?? "Profissional"),
  resumo: ensure(p.resumo ?? "Profissional com experiência em sua área de atuação."),
  localizacao: ensure(p.localizacao ?? "Cidade/Estado"),
  area: ensure(p.area ?? "Desenvolvimento"),
  habilidadesTecnicas: ensure(p.habilidadesTecnicas ?? ["JavaScript", "HTML", "CSS"]),

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
  formacao: ensure(p.formacao ?? [
    {
      curso: "Sistemas de Informação",
      instituicao: "FIAP",
      ano: 2021,
    },
  ]),
  projetos: ensure(p.projetos ?? [
    {
      titulo: "Projeto Padrão",
      link: "https://example.com",
      descricao: "Projeto acadêmico para portfólio.",
    },
  ]),
  certificacoes: ensure(p.certificacoes ?? ["Scrum Fundamentals Certified"]),
  idiomas: ensure(p.idiomas ?? [{ idioma: "Inglês", nivel: "Intermediário" }]),
  areaInteresses: ensure(p.areaInteresses ?? ["Educação", "Tecnologia"]),
}));

fs.writeFileSync(file, JSON.stringify(profiles, null, 2), "utf-8");
console.log(`${profiles.length} perfis ajustados com sucesso em src/data/profiles.json`);