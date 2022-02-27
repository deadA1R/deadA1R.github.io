const news_1 = {
  title: "&#34;Problem 2022&#34;: Microsoft Exchange servers are not delivering mail",
  data: "<em>2/01/2021 </em>",
  type: "World, IT",
  image: "image/news/n_2.png",
  subtitle: "What is the main problem?",
  article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus quam vel leo auctor, congue feugiat risus eleifend." +
  " Morbi ac tempor orci. Nullam dignissim id nisi vitae volutpat. Aenean varius cursus libero, et ultricies orci tincidunt non. Etiam id egestas enim." +
   "Etiam quis auctor quam. Nam faucibus risus et molestie pretium. Integer ornare ex vel risus posuere cursus." + "<br> <br>" +
   " In quis elit sit amet ex convallis lobortis vel eu velit. Praesent tincidunt, erat a bibendum convallis, purus mauris viverra diam, ac ornare velit risus ut nunc. In condimentum vulputate lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut vel condimentum quam. Donec vitae enim a elit commodo molestie. Vivamus tellus nisi, cursus nec tellus sed, ullamcorper faucibus lectus. Suspendisse sit amet convallis velit. Integer sapien mi, congue vitae tincidunt nec, finibus vel magna.",
  inputSubtitle: function () {
      return this.type + " &#176; " + this.data;
  }
};

const game_1 = {
  title: "Epic Games users can pick up the Tomb Raider: Trilogy collection for free",
  data: "<em>30/12/2021 </em>",
  type: "Free Games",
  image: "image/game/g_!.jpg",
  subtitle: "How did the players react to this?",
  article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus quam vel leo auctor, congue feugiat risus eleifend." +
  " Morbi ac tempor orci. Nullam dignissim id nisi vitae volutpat. Aenean varius cursus libero, et ultricies orci tincidunt non. Etiam id egestas enim." +
   "Etiam quis auctor quam. Nam faucibus risus et molestie pretium. Integer ornare ex vel risus posuere cursus." + "<br> <br>" +
   " In quis elit sit amet ex convallis lobortis vel eu velit. Praesent tincidunt, erat a bibendum convallis, purus mauris viverra diam, ac ornare velit risus ut nunc. In condimentum vulputate lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut vel condimentum quam. Donec vitae enim a elit commodo molestie. Vivamus tellus nisi, cursus nec tellus sed, ullamcorper faucibus lectus. Suspendisse sit amet convallis velit. Integer sapien mi, congue vitae tincidunt nec, finibus vel magna.",
  inputSubtitle: function () {
      return this.type + " &#176; " + this.data;
  }
};

const movie_1 = {
  title: "Metacritic rated the best films",
  data: "<em>31/12/2021 </em>",
  type: "Rating, 2021",
  image: "image/movie/m_1.png",
  subtitle: "The results of the critics' assessment are surprising",
  article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus quam vel leo auctor, congue feugiat risus eleifend." +
  " Morbi ac tempor orci. Nullam dignissim id nisi vitae volutpat. Aenean varius cursus libero, et ultricies orci tincidunt non. Etiam id egestas enim." +
   "Etiam quis auctor quam. Nam faucibus risus et molestie pretium. Integer ornare ex vel risus posuere cursus." + "<br> <br>" +
   " In quis elit sit amet ex convallis lobortis vel eu velit. Praesent tincidunt, erat a bibendum convallis, purus mauris viverra diam, ac ornare velit risus ut nunc. In condimentum vulputate lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut vel condimentum quam. Donec vitae enim a elit commodo molestie. Vivamus tellus nisi, cursus nec tellus sed, ullamcorper faucibus lectus. Suspendisse sit amet convallis velit. Integer sapien mi, congue vitae tincidunt nec, finibus vel magna.",
  inputSubtitle: function () {
      return this.type + " &#176; " + this.data;
  }
};

anews1();

function anews1() {
  document.getElementById("myImage").src = news_1.image;
  document.getElementById("articleTitle").innerHTML = news_1.title;
  document.getElementById("articleType").innerHTML = news_1.inputSubtitle();
  document.getElementById("SubTitle").innerHTML = news_1.subtitle;
  document.getElementById("articleText").innerHTML = news_1.article;

}

function agame1() {
  document.getElementById("myImage").src = game_1.image;
  document.getElementById("articleTitle").innerHTML = game_1.title;
  document.getElementById("articleType").innerHTML = game_1.inputSubtitle();
  document.getElementById("SubTitle").innerHTML = game_1.subtitle;
  document.getElementById("articleText").innerHTML = game_1.article;
}

function amov1() {
  document.getElementById("myImage").src = movie_1.image;
  document.getElementById("articleTitle").innerHTML = movie_1.title;
  document.getElementById("articleType").innerHTML = movie_1.inputSubtitle();
  document.getElementById("SubTitle").innerHTML = movie_1.subtitle;
  document.getElementById("articleText").innerHTML = movie_1.article;
}
