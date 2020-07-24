import proxyUrl from '../../config';

async function fetchInstagram() {
  // GET IG Media Objects from Proxy
  // Add No Cross Origin Resource Sharing
  // How to protct this endpoint ?
  try {
    const response = await fetch(`${proxyUrl}`)
       .then(res => console.log(JSON.stringify(res)))
       .then(data => data)
       .catch(e => console.log(`ERRR - ${e}`))
    // const mediaObjects = r
    // console.log('MEDIA OBJECTS', mediaObjects)
    // return mediaObjects
  } catch(err) {
    console.log(`ERR FETCHING IG MEDIA OBJECTS`, err)
  }

}

export default fetchInstagram;
