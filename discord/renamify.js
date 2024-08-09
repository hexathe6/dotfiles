// ==UserScript==
// @name        discord renamify
// @match       https://discord.com/*
// @author      hexa6
// @description rename users and color them by name
// ==/UserScript==

function renamify()
{
  let isregex = (x) => (typeof(x) == "object") && (x[Symbol.match]);
  let spanify = (cname,name) => "<span class=\"spanified-"+name+" "+cname+"\">"+name+"</span>";

  // list of [original name, new name] pairs. original names can take the form of regexes, though the replacement name cannot backreference the original
  let reps = [];

  // list of names to colour
  // possible forms are:
  //   "name" - matches name and sets class to name
  //   ["name","class"] - matches on name and sets class to class
  //   [/regex/,"name","class"] - matches on regex, sets matched region to name, sets class to class
  let spans = [];

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
[class*=container] [class*=defaultColor]:not(a):not(:has(a)), \
[class*=listRow] > :not([class*=listRowContent]), \
[class*=listRow] > [class*=listRowContent] > :nth-child(2), \
[class*=TooltipText], \
[class*=typing],"+ // this may cause crashes
"[class*=replyLabel], \
[class*=username]");
  let literal_els = document.querySelectorAll("[id*=message-content-] > span");
  let replace = (str,repfrom,repto) => {if(isregex(repfrom)) {return str.replace(repfrom,repto);} else {return str.replaceAll(repfrom,repto);}};
  for(let el of els){
    for(let r of reps){
      let x = replace(el.innerHTML,r[0],r[1]);
      if(el.innerHTML != x) {el.innerHTML = x}}
    for(let r of spans){
      let x = el.innerHTML;
      if(!(x.includes("spanified-"+r[0]))) {if(isregex(r[0])) {x = replace(x,r[0],spanify(r[2],r[1]))}
                                            else if(r.length == 2) {x = replace(x,r[0],spanify(r[1],r[0]));}
                                                 else {x = replace(x,r,spanify(r,r));}}
      if(el.innerHTML != x) {el.innerHTML = x}}}
  for(let el of literal_els){
    for(let r of spans){
      if(r instanceof Array && r.length == 3) {r = r[1];}
      if(typeof(r) != "string") {continue;}
      let x = el.innerHTML;
      if(!(x.includes("spanified-"+r))) {x = x.replaceAll(RegExp("\\b"+r+"\\b","gi"),spanify(r,r));}
      if(el.innerHTML != x) {el.innerHTML = x}}}
}

setInterval(renamify, 500)
