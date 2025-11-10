import React from "react";
export default function ProfileCard({ p, onOpen }) {
  return (
    <button
      onClick={() => onOpen(p)}
      className="card p-4 w-full text-left flex gap-4 items-start"
      aria-label={`Abrir perfil de ${p.nome}`}
    >
      <img
        src={p.foto}
        alt={p.nome}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold leading-tight">{p.nome}</h3>
            <p className="small muted">{p.cargo}</p>
          </div>
          <div className="text-xs muted">{p.localizacao}</div>
        </div>
        <div className="mt-2 small muted line-clamp-3">{p.resumo}</div>
        <div className="mt-3 flex flex-wrap gap-2">
          {(p.habilidadesTecnicas || []).slice(0,4).map((h, i) => (
            <span
              key={i}
              className="badge"
              style={{ background: i % 2 === 0 ? "rgba(99,102,241,0.09)" : "rgba(99,102,241,0.04)" }}
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
