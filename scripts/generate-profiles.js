const fs = require("fs");

const nomes = ["Ana Costa","Bruno Lima","Carla Souza","Diego Pereira","Eva Martins","Felipe Rocha","Gabriela Alves","Henrique Silva","Isabela Castro","João Fernandes","Karina Ramos","Lucas Moreira","Mariana Oliveira","Nathan Sousa","Olivia Lima","Paulo Barros","Quésia Nunes","Rafael Teixeira","Sofia Melo","Thiago Andrade","Ursula Pinto","Vitor Gomes","Wanda Costa","Xavier Lopes","Yara Dias","Zeca Freitas"];
const cargos = ["Engenheira de Software","Product Designer","Data Scientist","QA Analyst","Frontend Developer","Backend Developer","DevOps","UX Researcher","Analista de Dados","Mobile Developer"];
const cidades = ["Sãoo Paulo/SP","Rio de Janeiro/RJ","Belo Horizonte/MG","Porto Alegre/RS","Curitiba/PR","Recife/PE","Salvador/BA","Fortaleza/CE"];
const skills = ["React","Node.js","TypeScript","Python","SQL","Figma","Docker","AWS","Git","HTML","CSS","Jest","Express","Next.js","Tailwind"];
const resumoBase = "Profissional com experiência em projetos de tecnologia, foco em colaboraçãoo e entrega de valor.";

function rand(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function sample(arr, n){
  const copy = [...arr];
  const out = [];
  for(let i=0;i<n;i++){
    if(copy.length===0) break;
    const idx = Math.floor(Math.random()*copy.length);
    out.push(copy.splice(idx,1)[0]);
  }
  return out;
}

const profiles = [];
for(let i=1;i<=60;i++){
  const nome = `${rand(nomes)} ${i}`;
  const p = {
    id: i,
    nome,
    foto: `https://i.pravatar.cc/150?img=${(i%70)+1}`,
    cargo: rand(cargos),
    resumo: resumoBase,
    localizacao: rand(cidades),
    area: Math.random() > 0.5 ? "Desenvolvimento" : "Design",
    habilidadesTecnicas: sample(skills, Math.floor(Math.random()*4)+2),
    softSkills: sample(["Comunicação","Trabalho em equipe","Liderança","Criatividade","Organização"], 2),
    experiencias: [{ empresa: "Empresa Exemplo", cargo: rand(cargos), inicio: "2021-01", fim: "2023-06", descricao: "Atuação em projetos ágeis." }],
    formacao: [{ curso: "Bacharelado (ex.)", instituicao: "Universidade X", ano: 2019 }],
    projetos: [{ titulo: "Projeto Demo", link: "", descricao: "Projeto de exemplo." }],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Avançado" }],
    areaInteresses: ["IA","UX","Educação"]
  };
  profiles.push(p);
}

fs.writeFileSync("src/data/profiles.json", JSON.stringify(profiles, null, 2), "utf-8");
console.log("Gerados", profiles.length, "perfis em src/data/profiles.json");
