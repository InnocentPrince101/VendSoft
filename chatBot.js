let text = document.getElementById('text');
let send = document.getElementById('send');
let myMessage = document.getElementById('my_message');
let me = document.getElementById('me')

send.addEventListener('click', function () {
    myMessage.innerHTML += `<p style = "height: 30px"; class="my_message">${text.value}</p>`;
    if (text.value == '1'){
        myMessage.innerHTML += '<p style = "height: 30px"; class="in_message">5000 dollars</p><br>'
    } else if (text.value == '2') {
        myMessage.innerHTML += '<p style = "height: 30px;" class="in_message">To buy you must invest</p><br>'
    } else if (text.value == '3') {
        myMessage.innerHTML += '<p style = "height: 53px; margin-top: 30px;" class="in_message">Drop your social media links so we can contact you</p><br>'
    }
    else {
        myMessage.innerHTML += '<p class="in_message">Please, English</p><br>'
    }
    text.value = '';
})
    