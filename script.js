
const data = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8KmWqBG4bNH1FihdAHKCTs1PPSmZq8Z0oA&s",
    name: "Wine Buttle",
    price: 125.0,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVf-ylcpI9_LlUF3F7A5O_A-rt0_ovH6U5w&s",
    name: "Santa Bag",
    price: 155.0,
  },
  {
    image: "https://m.media-amazon.com/images/I/51x+vkz0+IL._AC_UY1100_.jpg",
    name: "Santa Cap",
    price: 230.0,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF8YgfvJFrLxllO0wj-5tF7PYxVI6TSNmcV9RL9GmFUK3LU3FhE9zFm1OfDAQK4E16qpc&usqp=CAU",
    name: "Food Gloves",
    price: 60.0,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU4j1-7sEQz7SYeJXujlZ5KbmyMvi8zAOnQvnEZjf5wxcs8PJ_kxWY3kFUYmU3bvpSgdA&usqp=CAU",
    name: "Door Decating",
    price: 115.0,
  },
  {
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpg1JoWgHoCBtfZgYVU7mk36VtUm3QAnZ6cA&s",
    name: "Tree Condle",
    price: 200.0,
  },
  {
    image: "https://images.satu.kz/51598755_w640_h320_statuetka-ded-moroz.jpg",
    name: "Santa",
    price: 150.0,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykeLwX9HBOKdDmje2NqJRJi4EPlORkob0XvCqzIGLR1SyyM7n0C8RmGl_gPaWkbxeBSI&usqp=CAU",
    name: "Decoration Legth",
    price: 120.0,
  },
];

const cardsContainer = document.getElementById("container");

data.forEach((item) => {
  const card = document.createElement("div");
  const cardImage = document.createElement("img");
  const cardName = document.createElement("h2");
  const price = document.createElement("span");

  cardImage.src = item.image;
  cardName.textContent = item.name;
  price.textContent = item.price + "tenge";

  card.appendChild(cardImage);
  card.appendChild(cardName);
  card.appendChild(price);

  cardsContainer.appendChild(card);

  card.classList.add("card");
});

const NUMBER_OF_SNOWFLAKES = 300;
const MAX_SNOWFLAKE_SIZE = 5;
const MAX_SNOWFLAKE_SPEED = 2;
const SNOWFLAKE_COLOUR = "#ddd";
const snowflakes = [];

const canvas = document.createElement("canvas");
canvas.style.position = "absolute";
canvas.style.pointerEvents = "none";
canvas.style.top = "0px";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

const createSnowflake = () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
  color: SNOWFLAKE_COLOUR,
  speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
  sway: Math.random() - 0.5, // next
});

const drawSnowflake = (snowflake) => {
  ctx.beginPath();
  ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
  ctx.fillStyle = snowflake.color;
  ctx.fill();
  ctx.closePath();
};

const updateSnowflake = (snowflake) => {
  snowflake.y += snowflake.speed;
  snowflake.x += snowflake.sway; // next
  if (snowflake.y > canvas.height) {
    Object.assign(snowflake, createSnowflake());
  }
};

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  snowflakes.forEach((snowflake) => {
    updateSnowflake(snowflake);
    drawSnowflake(snowflake);
  });

  requestAnimationFrame(animate);
};

for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
  snowflakes.push(createSnowflake());
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.addEventListener("scroll", () => {
  canvas.style.top = `${window.scrollY}px`;
});

// setInterval(animate, 15);
animate();

const cards = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6EvD5fQE6OXcvhDjdMt00aFHjycs2a7Vezw&s",
    name: "CHRISTMAS GIFTS",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXScGJ94CzGt3ErKCDmelrUk0d5Mi_8J0a3bc_Qm9f9Sl9_6T26PEDmgcMSK6E0johBpQ&usqp=CAU",
    name: "DECORE LIGHTING",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwSGzfkkG5t2Zm27cT9Pf_zxXyZJiZxwd_xQ&s",
    name: "CHRISMAS ORNAMENTS",
  },
  {
    image:
      "https://cs14.pikabu.ru/post_img/big/2023/12/27/6/1703669895135594467.jpg",
    name: "NEW COSTUMES",
  },
];

const newsContainer = document.getElementById("news");

cards.forEach((item) => {
  const cards = document.createElement("div");
  const cardsImage = document.createElement("img");
  const cardsName = document.createElement("h2");

  cardsImage.src = item.image;
  cardsName.textContent = item.name;

  cards.appendChild(cardsImage);
  cards.appendChild(cardsName);

  cardsContainer.appendChild(cards);

  cards.classList.add("cards");
});
