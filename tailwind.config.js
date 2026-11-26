/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: { colors: { farm: { 50:'#f1f8f1',100:'#dceedd',200:'#b9ddb9',500:'#2f855a',600:'#237347',700:'#14532d',800:'#123f25' } } } },
  plugins: []
}
