'use strict';

// var mainList = document.querySelector('#main_container');
// var http = new XMLHttpRequest();
// var postIndex = 1;
//
//
// http.onreadystatechange = function() {
//     if (http.readyState === 4 && http.status === 200) {
//         var fullDataArray = JSON.parse(http.response);
//         console.log(fullDataArray);
//         for (let i = 0; i < 10; i++) {
//             var postContainer = document.createElement('div');
//             postContainer.setAttribute('class', 'post_container');
//             mainList.appendChild(postContainer);
//             postIndex++;
//
//             // var postIndexNumber = document.createElement('span');
//             // postIndexNumber
//
//
//
//
//             // var container = document.createElement('ul');
//             // document.body.appendChild(container);
//             //
//             // var header = document.createElement('li');
//             // container.appendChild(header);
//             // header.innerHTML = fullDataArray.response.docs[i].headline.main;
//             // header.setAttribute('class', 'main;');
//             //
//             // var snippet = document.createElement('li');
//             // container.appendChild(snippet);
//             // snippet.innerHTML = fullDataArray.response.docs[i].snippet;
//             //
//             // var date = document.createElement('li');
//             // container.appendChild(date);
//             // date.innerHTML = fullDataArray.response.docs[i].pub_date;
//             //
//             // var linken = document.createElement('a');
//             // container.appendChild(linken);
//             // linken.innerHTML = 'Please click here to see the full Article';
//             // linken.setAttribute('href', fullDataArray.response.docs[i].web_url);
//         }
//     }
// }
// http.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=moon+landing+by+Apollo+11&api_key=5e046f32d45647abb78492eea38611b2');
// http.send();
