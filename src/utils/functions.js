//function to change the original url to embed url
export default function changeUrlToEmbedUrl (urlBefore){
    let array = urlBefore.split('v=');
    let array1 = array[1].split('&list')
    let urlNow = 'https://www.youtube.com/embed/'+array1[0];
    return urlNow
  }