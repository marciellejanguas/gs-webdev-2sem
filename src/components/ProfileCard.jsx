import React from "react";
export default function ProfileCard({ p, onOpen }) {
return (
<button onClick={() => onOpen(p)} className="group p-4 rounded-2xl shadow-md bg-[var(--card)] text-left w-full flex gap-4 items-center hover:shadow-xl transition">
<img src={p.foto} alt={p.nome} className="w-16 h-16 rounded-full object-cover" />
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h3 className="font-semibold">{p.nome}</h3>
<p className="text-sm text-slate-500 group-hover:text-slate-700">{p.cargo}</p>
</div>
<div className="text-xs text-slate-400">{p.localizacao}</div>
</div>
<div className="mt-2 text-sm text-slate-600">{p.resumo}</div>
<div className="mt-3 flex flex-wrap gap-2">
{p.habilidadesTecnicas?.slice(0,3).map((h,i)=> (
<span key={i} className="text-xs px-2 py-1 bg-slate-100 rounded">{h}</span>
))}
</div>
</div>
</button>
);
}
