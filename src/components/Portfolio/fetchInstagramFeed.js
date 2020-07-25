

export default async function fetchInstagram() {
  // GET IG Media Objects from Proxy
  // Add No Cross Origin Resource Sharing
  // How to protct this endpoint ?

  // What format is Proxy returning ? - JSON ?
  try {
    const url = `https://morning-temple-26180.herokuapp.com`
    const response = await fetch(url)
       .then(res => JSON.parse(res))
       .then(data => console.log(`serp`, data))
       .catch(e => console.log(`ERRR - ${e}`))
    // const mediaObjects = r
    // console.log('MEDIA OBJECTS', mediaObjects)
    // return mediaObjects
  } catch(err) {
    console.log(`ERR FETCHING IG MEDIA OBJECTS`, err)
  }

}
