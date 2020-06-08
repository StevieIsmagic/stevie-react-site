const React = require('react');
const Instafeed = require("instafeed.js");
const Axios = require("axios");


const insta = () => {
  // Axois GET IG token
  Axios.get('https://personal-site-ig-token-refresh.herokuapp.com/token.js')
    .then((res) => {

      console.log(`AXIOS \n ${JSON.stringify(res, false, 2)}`)
      
      const token = res.data.slice(23)
      const token1 = token.slice(0, -2)
      console.log('TOK', token.slice(0, -2))
      var feed = new Instafeed({
        get: 'user', 
        userId: '1334443391',
        accessToken: token1,
        resolution: 'low_resolution',
        template: '<div class="columns small-6 medium-4 large-3"><div class="instagram-image-wraper"><a class="test" href="{{link}}"><img src="{{image}}" /></a></div></div>',
        limit: 12,
      });
      console.log("FEED", feed)
      feed.run();
      return <div id="instafeed"></div>

    })
    .catch(err => console.log(`ERR ${err}`))

}

module.exports = insta;