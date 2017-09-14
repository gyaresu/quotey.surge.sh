// {
//   "success": {
//       "total": 1
//   },
//   "contents": {
//       "quotes": [
//           {
//               "quote": "We hold ourselves back in ways both big and small, by lacking self-confidence, by not raising our hands, and by pulling back when we should be leaning in.",
//               "length": "154",
//               "author": "Sheryl Sandberg",
//               "tags": [
//                   "confidence",
//                   "inspire"
//               ],
//               "category": "inspire",
//               "date": "2017-09-13",
//               "permalink": "https://theysaidso.com/quote/jDbf6SHMWYq5bj4_8WbKeAeF/sheryl-sandberg-we-hold-ourselves-back-in-ways-both-big-and-small-by-lacking-sel",
//               "title": "Inspiring Quote of the day",
//               "background": "https://theysaidso.com/img/bgs/man_on_the_mountain.jpg",
//               "id": "jDbf6SHMWYq5bj4_8WbKeAeF"
//           }
//       ],
//       "copyright": "2017-19 theysaidso.com"
//   }
// }

function getQuote (type) {
  var el = document.querySelector('body')
  var qotd = document.createElement('p')
  var life = document.createElement('p')

  if (type.qot === true) {
    fetch('http://quotes.rest/qod.json')
    .then(res => res.json())
    .then(data => {
      var clean = JSON.stringify(data.contents.quotes[0].quote)
      qotd.className = 'day-quote'
      qotd.textContent = 'QOTD: ' + clean // clean.contents.quotes[0].quote <- undefined
      if (document.querySelector('.day-quote')) {
        el.replaceChild(qotd, document.querySelector('.day-quote'))
      } else {
        el.appendChild(qotd)
      }
      // console.log(clean.contents.quotes[0].quote)
    })
  } else if (type.category === 'life') {
    fetch('http://quotes.rest/qod?category=life')
    .then(res => res.json())
    .then(data => {
      var clean = JSON.stringify(data.contents.quotes[0].quote)
      life.className = 'life-quote'
      life.textContent = 'Life Quote: ' + clean // clean.contents.quotes[0].quote <- undefined
      if (document.querySelector('.life-quote')) {
        el.replaceChild(life, document.querySelector('.life-quote'))
      } else {
        el.appendChild(life)
      }
    })
  }
}
