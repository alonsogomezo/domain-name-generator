/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

var pronoun = ["the", "our"];

var adj = ["great", "big"];

var noun = ["jogger", "racoon"];

for (var i = 0; i < pronoun.length; i++) {
  for (var x = 0; x < pronoun.length; x++) {
    for (var j = 0; j < pronoun.length; j++) {
      console.log(pronoun[i] + adj[x] + noun[j] + ".com");
    }
  }
}
