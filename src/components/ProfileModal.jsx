import React, { useState } from "react";

export default function ProfileModal({ profile, onClose, onRecommend }) {
  const [msg, setMsg] = useState("");
  if (!profile) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-[var(--card)] rounded-2xl w-full max-w-3xl p-6 shadow-lg text-[var(--text)]">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <img
              src={profile.foto}
              className="w-20 h-20 rounded-full"
              alt={profile.nome}
            />
            <div>
              <h2 className="text-2xl font-semibold">{profile.nome}</h2>
              <p className="text-sm text-slate-500">
                {profile.cargo} • {profile.localizacao}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                onRecommend(profile.id);
              }}
              className="px-3 py-1 rounded bg-emerald-500 text-white"
            >
              Recomendar
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1 rounded bg-slate-200"
            >
              Fechar
            </button>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Resumo</h3>
            <p className="text-sm mt-1">{profile.resumo}</p>

            <h3 className="font-semibold mt-3">Habilidades Técnicas</h3>
            <ul className="list-disc ml-5 text-sm mt-1">
              {profile.habilidadesTecnicas?.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            <h3 className="font-semibold mt-3">Soft Skills</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {profile.softSkills?.map((s, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-slate-100 rounded"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Formação</h3>
            <ul className="text-sm ml-5 list-disc mt-1">
              {profile.formacao?.map((f, i) => (
                <li key={i}>
                  {f.curso} — {f.instituicao} ({f.ano})
                </li>
              ))}
            </ul>

            <h3 className="font-semibold mt-3">Experiências</h3>
            <div className="text-sm mt-1">
              {profile.experiencias?.map((e, i) => (
                <div key={i} className="mb-2">
                  <div className="font-medium">
                    {e.cargo} — {e.empresa}
                  </div>
                  <div className="text-xs text-slate-500">
                    {e.inicio} → {e.fim}
                  </div>
                  <div className="text-sm">{e.descricao}</div>
                </div>
              ))}
            </div>

            <h3 className="font-semibold mt-3">Enviar mensagem</h3>
            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="w-full p-2 rounded border mt-1 bg-transparent"
              rows={3}
              placeholder="Escreva uma mensagem..."
            />
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => {
                  alert("Mensagem enviada (simulada): " + msg);
                  setMsg("");
                }}
                className="px-3 py-1 rounded bg-blue-600 text-white"
              >
                Enviar mensagem
              </button>
              <button
                onClick={() => setMsg("")}
                className="px-3 py-1 rounded bg-slate-200"
              >
                Limpar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}