export default async function fetchInstagram() {
  // GET IG Media Objects from Proxy
  // Add No Cross Origin Resource Sharing
  // How to protct this endpoint ?

  // What format is Proxy returning ? - JSON ?
  // ERR - Request headers too large

  try {
    const url = `https://morning-temple-26180.herokuapp.com`;
    const response = await fetch(url)
       .then(res => res.json())
       .then(data => console.log(`serp`, data))
       .catch(e => console.log(`ERRR - ${e}`))

  } catch(err) {
    console.log(`ERR FETCHING IG MEDIA OBJECTS`, err)
  }
}

