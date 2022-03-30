
       
let itemInCart=localStorage.getItem("productIncart");
let itemsInMyDisplayCart=document.querySelectorAll('.productsInMyCart');
let increaseItemClick=document.querySelectorAll('.increaseItems');
let decreaseItemClick=document.querySelectorAll('.decreaseItems');
let removeItemClick=document.querySelectorAll('.remove');
//var cartButton= document.querySelectorAll('.add-cart');
let numberOfItemsInCart=localStorage.getItem('itemsInCart');
var cartButton= document.querySelectorAll('.add-cart');


let itemClicked=[
    {
       title: 'Modak',
       price:20,
       inCart:0
    },
    {
        title: 'Puranpoli',
        price:25,
        inCart:0
     },
     {
        title: 'Idli',
        price:20,
        inCart:0
     },
     {
        title: 'Misal',
        price:20,
        inCart:0
     },
     {
        title: 'Pav bhaji',
        price:20,
        inCart:0
     },
     {
        title: 'Puranpoli',
        price:20,
        inCart:0
     },
     {
        title: 'Puranpoli',
        price:20,
        inCart:0
     },
     {
        title: 'Puranpoli',
        price:20,
        inCart:0
     },
     {
        title: 'Puranpoli',
        price:20,
        inCart:0
     },
     {
        title: 'Puranpoli',
        price:20,
        inCart:0
     },
     {
        title: 'Puranpoli',
        price:20,
        inCart:0
     },
     {
        title: 'Puranpoli',
        price:20,
        inCart:0
     },
     {
        title: 'Puranpoli',
        price:20,
        inCart:0
     },
     {
        title: 'Puranpoli',
        price:20,
        inCart:0
     }

]
//myCartAfterPageLoad();


for(let i=0; i<cartButton.length; i++ ){
                            cartButton[i].addEventListener('click', ()=> {
                              //   console.log("itemAdded"); to check clicked items
                                   itemsInCart( itemClicked[i]);
                                          cartTotal(itemClicked[i]);
                                         
                                  })
      
       
                                }
  /*  function myCartAfterPageLoad(){
        let numberOfItemsInCart=localStorage.getItem('itemsInCart');
        if(numberOfItemsInCart){
            document.querySelector('.myCart span').textContent=numberOfItemsInCart;
        }

    }*/
   
   

function  itemsInCart(itemClicked){
                        // console.log("item clicked is", itemClicked);// to check which item is clicked.
                         let numberOfItemsInCart=localStorage.getItem('itemsInCart');
                          numberOfItemsInCart= parseInt(numberOfItemsInCart);
//console.log(numberOfItemsInCart);
//console.log(typeof numberOfItemsInCart); --> to check data type 
                    if(numberOfItemsInCart){

                             localStorage.setItem('itemsInCart', numberOfItemsInCart+1);
                            document.querySelector('.myCart span').textContent=numberOfItemsInCart+1;
                        }
                 else{
                        localStorage.setItem('itemsInCart', 1);
                        document.querySelector('.myCart span').textContent=1;
              }
     setItems(itemClicked);
     //increaseDecrease(itemsInCart);
}

function setItems(itemClicked){
      let itemInCart= localStorage.getItem('productIncart'); 
      itemInCart=JSON.parse(itemInCart);

      if(itemInCart!=null){

                      if(itemInCart[itemClicked.title]==undefined){
                        itemInCart={
                                      ...itemInCart,[itemClicked.title]:itemClicked
                                        }
                             }

                            itemInCart[itemClicked.title].inCart+=1;
                          }
    else{
                       itemClicked.inCart=1;
                    itemInCart={
                                   [itemClicked.title]:itemClicked
                                }
        }
    localStorage.setItem("productIncart",JSON.stringify(itemInCart));
    
}

//function increaseInCartitem(){

//}
function cartTotal(itemClicked){
   // console.log("item price is", itemClicked.price);
   let totalCost=localStorage.getItem('cartTotal');
   //console.log("total is",totalCost);
  
   //console.log(typeof totalCost);
   if(totalCost!=null){
    totalCost=parseInt(totalCost);
    localStorage.setItem("cartTotal", totalCost+itemClicked.price); 
   }
   else{
    localStorage.setItem("cartTotal", itemClicked.price);
   }
}

