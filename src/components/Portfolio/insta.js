const React = require('react');
const Instafeed = require("instafeed.js");

const insta = () => {
  // GET IG Token
  fetch('https://morning-temple-26180.herokuapp.com/https://nameless-ravine-33561.herokuapp.com/token.js')
    .then((res) => {

      console.log("PROXY RES -", res)
      
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
      // return <div id="instafeed"></div>
      return ;

    })
    .catch(err => console.log(`ERR ${err}`))

}

module.exports = insta;