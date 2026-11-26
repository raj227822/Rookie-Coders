// Demonstration-only linear interpolation. This is not a live mandi price feed.
export function estimateWeeklyPrice(currentPrice, expectedPrice, week, duration) {
  if (week === 0) return currentPrice
  if (duration <= 0) return expectedPrice
  return currentPrice + (expectedPrice - currentPrice) * (week / duration)
}
