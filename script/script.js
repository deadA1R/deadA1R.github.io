window.onload = function() {
    var year = new Date().getFullYear();
    document.getElementById("year").textContent = year;
};

function makeCall() {
    var phoneNumber = "+77079038034";
    window.location.href = "tel:" + phoneNumber;
}

function sendMessage() {
    var phoneNumber = "+77057431988";
    var message = encodeURIComponent("Здравствуйте, у меня сломалась машина. Помогите мне!");
    window.location.href = "https://wa.me/" + phoneNumber + "?text=" + message;
  }

  