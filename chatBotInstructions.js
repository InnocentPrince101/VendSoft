let text = document.getElementById('text');
let send = document.getElementById('send');
let myMessage = document.getElementById('my_message');
let ul = document.getElementById('ul');
let inMessage = document.getElementById('in_message');

send.addEventListener('click', function () {
    myMessage.innerHTML += `<p class="my_message">${text.value}</p>`;
    if (my.myMessage.value == '1') {
        inMessage.innerHTML += `<p class="in_message">Hello I am chatbot</p>`
    } else {
        
    }
    // <p class="in_message">Hello I am chatbot<br>
    //             Please choose out of the numbers:
    //             <ul id="ul" style="list-style: none;">
    //                 <li>1 to buy</li>
    //                 <li>2 to sell</li>
    //                 <li>3 to advertise</li>
    //             </ul>
    //         </p>
})