// Code your solutions in this file
//   const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }

//   return gifts;
// }

// wrapGifts(gifts);

 const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards) {
    let thankyouarray= []
    for (let i = 0; i < cards.length; i++) {
       thankyouarray.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
        console.log(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
 return thankyouarray
}
writeCards(cards);


function countDown(x){
    while (x > -1)
      console.log(x --)
  return (x)
}
countDown(10)



