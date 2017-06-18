/**
 * Created by joachimba on 10-6-2017.
 */

var news = new XMLHttpRequest();
news.open("GET", "https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=bd6ca44a8e514a5cabe3eb1d63a87d11", false);
news.send(null);
var r = JSON.parse(news.response);
var artikel1 = r.articles[0].title;
var artikel2 = r.articles[1].title;
var artikel3 = r.articles[2].title;
var artikel4 = r.articles[3].title;
var artikel5 = r.articles[4].title;
var kop1 = r.articles[0].title;
var kop2 = r.articles[1].title;
var kop3 = r.articles[2].title;
var kop4 = r.articles[3].title;
var kop5 = r.articles[4].title;
var beschrijving1 = r.articles[0].description;
var beschrijving2 = r.articles[1].description;
var beschrijving3 = r.articles[2].description;
var beschrijving4 = r.articles[3].description;
var beschrijving5 = r.articles[4].description;
var foto1 = r.articles[0].urlToImage;
var foto2 = r.articles[1].urlToImage;
var foto3 = r.articles[2].urlToImage;
var foto4 = r.articles[3].urlToImage;
var foto5 = r.articles[4].urlToImage;


document.getElementById('titel1').innerHTML = artikel1;
document.getElementById('titel2').innerHTML = artikel2;
document.getElementById('titel3').innerHTML = artikel3;
document.getElementById('titel4').innerHTML = artikel4;
document.getElementById('titel5').innerHTML = artikel5;
document.getElementById('titelkop1').innerHTML = kop1;
document.getElementById('titelkop2').innerHTML = kop2;
document.getElementById('titelkop3').innerHTML = kop3;
document.getElementById('titelkop4').innerHTML = kop4;
document.getElementById('titelkop5').innerHTML = kop5
document.getElementById('beschrijving1').innerHTML = beschrijving1;
document.getElementById('beschrijving2').innerHTML = beschrijving2;
document.getElementById('beschrijving3').innerHTML = beschrijving3;
document.getElementById('beschrijving4').innerHTML = beschrijving4;
document.getElementById('beschrijving5').innerHTML = beschrijving5;
document.getElementById('foto1').innerHTML = "<img src='"+ foto1 + "'>";
document.getElementById('foto2').innerHTML = "<img src='"+ foto2 + "'>";
document.getElementById('foto3').innerHTML = "<img src='"+ foto3 + "'>";
document.getElementById('foto4').innerHTML = "<img src='"+ foto4 + "'>";
document.getElementById('foto5').innerHTML = "<img src='"+ foto5 + "'>";

