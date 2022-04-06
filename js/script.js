// Copyright (c) 2022 Emmanuel-Fofeyin All rights reserved
//
// Created by: Emmanuel.Fofeyin
// Created on: April  2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates volume of pyramid.
 */
function calculate () {
  // input
  const length = parseInt(document.getElementById('length').value)
  const width = parseInt(document.getElementById('width').value)
  const height = parseInt(document.getElementById('height').value)

  // process
  const volume = (length * width * height) / 3 

  // output
  document.getElementById('area').innerHTML = 'The volume is: ' + volume.toFixed(2) + ' mm³'
}