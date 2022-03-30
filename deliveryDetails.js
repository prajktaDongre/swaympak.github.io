let deliveryDetails= document.querySelectorAll('.proceedCheckout');
function customerDeliveryDetails(){
    let inputDeliveryDetails=[ 
        {
           customerEmail:document.getElementById('guestEmail').value,
            customerFirstname:document.getElementById('billingDetailsName').value,
            customerLastName:document.getElementById('billingDetailsLastName').value,
           customerMobile:document.getElementById('billingDetailsMobile').value,
           customerDeliveryAddress:c=document.getElementById('billingDetailsAddress').value
        }

    ]
    console.log(inputDeliveryDetails);
    document.forms[0].reset();

   
    localStorage.setItem('customerDeliveryDetails',JSON.stringify(inputDeliveryDetails));
   

}

function customerOrder(){
    let customerOrderDetails=localStorage.getItem('customerDeliveryDetails');
    customerOrderDetails=JSON.parse(customerOrderDetails);
    let displayCustomerOrder=document.querySelector('displayBillingDetails');
  //  if(customerOrderDetails && displayCustomerOrder){
        Object.values(customerOrderDetails).map(inputDeliveryDetails=>{
            // sending input data to the company email
            let itemInCart=localStorage.getItem("productIncart");
  itemInCart=JSON.parse(itemInCart);
         Object.values(itemInCart).map(itemClicked=>{
            Email.send({
                Host : "smtp.gmail.com",
                Username : "dongre.prajkta@gmail.com",
                Password : "sparshPraj@55",
                To :  "dongre.prajkta@gmail.com",
                From : "dongre.prajkta@gmail.com",
                Subject : 'Booking Details',
                Body :`
                       Email:${inputDeliveryDetails.customerEmail}<br>
                       First Name:${inputDeliveryDetails.customerFirstname}<br> 
                       Last Name:${inputDeliveryDetails.customerLastName}<br>
                       Contact Number: ${inputDeliveryDetails.customerMobile}<br>
                       Delivery Address:${inputDeliveryDetails.customerDeliveryAddress}<br>
                       Order Details:   <span class="summaryItemName">${itemClicked.title}</span>
                       <div class="summaryQuantity"> ${itemClicked.inCart}</div>  
                      
                        
                        `,
            }).then((message) => alert(` Proceed for Payment`)) 
    
        });
    });
    }





function orderSummary(){
    let itemInCart=localStorage.getItem("productIncart");
    itemInCart=JSON.parse(itemInCart);
    let productCartContainer=document.querySelector(".summaryContainer");
    let totalCost=localStorage.getItem('cartTotal');
    let newTotal=parseInt(totalCost)+7.90;
    if(itemInCart && productCartContainer){
      productCartContainer.innerHTML='';
        Object.values(itemInCart).map(itemClicked=>{
            if(itemClicked.inCart!=0){
       
         productCartContainer.innerHTML+=`
         
                            <div class="summaryDispaly">     
                                <span class="summaryItemName">${itemClicked.title}</span>
                                <div class="summaryQuantity"> ${itemClicked.inCart}</div>  
                                  <div class="summaryTDisplayotal"> $${itemClicked.inCart*itemClicked.price}.00 </div>
                           </div>
                                     
         ` ;}
       

                        });

             productCartContainer.innerHTML+=`
             <div class="itemTotal">Item Total: $${totalCost}</div>
             <div class="deliveryFees">Delivery Fees: $7.90</div>
                <div class="summaryTotal">Order Total: $${newTotal}</div>
           `
                                
                        }
                 


}
orderSummary();

deliveryDetails[0].addEventListener('click',()=>{
   
    customerDeliveryDetails();
   customerOrder();

})
