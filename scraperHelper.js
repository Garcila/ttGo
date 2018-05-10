
const scrapeIt = require('scrape-it');

const url = 'https://www.imdb.com/title/tt2771780/episodes?season=2';

scrapeIt(url, {
  episodes: {
    listItem: '.list_item',
    data: {
      title: {
        selector: '.image a',
        attr: 'title'
      },
      airdate: {
        selector: '.info .airdate',
      },
      image: {
        selector: '.image a .hover-over-image img',
        attr: 'src'
      },
      description: {
        selector: '.info .item_description',
        how: 'html'
      }
    }
  }
}).then(({ data, response}) => {
  console.log(`Status code: ${response.statusCode}`)
  console.log(data)
})