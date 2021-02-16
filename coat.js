// Programme qui va m'aider à décider si je dois mettre mon manteau
// ou pas en fonction d'une méteo pluvieuse ou venteuse

let isRainy = true
let isWindy = false
let isCold = true
let temperature = 7

if ((isRainy || isWindy || isCold) && temperature < 10) {
  console.log('Mettez votre manteau')
} else {
  console.log('Vous n avez pas besoin de manteau today')
}