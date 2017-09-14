function getQuote (type) {
  var el = document.querySelector('body')
  var qotd = document.createElement('p')
  var life = document.createElement('p')

  if (type.qot === true) {
    fetch('http://quotes.rest/qod.json')
    .then(res => res.json())
    .then(data => {
      var quote = JSON.stringify(data.contents.quotes[0].quote)
      var author = JSON.stringify(data.contents.quotes[0].author)
      qotd.className = 'day-quote'
      qotd.textContent = `Quote of the Day\n: ${quote} — ${author.replace(/"/g, '')}`
      if (document.querySelector('.day-quote')) {
        el.replaceChild(qotd, document.querySelector('.day-quote'))
      } else {
        el.appendChild(qotd)
      }
    })
  } else if (type.category === 'life') {
    fetch('http://quotes.rest/qod?category=life')
    .then(res => res.json())
    .then(data => {
      var quote = JSON.stringify(data.contents.quotes[0].quote)
      var author = JSON.stringify(data.contents.quotes[0].author)
      life.className = 'life-quote'
      life.textContent = `Life Quote\n: ${quote} — ${author.replace(/"/g, '')}`
      if (document.querySelector('.life-quote')) {
        el.replaceChild(life, document.querySelector('.life-quote'))
      } else {
        el.appendChild(life)
      }
    })
  }
}
