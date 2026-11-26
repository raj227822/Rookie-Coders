import React from 'react'
export default function Field({label, value, onChange, suffix, error, min=0, step='any', type='number', options, hint}) {
  return <label className="block min-w-0">
    <span className="mb-1.5 block text-sm font-medium text-slate-700">{label}</span>
    {options ? <select className="field" value={value} onChange={e=>onChange(e.target.value)}>{options.map(o=><option key={o} value={o}>{o}</option>)}</select> :
      <div className="relative"><input className={`field ${suffix?'pr-16':''} ${error?'border-red-400 focus:ring-red-100':''}`} type={type} min={min} step={step} value={value} onChange={e=>onChange(type==='number' ? e.target.value : e.target.value)} />{suffix && <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">{suffix}</span>}</div>}
    {hint && <span className="mt-1 block text-xs text-slate-500">{hint}</span>}
    {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
  </label>
}
