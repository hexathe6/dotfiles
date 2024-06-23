// ==UserScript==
// @name        discord allow role color naming
// @match       https://discord.com/*
// @author      hexa6
// @description allows name coloration based on role colours (might not work without the "show role colours next to names" setting enabled)
// ==/UserScript==

function color_dem_names()
{
  for(let el of document.querySelectorAll(":is(li[class*=messageListItem],[class*=recentMentionsPopout],aside[class*=membersWrap],[class*=username]) [class*=dot]"))
    {
      let c = el.getAttribute("fill");
      el.parentElement.parentElement.parentElement.parentElement.style.setProperty("--rolecolor",c);
    }
}

setInterval(color_dem_names, 1000);
