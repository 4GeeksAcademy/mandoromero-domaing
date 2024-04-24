/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let domainList = [];
  let pronoun = ["His", "Her"];
  let adj = ["big", "small"];
  let noun = ["wolf", "sheep"];
  let domainNames = [".com", ".net"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domainNames.length; l++) {
          domainList.push(pronoun[i] + adj[j] + noun[k] + domainNames[l]);
        }
      }
    }
  }
  console.log(domainList);
};
