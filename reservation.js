var reservationDetails= document.querySelectorAll('.book');


function customerInputDetails(){
   let customerDetails=[
      {    customerInputName:document.getElementById('customerName').value,
      customerInputEmail:document.getElementById('customerEmailId').value,
     reservationDate:document.getElementById('selectedDate').value,
     reservationTime:document.getElementById('timeSelected').value,
     numberOfpeople:document.getElementById('persons').value
      
      }
   
   ]
   
  
   document.forms[0].reset();
   
 
 localStorage.setItem('reservationDetail',JSON.stringify(customerDetails));  
}

function displayReservationDetails(){
  
         let displayCustomerDetails=localStorage.getItem("reservationDetail");
         displayCustomerDetails=JSON.parse(displayCustomerDetails);
       
         let displayNotificationContainer=document.querySelector('.displayNotification');
        
          console.log(displayCustomerDetails);
          if(displayCustomerDetails&&displayNotificationContainer){

            Object.values(displayCustomerDetails).map(customerDetails=>{

               displayNotificationContainer.innerHTML=`
               <div class="displayNotification">
               <h2> Hello ${customerDetails.customerInputName}</h2>
               
                 <p> Your reservation is booked for  ${customerDetails.reservationDate} at ${customerDetails.reservationTime}
          for ${customerDetails.numberOfpeople}</p>
                 
                  
               </div>   
               `;
               Email.send({// sending input data to the company email
                  Host : "smtp.gmail.com",
                  Username : "dongre.prajkta@gmail.com",
                  Password : "sparshPraj@55",
                  To :  "dongre.prajkta@gmail.com",
                  From : "dongre.prajkta@gmail.com",
                  Subject : 'Booking Details',
                  Body :`Name:${customerDetails.customerInputName}<br> 
                         Email:${customerDetails.customerInputEmail}<br>
                         Reservation Date:${customerDetails.reservationDate}<br>
                         Reservation Time: ${customerDetails.reservationTime}<br>
                         Number of People:${customerDetails.numberOfpeople}
                          `,
              }).then((message) => alert(` Hello ${customerDetails.customerInputName}
               
               Your reservation is booked for  ${customerDetails.reservationDate} at ${customerDetails.reservationTime}
       for ${customerDetails.numberOfpeople} people.`)) 
              

            });
          }
         }
 /*function sendNotificationToMe(displayNotificationContainer){
      // customerDetails is not accessibe outside the container
      Email.send({
         Host : "smtp.gmail.com",
         Username : "dongre.prajkta@gmail.com",
         Password : "wifdvrclnrsgitwl",
         To :  "dongre.prajkta@gmail.com",
         From : "dongre.prajkta@gmail.com",
         Subject : 'Booking Details',
         Body :`Name:${customerDetails.customerInputName}<br> 
                Email:${customerDetails.customerInputEmail}<br>
                Reservation Date:${customerDetails.reservationTime}<br>
                Reservation Time: ${customerDetails.reservationTime}<br>
                Number of People:${customerDetails.numberOfpeople}
                 `,
     }).then((message) => alert('Your table is booked'))
     
   }
*/

   reservationDetails[0].addEventListener('click', ()=>{
   customerInputDetails();
displayReservationDetails();
//sendNotificationToMe();
  
 
})

    
      