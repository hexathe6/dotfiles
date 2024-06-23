// ==UserScript==
// @name        discord title fix
// @match       https://discord.com/*
// @author      hexa6
// @description redoes the tab title
// ==/UserScript==

function doit()
{
  if(document.title.includes("Discord")) {
    let dot = false;
    if(document.title.includes("•")) {dot = true;}
    let dm = false;
    if([...document.title.matchAll(/\(\d+\)/g)].length > 0) {dm = [...document.title.matchAll(/\((\d+)\)/g)][0][1];}
    document.title = (dot ? "• " : "") + (dm ? "• " + dm +" • " : "") + document.title.split(" | ").slice(1).join(" | ");}
}

doit()

new MutationObserver(
  doit)
  .observe(document.querySelector("title"),
           {subtree: true,
            characterData: true,
            childList: true})
