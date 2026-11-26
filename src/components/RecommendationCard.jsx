import React from 'react'
import {Sparkles,ShieldAlert,TrendingUp,TrendingDown} from 'lucide-react'
const money=n=>`₹${Math.round(n).toLocaleString('en-IN')}`
export default function RecommendationCard({result,crop}) {
  const {best,sellNow,additionalProfit}=result
  const store = best.week>0 && additionalProfit>0.005
  const nearlyEqual = Math.abs(additionalProfit) <= Math.max(100,Math.abs(sellNow.netProfit)*0.01)
  const lost = best.week ? best.moistureLossQty+best.spoilageLossQty : 0
  return <div className="overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white shadow-sm">
    <div className="flex items-center gap-2 border-b border-emerald-100 px-5 py-4"><div className="rounded-lg bg-emerald-700 p-2 text-white"><Sparkles size={18}/></div><div><p className="font-semibold text-emerald-950">Smart selling recommendation</p><p className="text-xs text-emerald-800">Rule-based estimate · {crop}</p></div></div>
    <div className="p-5">
      <p className="text-sm font-medium text-slate-600">Recommended action</p>
      <h2 className="mt-1 text-2xl font-bold text-emerald-950">{store?`Store and sell in Week ${best.week}`:'Sell your crop now'}</h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{store
        ? `Using the entered assumptions, selling in week ${best.week} gives an estimated ${money(additionalProfit)} more net profit than selling today. The model accounts for weight loss, spoilage, storage and selling expenses.`
        : `With the entered assumptions, storing does not improve the estimated net profit. Selling now is the better financial result in this model.`}
        {nearlyEqual?' The difference is small, so liquidity, storage quality and market uncertainty should also guide your decision.':''}</p>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl bg-white/80 p-3"><p className="text-xs text-slate-500">Estimated net profit</p><p className="mt-1 font-bold text-slate-900">{money(store?best.netProfit:sellNow.netProfit)}</p></div>
        <div className="rounded-xl bg-white/80 p-3"><p className="text-xs text-slate-500">Expected price</p><p className="mt-1 font-bold text-slate-900">{money(store?best.price:sellNow.price)}<span className="text-xs font-normal">/qtl</span></p></div>
        <div className="rounded-xl bg-white/80 p-3"><p className="text-xs text-slate-500">Saleable quantity</p><p className="mt-1 font-bold text-slate-900">{(store?best.quantity:sellNow.quantity).toFixed(2)} qtl</p></div>
        <div className="rounded-xl bg-white/80 p-3"><p className="text-xs text-slate-500">Difference vs today</p><p className={`mt-1 font-bold ${additionalProfit>=0?'text-emerald-700':'text-red-600'}`}>{additionalProfit>=0?'+':''}{money(additionalProfit)}</p></div>
      </div>
      {store&&<p className="mt-3 text-xs text-slate-600">Estimated total weight reduction by the recommended week: {lost.toFixed(2)} quintals (moisture {best.moistureLossQty.toFixed(2)} + spoilage {best.spoilageLossQty.toFixed(2)}).</p>}
    </div>
    <div className="flex items-start gap-2 border-t border-emerald-100 bg-white/60 px-5 py-3 text-xs leading-5 text-slate-600"><ShieldAlert size={15} className="mt-0.5 shrink-0 text-amber-600"/><span>Future prices are illustrative, not a market forecast. Actual rates, storage conditions and unexpected losses may change the outcome.</span></div>
  </div>
}
