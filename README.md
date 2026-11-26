# Smart Crop Storage & Selling Advisor

A responsive React + Vite dashboard that compares selling a harvest now with storing it for up to 12 weeks.

## Run locally
1. Install Node.js 18+.
2. In this folder run `npm install`.
3. Run `npm run dev` and open the local URL printed by Vite.
4. Run `npm run build` to create a production build in `dist/`.

## Calculation notes
- Week 0 is the sell-now scenario.
- Moisture loss and physical spoilage compound independently and are shown separately.
- Weekly saleable quantity = initial quantity × (1 − moisture rate)^week × (1 − spoilage rate)^week.
- Storage cost is charged on initial quantity per week, as specified in the brief.
- The two transportation legs, loading/unloading and other selling expenses are each deducted once from either scenario. Additional storage expenses are a one-time cost for any later sale.
- Future prices are an explicitly illustrative straight-line curve from the entered current price to the entered expected price. They are not live mandi quotes.
- The app uses deterministic, rule-based explanations; no AI API key is required.
- The sample inputs are editable and local state only; there is no login or cloud persistence.

This is a decision-support demonstration, not a guarantee of future prices or profit. Confirm actual local mandi rates and storage conditions before acting.
