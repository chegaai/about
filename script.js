/**
 * Returns a single item from an array randomly
 * @param {Array} arr The array to extract the random item from
 */
function getRandomLogo (isFavicon = false) {
  const logoList = [
    'mista',
    'circulo',
    'palito',
    'retangulo',
    'triangulo'
  ]

  const random = Math.floor(Math.random() * logoList.length)

  if (isFavicon && random === 0) return getRandomLogo(isFavicon)

  return logoList[random]
}

function setRandomLogo () {
  const newLogo = getRandomLogo()
  const newLogoPath = `./assets/logo/${newLogo}.svg`
  const logo = document.getElementById('logo')
  logo.setAttribute('src', newLogoPath)
}

function setRandomFavicon () {
  const newFavicon = getRandomLogo(true)
  const newFaviconPath = `./assets/favicon/${newFavicon}.png`
  const favicon = document.getElementById('favicon')
  favicon.setAttribute('href', newFaviconPath)
}

document.addEventListener("DOMContentLoaded", function () {
  setRandomLogo()
  setRandomFavicon()
});
