// Display gifs of a cute/funny topic using: https://github.com/Giphy/GiphyAPI
//
// Search/Find the images in the API
// Display the list of the first 16 results's static thumbnail
// If the user clicks on the thumbnail, display the animated GIF

let ImgContainer = document.querySelector('.thumbnail__container');
let searchInput = document.querySelector('#search');
console.log(searchInput.value)



var url = 'http://api.giphy.com/v1/gifs/search?q=gandalf&api_key=dc6zaTOxFJmzC&limit=16';

function load(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      console.log(xhr.response); //Outputs a DOMString by default
      let responseFromServer = JSON.parse(xhr.response);
      callback(responseFromServer);
      buildIMG(responseFromServer);
    }
  }

  xhr.open('GET', url, true);
  xhr.send();
}

load(url, function(response){console.log(response)});

function buildIMG (responseFromServer){
    for (let i = 0; i < 16; i++){
        let liElement = document.createElement('li');
        liElement.style.backgroundImage = 'url(' + responseFromServer.data[i].images.downsized_still.url + ')';
        liElement.addEventListener('mouseover', function () {
            this.style.backgroundImage = 'url(' + responseFromServer.data[i].images.downsized_medium.url + ')';
            console.log(ImgContainer.innerHTML);
        })
        liElement.addEventListener('mouseleave', function () {
            this.style.backgroundImage = 'url(' + responseFromServer.data[i].images.downsized_still.url + ')';
        })
        ImgContainer.appendChild(liElement);
    }
}

searchInput.addEventListener('keyup', function(e) {
    if (e.keyCode == 13) { // ENTER key
        url = 'http://api.giphy.com/v1/gifs/search?q=' + searchInput.value + '&api_key=dc6zaTOxFJmzC&limit=16';
        console.log(url);
        ImgContainer.innerHTML = "";
        console.log(ImgContainer.innerHTML);
        load(url, function(response){console.log(response)});
        console.log(searchInput.value)
    }
} )
