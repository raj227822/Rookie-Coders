import React from 'react'
export default function StatCard({label,value,sub,icon:Icon,tone='green'}) {
  const tones = {green:'bg-emerald-50 text-emerald-700',yellow:'bg-amber-50 text-amber-700',blue:'bg-sky-50 text-sky-700'}
  return <div className="panel p-4 sm:p-5"><div className="flex items-start justify-between gap-3"><div><p className="text-sm text-slate-500">{label}</p><p className="mt-2 text-2xl font-bold tracking-tight text-slate-900">{value}</p>{sub&&<p className="mt-1 text-xs text-slate-500">{sub}</p>}</div>{Icon&&<div className={`rounded-xl p-2.5 ${tones[tone]}`}><Icon size={19}/></div>}</div></div>
}
