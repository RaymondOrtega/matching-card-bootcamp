let cards = document.querySelectorAll("img")
cards.forEach(card => card.addEventListener('click', flipCards))
var click = 0
var win = 0

function flipCards() {
  console.log("I clicked")
  if (this.classList.contains('pair1')) {
    this.src = 'rick.png'
    this.classList.add('flipped')
    click++
  } else if (this.classList.contains('pair2')) {
    this.src = 'noobnoob.png'
    this.classList.add('flipped')
    click++
  } else if (this.classList.contains('pair3')) {
    this.src = 'mix.png'
    this.classList.add('flipped')
    click++
  } else if (this.classList.contains('pair4')) {
    this.src = 'mort.png'
    this.classList.add('flipped')
    click++
  } else if (this.classList.contains('pair5')) {
    this.src = 'pickle.png'
    this.classList.add('flipped')
    click++
  }
  if (click === 2) {
    let card1 = document.querySelectorAll('.flipped')[0]
    let card2 = document.querySelectorAll('.flipped')[1]
    click = 0
    setTimeout(checkCards, 1000, card1, card2)
  }
}

function checkCards(c1, c2) {
  c1.classList.remove('flipped')
  c2.classList.remove('flipped')
  if (c1.className != c2.className) {
    c1.src = 'logo.png'
    c2.src = 'logo.png'
  }
  else{
    win +=10
    console.log("match")
  }
  if(win===50){
    document.getElementsByClassName("win")[0].src="win.gif"
  }
}

let ClassArray=["pair1","pair1","pair2","pair2","pair3","pair3","pair4","pair4","pair5","pair5"]

let randomclasses= function(arr){
  let newpos,
      temp;
      for (let i=arr.length-1;i>0;i--){
        newPos=Math.floor(Math.random()*(i+1));
        console.log(newPos)
        temp =arr[i];
        arr[i]=arr[newPos];
        arr[newPos]=temp;
      }
      return arr;
  }
let newArray=randomclasses(ClassArray)

document.getElementsByClassName("pair1")[0].className=ClassArray[0]
document.getElementsByClassName("pair1")[0].className=ClassArray[1]
document.getElementsByClassName("pair2")[0].className=ClassArray[2]
document.getElementsByClassName("pair2")[0].className=ClassArray[3]
document.getElementsByClassName("pair3")[0].className=ClassArray[4]
document.getElementsByClassName("pair3")[0].className=ClassArray[5]
document.getElementsByClassName("pair4")[0].className=ClassArray[6]
document.getElementsByClassName("pair4")[0].className=ClassArray[7]
document.getElementsByClassName("pair5")[0].className=ClassArray[8]
document.getElementsByClassName("pair5")[0].className=ClassArray[9]
