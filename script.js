/**
 * Returns a single item from an array randomly
 * @param {Array} arr The array to extract the random item from
 */
function getRandomLogo (isFavicon = false) {
  const lastResultKey = isFavicon ? 'last-favicon' : 'last-logo'
  const lastResult = localStorage.getItem(lastResultKey)

  const logoList = [
    'mista',
    'circulo',
    'palito',
    'retangulo',
    'triangulo'
  ]

  const random = Math.floor(Math.random() * logoList.length)

  if (isFavicon && random === 0) return getRandomLogo(isFavicon)

  const result = logoList[random]

  if (result === lastResult) return getRandomLogo(isFavicon)

  localStorage.setItem(lastResultKey, result)
  return result
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

function addButtonListener () {
  const button = document.getElementById('visit')
  button.addEventListener('click', function () {
    window.location.href = 'https://getready.chega.ai'
  })
}

document.addEventListener("DOMContentLoaded", function () {
  setRandomLogo()
  setRandomFavicon()
  addButtonListener()
});
