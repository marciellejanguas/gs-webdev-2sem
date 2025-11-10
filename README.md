# GS - Front-End Project (O Futuro do Trabalho)

# Resumo do projeto

O projeto **O Futuro do Trabalho — Rede de Talentos** tem como objetivo criar uma aplicação web interativa que conecta e recomenda profissionais de diversas áreas, simulando uma pequena rede de perfis inspirada em plataformas como LinkedIn e Glassdoor.

A aplicação foi desenvolvida utilizando **React** com **Vite** para o ambiente de desenvolvimento, e **TailwindCSS** para estilização moderna e responsiva.  
A proposta é integrar conceitos de **componentização**, **hooks (useState, useEffect, useMemo)**, **armazenamento local (localStorage)** e **filtragem dinâmica de dados**.

### Objetivo Pedagógico
O projeto demonstra a capacidade de:
- Montar uma aplicação React modular e escalável;
- Utilizar estados e efeitos para controlar a interface;
- Aplicar persistência local sem backend (recomendações e tema);
- Utilizar dados dinâmicos (gerados via script Node);
- Desenvolver UI responsiva e interativa com TailwindCSS;
- Gerar, compilar e disponibilizar uma versão de produção via Vite.

### Estrutura Funcional
A aplicação exibe uma **lista de perfis profissionais**, cada um com:
- nome, cargo, localização, resumo e habilidades técnicas;  
- botão “Ver mais” que abre um **modal** com detalhes completos;  
- botão “Recomendar” que incrementa um contador de recomendações persistente.  

O usuário pode:
- Pesquisar por nome ou resumo;  
- Filtrar por área, cidade e tecnologia;  
- Alternar entre **tema claro e escuro**;  
- Visualizar recomendações salvas mesmo após atualizar a página.

# Link do deploy

https://gs-webdev-2sem.vercel.app/

# Link do repositório

https://github.com/marciellejanguas/gs-webdev-2sem

# Nomes e Rms

Marcielle Janguas Pina Carvalho - RM: 561505

# Instalação do projeto, passo-a-passo.

# Tecnologias Utilizadas

- React + Vite
- TailwindCSS
- Node.js (v18+)
- LocalStorage API (persistência de recomendações e tema)
- JavaScript
- HTML5 / CSS

# Funcionalidades

- Visualização de perfis (cards) com informações básicas
- Filtros: por nome, área, cidade e tecnologia
- Modal com informações completas do profissional
- Recomendações persistentes (localStorage)
- Alternância de tema Dark / Light
- Script para gerar 60 perfis de exemplo (scripts/generate-profiles.js)
- Layout responsivo e moderno (hover, sombras, transições)

# Estrutura do Projeto
gs-webdev-2sem/
├─ public/
├─ scripts/
│  └─ generate-profiles.js
├─ src/
│  ├─ components/
│  │  ├─ ProfileCard.jsx
│  │  └─ ProfileModal.jsx
│  ├─ data/
│  │  └─ profiles.json
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ index.html
├─ vite.config.mjs
├─ package.json
├─ tailwind.config.cjs
├─ postcss.config.cjs
└─ README.md

# Pré-requisitos

Node.js v18+
npm

# Verificar versões:

node -v
npm -v
git --version

# Como obter o projeto

git clone https://github.com/marciellejanguas/gs-webdev-2sem
cd gs-webdev-2sem

# Instalar dependências

No diretório do projeto:

npm install

# Gerar dados de teste (opcional)

Gera 60 perfis falsos em src/data/profiles.json:
node scripts/generate-profiles.js
saída esperada: Gerados 60 perfis em src/data/profiles.json

# Executar em modo desenvolvimento

npm run dev