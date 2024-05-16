// Copyright (c) 2024 Nathan De Silva All rights reserved
//
// Created by: Nathan De Silva
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-6-01/sw.js", {
    scope: "/ICD2O-Unit-6-01/",
  })
}


function myButtonClicked() {

  // input
  let numberA = parseInt(document.getElementById("number-a").value)
  const numberB = parseInt(document.getElementById("number-b").value)
  let counter = 0
  let remainder = 0

  while (true) {
    if (numberA < numberB) {
      remainder += numberA
      break
    } else {
      document.getElementById("answer").innerHTML += numberA + " - " + numberB + " = " + (numberA - numberB) + "<br />"
    }
    numberA -= Math.abs(numberB)
    counter++
    console.log(numberA)
  }
  console.log(numberA)
  document.getElementById("answer").innerHTML += "The answer is = " + counter + " with a remainder of " + remainder
}
