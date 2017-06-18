/**
 * Created by joachimba on 10-6-2017.
 */

var tijd_datum = new Date();
var dag = tijd_datum.getDay(); //dag in woorden
var dag2 = tijd_datum.getDate(); // dag in getal
var maand = tijd_datum.getMonth()+1; // +1 want js begint bij 0 te tellen
var jaar = tijd_datum.getFullYear();


var maandarray = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
var dagarray = new Array('zondag','maandag','dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag');
$("#datum").html(dagarray[dag]+" "+dag2+" "+maandarray[maand]+" "+jaar);


