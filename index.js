
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  var tmp = document.querySelector("div#nested").getElementsByClassName('target')
  return tmp
}

function deepestChild(){
  var temp = document.querySelector("div#grand-node div div div div")
  return temp
}

function increaseRankBy(n){
  var ele = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  var temp = 0
  for(var i = 0;i<ele.length;i++){
    temp = parseInt(ele[i].innerHTML) + n
    ele[i].innerHTML = temp.toString();
  }
}