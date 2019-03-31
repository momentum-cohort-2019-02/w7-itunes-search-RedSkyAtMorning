// I owe AJ something for this 

// global fetch



function qS (selector) {
  return document.querySelector(selector)
}

function qSA (selector) {
  return document.querySelectorAll(selector)
}

function getMusic () {
  return fetch('https://itunes-api-proxy.glitch.me/search?term=jack+johnson')
  .then(function(response) {
      if (!response.ok) {
          throw Error (response.statusText)
      }
      return response.json
  }
  )
}

function updateMusic() {
    getMusic()
    .then(function(musicData){
      console.log(musicData)
      const trackDiv = qS('#track-list')
      trackDiv.innerHTML = ''
      let idx
      for (idx = 0; idx < musicData.results.length; idx++) {
        const track = document.createElement('div')
        const albumCover = document.createElement('div')
        track.classList.add('track')
        trackInfo.classList.add('track-details')
        albumCover.classList.add('cover-image')
        let artistName = musicData.results[idx]artistName
        let album = musicData.results.[idx].collectionName
        let songName = musicData.results[idx].trackName
        let coverImg = mucsicData.results[idx].artworkUrl100
        trackInfo.innerText = artistName + album + songName;
        albumCover.innerhtml = `<img src="${coverImg}">`
        track.append(trackInfo, albumCover)
        trackDiv.append(track)
      } 
    })
}
document.addEventListener('DOMContentLoaded',function(){
  updateMusic()
})







// function logResult(result) {
//     console.log(result);
//   }
  
// function logError(error) {
//     console.log('Looks like there was a problem: \n', error);
//   }
  
// function validateResponse(response) {
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response;
//   }
  
// function readResponseAsJSON(response) {
//     return response.json();
//   }
  
// function fetchJSON(pathToResource) {
//     fetch(pathToResource) 
//     .then(validateResponse) 
//     .then(readResponseAsJSON) 
//     .then(logResult) 
//     .catch(logError)
//     }


// function getSong(input){
//     let input = 'https://itunes.apple.com/lookup?id=321595573'
//     .then(fetchJSON (input)
//     .then(function () {
//         const trackName = ResponseAsJSON.trackName
//         const previewURL = ResponseAsJSON.previewURL
//         document.querySelector(`#trackName`).innerHTML = `${trackName}`
//         document.querySelector(`#previewURL`).innerHTML = `${previewURL}`
//      ) }
//         return input
        
//     }
   

// document.addEventListener('DOMContentLoaded', function(){
//         gestSong()
// }
