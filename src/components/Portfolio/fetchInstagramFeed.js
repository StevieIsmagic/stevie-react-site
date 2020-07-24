import ky from 'ky';
import proxy from '../../config';

function fetchInstagram() {
  // GET IG Media Objects from Proxy
  // Add No Cross Origin Resource Sharing
  // How to protct this endpoint ?
  try {
    const mediaObjects = ky.get(`${proxy}`).json()
    console.log('MEDIA OBJECTS', mediaObjects)
    return mediaObjects
  } catch(err) {
    console.log(`ERR FETCHING IG MEDIA OBJECTS`, err)
  }

}

export default fetchInstagram;
