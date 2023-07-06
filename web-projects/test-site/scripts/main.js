var 圖片 = document.querySelector("img");

圖片.onclick = function () 
{
  let mySrc = 圖片.getAttribute("src");
  if (mySrc === "images/IMG_7259.jpg") 
  {
    圖片.setAttribute("src", "images/IMG_7260.jpg");
  } 
  else 
  {
    圖片.setAttribute("src", "images/IMG_7259.jpg");
  }
}

var 按鈕 = document.querySelector("button");
var 標題 = document.querySelector("h1");

function setUserName()
{
  let 名字 = prompt("輸入你的名稱或暱稱");
  localStorage.setItem("name", 名字);
  標題.innerHTML = "這是一個練習用的網頁, " + 名字;
}

if (!localStorage.getItem("name")) 
{
  setUserName();
} 
else
{
  let storedName = localStorage.getItem("name");
  標題.innerHTML = "這是一個練習用的網頁, " + storedName;
}

按鈕.onclick = function () 
{
  setUserName();
};

function setUserName() 
{
let 名字 = prompt('輸入你的名稱或暱稱');
if(!名字 || 名字 === null) 
{
 setUserName();
} 
else 
{
  localStorage.setItem('name', 名字);
  標題.innerHTML = '這是一個練習用的網頁, ' + 名字;  
}
}
