const numericFields = ['quantity','currentPrice','expectedPrice','duration','moistureLoss','spoilage','storageCost','extraStorage','farmToWarehouse','warehouseToMandi','loading','otherSelling']
export function validateInputs(values) {
  const errors = {}
  for (const key of numericFields) {
    const n = Number(values[key])
    if (!Number.isFinite(n)) errors[key] = 'Enter a valid number.'
    else if (n < 0) errors[key] = 'Value cannot be negative.'
  }
  if (Number(values.quantity) <= 0) errors.quantity = 'Quantity must be greater than zero.'
  if (Number(values.duration) < 1 || Number(values.duration) > 12 || !Number.isInteger(Number(values.duration))) errors.duration = 'Choose a whole number from 1 to 12 weeks.'
  if (Number(values.moistureLoss) >= 100) errors.moistureLoss = 'Enter a percentage below 100.'
  if (Number(values.spoilage) >= 100) errors.spoilage = 'Enter a percentage below 100.'
  return errors
}
