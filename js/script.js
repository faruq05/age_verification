function checkAge() {
    var ageInput = document.getElementById("age").value;
    var statusMsg = document.getElementById("statusMsg");

    if (ageInput !== "" && !isNaN(ageInput)) {
        var age = parseInt(ageInput);

        if (age >= 18) {
            if (age > 150) {
                statusMsg.innerHTML = '<div class="status_msg">What are you? Immortal!!</div>';
            }
            else if (age == 100) {
                statusMsg.innerHTML = '<div class="status_msg">Wow Century!! You Are an elderly person</div>';
            } else if (age > 100) {
                statusMsg.innerHTML = '<div class="status_msg">Beyond Century!! You Are an elderly person</div>';
            }
            else {
                statusMsg.innerHTML = '<div class="status_msg">You are an adult</div>';
            }
        }
        else if (age <= 0) {
            statusMsg.innerHTML = '<div class="status_msg">Please Enter a Valid Age</div>';
        }
        else {
            statusMsg.innerHTML = '<div class="status_msg">You are a Child</div>';
        }
    }
} 
