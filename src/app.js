/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let domainList = [];
  let pronoun = ["His", "Her", "They"];
  let adj = ["big", "small", "wide"];
  let noun = ["wolf", "sheep", "dog"];
  let domainNames = [".com", ".net", ".edu"];

  for (let i in pronoun) {
    for (let j in adj) {
      for (let k in noun) {
        for (let l in domainNames) {
          domainList.push(pronoun[i] + adj[j] + noun[k] + domainNames[l]);
        }
      }
    }
  }
  console.log(domainList);
};
