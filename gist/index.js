'use strict'

function init() {
  slide1()
  slide2()
  progress()
}

function $(selector) {
  return document.querySelector(selector)
}

function slide1() {
  $('#slide1 .content').style.left = '0'
  $('#slide1 .content').style.opacity = ''
  setTimeout(() => {
    $('#slide1 .content').style.left = '80px'
    $('#slide1 .content').style.opacity = '1'
    setTimeout(() => {
      $('#slide1 .content').style.left = '160px'
      $('#slide1 .content').style.opacity = '0'
    }, 800)
  }, 800)
}

function slide2() {
  setTimeout(() => {
    $('#slide2').style.height = '150px'
    setTimeout(() => {
      $('#slide2').style.height = '0'
    }, 1000)
  }, 1000)
}

function progress() {
  $('.percent').style.width = '30%'
  setTimeout(function() {
    $('.percent').style.width = '70%'
    setTimeout(function() {
      $('.percent').style.width = '100%'
    }, 2000)
  }, 2000)
}

function pop(type) {
  var node = $('.com-popup')
  node.classList.remove('fade')
  node.classList.remove('scale')
  setTimeout(() => {
    node.classList.add(type)
  }, 10)
}
