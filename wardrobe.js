let isRainy = true
let temperature = 1
let clothes = ''

if (isRainy) {
  clothes += 'umbrella, hoodie, '
}

if (temperature <= 15 && temperature >= 5) {
  clothes += 'T-shirt, coat, pant, bobby socks, sneakers, '
}

else if (temperature >= 15 && temperature <= 25) {
  clothes += 'sweater, pant, bobby socks, sneakers'
}

else if (temperature < 5) {
  clothes += 'T-shirt, sweater, cap, scarf, pant, socks, boots'
}
else {
  clothes += 't-shirt, capris'
}
console.log(`Je vous recommande de porter: ${clothes}`)
