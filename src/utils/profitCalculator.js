import { estimateWeeklyPrice } from './priceEstimator.js'

export function calculateScenarios(input) {
  const quantity = Number(input.quantity)
  const duration = Number(input.duration)
  const currentPrice = Number(input.currentPrice)
  const expectedPrice = Number(input.expectedPrice)
  const moistureRate = Number(input.moistureLoss) / 100
  const spoilageRate = Number(input.spoilage) / 100
  const transport = Number(input.farmToWarehouse) + Number(input.warehouseToMandi)
  const sellingExpenses = transport + Number(input.loading) + Number(input.otherSelling)

  const sellNow = {
    week: 0, price: currentPrice, quantity,
    grossRevenue: quantity * currentPrice,
    storageExpenses: 0,
    expenses: sellingExpenses,
    netProfit: quantity * currentPrice - sellingExpenses
  }

  const weeks = [sellNow]
  for (let week = 1; week <= duration; week++) {
    const afterMoisture = quantity * Math.pow(1 - moistureRate, week)
    const saleable = afterMoisture * Math.pow(1 - spoilageRate, week)
    const price = estimateWeeklyPrice(currentPrice, expectedPrice, week, duration)
    const storageExpenses = Number(input.storageCost) * quantity * week + Number(input.extraStorage)
    const grossRevenue = saleable * price
    weeks.push({
      week, price, quantity: saleable, afterMoisture,
      moistureLossQty: quantity - afterMoisture,
      spoilageLossQty: afterMoisture - saleable,
      grossRevenue, storageExpenses, expenses: storageExpenses + sellingExpenses,
      netProfit: grossRevenue - storageExpenses - sellingExpenses
    })
  }
  const best = weeks.reduce((a, b) => b.netProfit > a.netProfit ? b : a, weeks[0])
  return {
    weeks, sellNow, best, additionalProfit: best.netProfit - sellNow.netProfit,
    transport, sellingExpenses
  }
}