function displayCart(){
    let itemInCart=localStorage.getItem("productIncart");
    itemInCart=JSON.parse(itemInCart);
    let productCartContainer=document.querySelector(".productsInMyCart");
    let totalCost=localStorage.getItem('cartTotal');
    if(itemInCart && productCartContainer){
      productCartContainer.innerHTML='';
        Object.values(itemInCart).map(itemClicked=>{
         if(itemClicked.inCart!=0){
         productCartContainer.innerHTML+=`
            <div class="productsInMyCartDisplay">     
                <span class="remove"  data-title=${itemClicked.title}> <ion-icon name="close-circle-outline"></ion-icon></span>
                    <span class="item">${itemClicked.title}</span>
                     <div class="itemPrice">$${itemClicked.inCart*itemClicked.price}.00</div>
                           <div class="Quantity">
                           <span class="decreaseItems" herf="a" data-title=${itemClicked.title}> <ion-icon name="remove-circle-outline"></ion-icon></span>
                           <input type="text" class="itemQuantity" data-title= ${itemClicked.title} value="${itemClicked.inCart}">                         
                            <span class="increaseItems" herf="a" data-title=${itemClicked.title}>  <ion-icon name="add-circle-outline"></ion-icon></span>
                        
                      </div>  
              
               <div class="Total">
                      $${itemClicked.price}
               </div>
               </div>
              
             `;   }
        });

        productCartContainer.innerHTML+=`
            <div class="finalTotalContainer">
             <h4 class="finalTotalTitle"> Total Payment</h4>
             <h4 class="finalTotal"> 
                  $${totalCost}.00
             </h4>

            
             `;
 }


// Increase Decrease and remove
let increaseItemClick=document.querySelectorAll('.increaseItems');


for(let i=0;i<increaseItemClick.length;i++){         
   increaseItemClick[i].addEventListener('click',event=>{

                     let onClickIncrease=event.target;
                     location.reload();
                   
                  let increasedItem=onClickIncrease.parentElement.dataset.title;
                   console.log(onClickIncrease.parentElement);
                   console.log(increasedItem);

                    
                Object.values(itemInCart).map(itemClicked=>{
               
                    if(increasedItem===itemClicked.title && totalCost!=null && numberOfItemsInCart){
                     itemInCart[itemClicked.title].inCart+=1;
                         
                         localStorage.setItem("productIncart",JSON.stringify(itemInCart));
                         numberOfItemsInCart=parseInt(numberOfItemsInCart);
                         localStorage.setItem('itemsInCart', numberOfItemsInCart+1);
                         totalCost=parseInt(totalCost);

                         localStorage.setItem("cartTotal", totalCost+itemClicked.price); 


                    }
                   })
            })

   
   

             }//end of for loop
//decrese items----------------------------
let decreaseItemClick=document.querySelectorAll('.decreaseItems');
for(let i=0;i<decreaseItemClick.length;i++){         
   decreaseItemClick[i].addEventListener('click',event=>{

                     let onClickDecrease=event.target;
                     location.reload();
                     let decreasedItem=onClickDecrease.parentElement.dataset.title;
                    // console.log(onClickDecrease.parentElement);
                    // console.log(decreasedItem);
  
                    
                Object.values(itemInCart).map(itemClicked=>{
                  if(decreasedItem===itemClicked.title && totalCost!=null && numberOfItemsInCart){
                     
                     itemInCart[itemClicked.title].inCart-=1;
                         
                         localStorage.setItem("productIncart",JSON.stringify(itemInCart));
                       
                         numberOfItemsInCart=parseInt(numberOfItemsInCart);
                         localStorage.setItem('itemsInCart', numberOfItemsInCart-itemClicked.inCart);
                         totalCost=parseInt(totalCost);

                         localStorage.setItem("cartTotal", totalCost-itemClicked.price); 


                    }
                   
                  })
         
             })
            }//end of if statement
//remove items-------------------


let removeItemClick=document.querySelectorAll('.remove');
for(let i=0;i<removeItemClick.length;i++){         
   removeItemClick[i].addEventListener('click',event=>{

                     let onClickRemove=event.target;
                     location.reload();
                     let removedItem=onClickRemove.parentElement.dataset.title;
                    let removedItemOnClick=onClickRemove;
                    removedItemOnClick.parentElement.parentElement.remove();
                    
                   
  
                    
                Object.values(itemInCart).map(itemClicked=>{
                  if(removedItem===itemClicked.title && totalCost!=null && numberOfItemsInCart){
                     
                    let previousInCartItems=itemClicked.inCart;
                    itemInCart[itemClicked.title].inCart-=itemClicked.inCart;
                
                         localStorage.setItem("productIncart",JSON.stringify(itemInCart));
                   

                         localStorage.setItem("newProductIncart",JSON.stringify(itemInCart));

                       
                         numberOfItemsInCart=parseInt(numberOfItemsInCart);
                         localStorage.setItem('itemsInCart', numberOfItemsInCart-previousInCartItems);
                         totalCost=parseInt(totalCost);

                         localStorage.setItem("cartTotal", totalCost-itemClicked.price*previousInCartItems); 
                         itemInCart[itemClicked.title].inCart-=previousInCartItems;
                         


                    }
                   
                  })
         
             })
            }
 }
 
 
displayCart();






