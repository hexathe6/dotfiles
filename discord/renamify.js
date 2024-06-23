// ==UserScript==
// @name        discord renamify
// @match       https://discord.com/*
// @author      hexa6
// @description rename users and color them by name
// ==/UserScript==

function renamify(){
  let spanify = (cname,name) => "<span class=\"spanified-"+name+" "+cname+"\">"+name+"</span>";

  // list of [original name, new name] pairs
  let reps = [/* user-specified */];

  // list of names to colour. [name, class] is also acceptable (and especially useful for people with spaces in their names)
  let spans = [/* user-specified */];
  let els = document.querySelectorAll("\
.mention, \
[class*=nameAndDecorators] > div > [class*=overflow], \
[class*=username__][class*=desaturateUserColors], \
:is([class*=memberInner], \
    [aria-label*=(direct message)]) \
      :is(span[class=\"\"], \
          [class*=overflow]), \
[class*=nameTag] [class*=text-sm-normal], \
[class*=userInfo] [class*=username], \
[class*=memberInner] [class*=username], \
[class*=heading-lg-semibold], \
[class*=container] [class*=defaultColor], \
[class*=listRow] > :not([class*=listRowContent]), \
[class*=listRow] > [class*=listRowContent] > :nth-child(2), \
[class*=TooltipText], \
[class*=typing], \
[class*=replyLabel], \
[class*=username]");
  for(let el of els){
    for(let r of reps){
      let x = el.innerHTML.replaceAll(r[0],r[1])
      if(el.innerHTML != x) {el.innerHTML = x}}
    for(let r of spans){
      let x = el.innerHTML;
      if(!(x.includes("spanified-"+r[0]))) {if(r.length == 2) {x = x.replaceAll(r[0],spanify(r[1],r[0]))} else {x = x.replaceAll(r,spanify(r,r))}}
      if(el.innerHTML != x) {el.innerHTML = x}}}}

setInterval(renamify, 500)
