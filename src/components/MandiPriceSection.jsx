import React from 'react'
import {Info,MapPin,BarChart3} from 'lucide-react'
export default function MandiPriceSection({crop,currentPrice,expectedPrice}) {
  const rows=[{label:'Current entered price',price:Number(currentPrice),tag:'Your input'},{label:'Expected future price',price:Number(expectedPrice),tag:'Your estimate'}]
  return <section className="panel p-5">
    <div className="flex items-center justify-between gap-3"><div><h3 className="font-semibold text-slate-900">Mandi price intelligence</h3><p className="mt-1 text-xs text-slate-500">Illustrative workspace · no live mandi connection</p></div><BarChart3 className="text-emerald-700" size={20}/></div>
    <div className="mt-4 flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-sm text-slate-600"><MapPin size={16}/>Mandi location: <strong className="text-slate-800">Not selected</strong></div>
    <div className="mt-4 grid gap-3 sm:grid-cols-2">{rows.map(r=><div key={r.label} className="rounded-xl border border-slate-100 p-4"><div className="flex justify-between gap-2"><span className="text-sm text-slate-500">{r.label}</span><span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-800">{r.tag}</span></div><p className="mt-2 text-xl font-bold text-slate-900">₹{r.price.toLocaleString('en-IN')}<span className="text-xs font-normal text-slate-500"> / quintal</span></p></div>)}</div>
    <div className="mt-4 flex gap-2 rounded-xl border border-amber-100 bg-amber-50/70 p-3 text-xs leading-5 text-amber-900"><Info size={15} className="mt-0.5 shrink-0"/>Sample/entered values only. Historical trends, verified live prices and Agmarknet/eNAM integration are not connected in this prototype.</div>
  </section>
}
