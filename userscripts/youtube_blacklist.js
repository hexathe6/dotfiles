// ==UserScript==
// @name        youtube blacklist
// @match       https://www.youtube.com/*
// @author      hexa6
// @description remove videos from channels you dislike
// ==/UserScript==

var list = [];

function gp(el)
{
  return el.parentElement;
}

function doit()
{
  console.log(window.location.href);
  if(window.location.href == "https://www.youtube.com/") {
  for(let el of document.querySelectorAll("ytd-rich-grid-row ytd-video-meta-block:nth-child(2) a")) {
  for(let l of list) {
  if(el.innerHTML == l) {
  gp(gp(gp(gp(gp(gp(gp(gp(gp(gp(gp(gp(gp(el))))))))))))).remove();
  }}}}
  if(window.location.href.includes("https://www.youtube.com/watch")) {
  for(let el of document.querySelectorAll("ytd-compact-video-renderer.style-scope yt-formatted-string")) {
  for(let l of list) {
  if(el.innerHTML == l) {
  gp(gp(gp(gp(gp(gp(gp(gp(gp(gp(gp(el))))))))))).remove();
  }}}}
  if(window.location.href.includes("https://www.youtube.com/results")) {
  for(let el of document.querySelectorAll("ytd-video-renderer.ytd-item-section-renderer div > div ytd-channel-name a")) {
  for(let l of list) {
  if(el.innerHTML == l) {
  gp(gp(gp(gp(gp(gp(gp(gp(el)))))))).remove();
  }}}}
}

setInterval(doit,1000); // if there's a better way please tell me
