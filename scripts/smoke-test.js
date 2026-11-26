import { calculateScenarios } from '../src/utils/profitCalculator.js'
import { sampleData } from '../src/data/sampleData.js'
const r = calculateScenarios(sampleData)
if (r.weeks.length !== 9) throw new Error('Expected Week 0 through Week 8')
if (r.sellNow.netProfit !== 237000) throw new Error(`Unexpected sell-now profit: ${r.sellNow.netProfit}`)
if (!Number.isFinite(r.best.netProfit)) throw new Error('Best profit must be finite')
console.log({sellNow: r.sellNow.netProfit, bestWeek: r.best.week, bestProfit: r.best.netProfit, additional: r.additionalProfit})
