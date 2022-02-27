const creator = {
  firstName: "Ilya",
  surname: "Rogov",
  age: 18,
  place: "Nur-Sultan",
  fullName: function() {
      return "<em>--- "+this.firstName + " " + this.surname+" ---</em>";
  },
  phrasePerson: function() {
      return "If it works, then don't touch it, otherwise, it will be worse.";
  },
  aboutMe: function () {
      return "Very interesting information about me, but I'm too lazy ;)";
  }
};

document.querySelector("#testimonials h2").innerHTML = creator.phrasePerson();
document.querySelector("#testimonials h5").innerHTML = creator.fullName();
document.querySelector("#testimonials p").innerHTML = creator.aboutMe();
