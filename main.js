//step1: select the element (button)
//step2: map the table (loop for)
//step3: link the function with an event
//step4: create the function

var likes = document.querySelectorAll(".like-btn");

//console.log ( likes  )
for (let i = 0; i < likes.length; i++) {
  likes[i].addEventListener("click", function () {
    if (likes[i].style.color === "black") {
      likes[i].style.color = "red";
    } else {
      likes[i].style.color = "black";
    }
  });
}

//plus function
//step1: select the element (button )
//step2: map the table of buttons (loop for)
//step3: link the function with an event (onclick )
//step4: select the element that will be updated once we trigger the event
//step5: increment the element 


var plus_btn = document.querySelectorAll(".plus-btn");

for (let i = 0; i < plus_btn.length; i++) {
  plus_btn[i].addEventListener("click", function () {
      //console.log(typeof plus_btn[i].nextElementSibling.innerHTML);
    // var number = parseInt(plus_btn[i].nextElementSibling.innerHTML);
    // number = number + 100;
    // plus_btn[i].nextElementSibling.innerHTML = number;
    plus_btn[i].nextElementSibling.innerHTML++
    sum()
  });

}






//delte function
//step1: select the element (button )
//step2: map the table of buttons (loop for)
//step3: link the function with an event (onclick )
//step4: select the element that will be updated once we trigger the event
//step5: remove the element 


var delet_btn=document.querySelectorAll('.delete-btn')
//console.log(delet_btn)

for (let i=0; i<delet_btn.length;i++){

    delet_btn[i].addEventListener('click', function(){
        delet_btn[i].parentElement.parentElement.parentElement.remove()
        sum()
    })

}

//child element
// console.log(document.querySelectorAll('.item-container').children  )
// var test=document.querySelectorAll('.item-container')
// for(let i=0; i<test.length;i++){
//    console.log( test[i].children[1].children)
// }

//    console.log(delet_btn[i].closest('.item-container'))


//total function 


function sum(){
    var prices=document.querySelectorAll('.price')
    var quantity=document.querySelectorAll('.number-items')
    var somme=0


    for (let i=0; i<prices.length;i++){
      
      somme= somme + prices[i].innerHTML *quantity[i].innerHTML
      console.log(somme)
      document.getElementById("total").innerHTML = somme;
    }

 
}

