// var n1 = Math.floor((Math.random()*6)) + 1;
var n1,n2;
var f = 0 ,s =0;
function fun1(){
  f=1;
  n1 = Math.floor(Math.random()*6)+1;
  if(n1 === 1)
  {
    document.getElementsByClassName('img1')[0].setAttribute("src","images/dice1.png");
  }
  if(n1 === 2)
  {
    document.getElementsByClassName('img1')[0].setAttribute("src","images/dice2.png");
  }
  if(n1 === 3)
  {
    document.getElementsByClassName('img1')[0].setAttribute("src","images/dice3.png");
  }
  if(n1 === 4)
  {
    document.getElementsByClassName('img1')[0].setAttribute("src","images/dice4.png");
  }
  if(n1 === 5)
  {
    document.getElementsByClassName('img1')[0].setAttribute("src","images/dice5.png");
  }
  if(n1 === 6)
  {
    document.getElementsByClassName('img1')[0].setAttribute("src","images/dice6.png");
  }
  if(f == 1 && s==1){
  fun();
  }
};
function fun2(){
   n2 = Math.floor(Math.random()*6)+1;
s=1;
if (n2 === 1)
{
  document.getElementsByClassName('img2')[0].setAttribute("src","images/dice1.png");
}
if(n2 === 2)
{
  document.getElementsByClassName('img2')[0].setAttribute("src","images/dice2.png");
}
if(n2 === 3)
{
  document.getElementsByClassName('img2')[0].setAttribute("src","images/dice3.png");
}
if(n2 === 4)
{
  document.getElementsByClassName('img2')[0].setAttribute("src","images/dice4.png");
}
if(n2 === 5)
{
  document.getElementsByClassName('img2')[0].setAttribute("src","images/dice5.png");
}
if(n2 === 6)
{
  document.getElementsByClassName('img2')[0].setAttribute("src","images/dice6.png");
}
if(f == 1 && s==1){
fun();
}
};
function fun(){
{
  f = 0;
  s=0;
if(n1>n2)
{
  document.getElementsByTagName('h1')[0].innerHTML = "Player 1 won!";
}
else if(n1<n2)
{
  document.getElementsByTagName('h1')[0].innerHTML = "Player 2 won!";
}
else
{
  document.getElementsByTagName('h1')[0].innerHTML = "Tied play again!";
}
}
};
function fun3()
{
  n1=0;
  n2=0;
  f=0;
  s=0;
    document.getElementsByTagName('h1')[0].innerHTML = "Play me!";
  document.getElementsByClassName('img1')[0].setAttribute("src","images/dice6.png");
  document.getElementsByClassName('img2')[0].setAttribute("src","images/dice6.png");
}
