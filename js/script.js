// Copyright (c) 2022 Emmanuel-Fofeyin All rights reserved
//
// Created by: Emmanuel.Fofeyin
// Created on:Tuesday March 29 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates volume of pyramid.
 */
function calculate () {
  // input
  const lLength = parseInt(document.getElementById('l-length').value)
  const wWidth = parseInt(document.getElementById('b-length').value)
  const hHeight = parseInt(document.getElementById('h-height').value)

  // process
  const area = (lLength * wWidth * hHeight) / 3 * hLength

  // output
  document.getElementById('area').innerHTML = 'Volume is: ' + volume + ' mm²'
}