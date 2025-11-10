import React, { useEffect, useMemo, useState } from "react";
import ProfileCard from "./components/ProfileCard";
import ProfileModal from "./components/ProfileModal";
import profilesData from "./data/profiles.json";

export default function App() {
  const [profiles, setProfiles] = useState([]);
  const [query, setQuery] = useState("");
  const [areaFilter, setAreaFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [techFilter, setTechFilter] = useState("");
  const [selected, setSelected] = useState(null);
  const [dark, setDark] = useState(() => !!localStorage.getItem("dark"));
  const [recommends, setRecommends] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("recommends") || "{}");
    } catch {
      return {};
    }
  });

  useEffect(() => {
    setProfiles(profilesData);
  }, []);
  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("dark", dark ? "1" : "");
  }, [dark]);
  useEffect(() => {
    localStorage.setItem("recommends", JSON.stringify(recommends));
  }, [recommends]);

  const areas = useMemo(
    () => [...new Set(profiles.map((p) => p.area).filter(Boolean))],
    [profiles]
  );
  const cities = useMemo(
    () => [...new Set(profiles.map((p) => p.localizacao).filter(Boolean))],
    [profiles]
  );

  const filtered = useMemo(
    () =>
      profiles.filter((p) => {
        const q = query.trim().toLowerCase();
        if (q) {
          const inName = p.nome.toLowerCase().includes(q);
          const inResumo = (p.resumo || "").toLowerCase().includes(q);
          if (!(inName || inResumo)) return false;
        }
        if (areaFilter && p.area !== areaFilter) return false;
        if (cityFilter && p.localizacao !== cityFilter) return false;
        if (
          techFilter &&
          !p.habilidadesTecnicas?.some((t) =>
            t.toLowerCase().includes(techFilter.toLowerCase())
          )
        )
          return false;
        return true;
      }),
    [profiles, query, areaFilter, cityFilter, techFilter]
  );

  const openProfile = (p) => setSelected(p);
  const closeProfile = () => setSelected(null);
  const handleRecommend = (id) => {
    setRecommends((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  return (
    <div className="min-h-screen p-6">
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">
            O Futuro do Trabalho Rede de Talentos
          </h1>
          <p className="text-sm text-slate-500">
            Conecte, recomende e conheça profissionais.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <input
              className="px-3 py-1 rounded border"
              placeholder="Buscar por nome ou resumo"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <select
              value={areaFilter}
              onChange={(e) => setAreaFilter(e.target.value)}
              className="px-2 py-1 rounded border"
            >
              <option value="">Todas as áreas</option>
              {areas.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="px-2 py-1 rounded border"
            >
              <option value="">Todas as cidades</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <input
              placeholder="Filtrar por tecnologia"
              value={techFilter}
              onChange={(e) => setTechFilter(e.target.value)}
              className="px-3 py-1 rounded border"
            />
          </div>
          <button
            onClick={() => setDark((d) => !d)}
            className="px-3 py-1 rounded border"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <div key={p.id}>
              <ProfileCard p={p} onOpen={openProfile} />
              <div className="mt-2 text-xs text-slate-400">
                Recomendações: {recommends[p.id] || 0}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm text-slate-500">
          Mostrando {filtered.length} de {profiles.length} perfis.
        </div>
      </main>

      {selected && (
        <ProfileModal
          profile={selected}
          onClose={closeProfile}
          onRecommend={(id) => {
            handleRecommend(id);
            alert("Profissional recomendado!");
          }}
        />
      )}
      <footer className="mt-16 border-t border-slate-200/30 dark:border-slate-700/50 py-6">
        <div className="max-w-6xl mx-auto text-center text-sm muted">
          © {new Date().getFullYear()} <strong>O Futuro do Trabalho</strong> —
          Desenvolvido por{" "}
          <a
            href="https://github.com/marciellejanguas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] font-medium hover:underline"
          >
            Majanguas
          </a>
        </div>
      </footer>
    </div>
  );
}
