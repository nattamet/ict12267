const games = [
  {
    title: "Monster Hunter Wilds",
    price: "฿1,799.00",
    mainImg: "img/Mon.jpg",
    thumbnails: ["img/M1.jpg", "img/M2.jpg", "img/M3.jpg"]
  },
  {
    title: "Elden Ring",
    price: "฿1,490.00",
    mainImg: "img/Elden.jpg",
    thumbnails: ["img/E1.jpg", "img/E2.jpg", "img/E3.jpg"]
  },
  {
    title: "REPO",
    price: "฿220.00",
    mainImg: "img/REPO.jpg",
    thumbnails: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGilWV1K-TUNRyf6Zd74zy2FFgT7CVQ86D3w&s",
      "https://i.ytimg.com/vi/tS9DLw_BKQA/maxresdefault.jpg",
      "https://cdn.mos.cms.futurecdn.net/Bn6Jz9YTFQDHNwA8bd956H.jpg"
    ]
  }
];

const techs = [
  {
    title: "Playstation 5",
    price: "฿12,900.00",
    mainImg: "img/p5.jpg",
    thumbnails: ["img/images.jpg", "img/images (2).jpg", "img/GXIAxHOXYAEPH9G.jpg"]
  },
  {
    title: " DRAGONFLY P1 PRO MAX",
    price: "฿1,990.00",
    mainImg: "img/VXE8.WEBP",
    thumbnails: ["img/VXE6.jpg", "img/VXE1.jpg", "img/VXE4.jpg"] 
  },
  {
      title: "META QUEST 3",
      price: "฿23,990.00",
      mainImg: "img/vr3.jpg",
      thumbnails: ["img/VR5 (4).jpg", "img/VR5 (3).jpg", "img/VR5 (2).jpg"] 
    },
];

let currentGameIndex = 0;
let currentTechIndex = 0;

const titleEl = document.getElementById("game-title");
const priceEl = document.getElementById("price");
const mainImgEl = document.getElementById("main-img");
const thumbsEl = document.getElementById("thumbs");

function renderGame(index) {
  const game = games[index];

  mainImgEl.classList.add("fade-out");

  setTimeout(() => {
    titleEl.textContent = game.title;
    priceEl.textContent = game.price;

    const newImg = new Image();
    newImg.src = game.mainImg;
    newImg.onload = () => {
      mainImgEl.src = newImg.src;
      mainImgEl.classList.remove("fade-out");
    };

    thumbsEl.innerHTML = "";
    game.thumbnails.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      thumbsEl.appendChild(img);
    });
  }, 300);

}
document.querySelector(".prev").addEventListener("click", () => {
  currentGameIndex = (currentGameIndex - 1 + games.length) % games.length;
  renderGame(currentGameIndex);
});

document.querySelector(".next").addEventListener("click", () => {
  currentGameIndex = (currentGameIndex + 1) % games.length;
  renderGame(currentGameIndex);
});

const techTitleEl = document.getElementById("tech-title");
const techPriceEl = document.getElementById("tech-price");
const techMainImgEl = document.getElementById("tech-main-img");
const techThumbsEl = document.getElementById("tech-thumbs");

function renderTech(index) {
  const tech = techs[index];

  techMainImgEl.classList.add("fade-out");

  setTimeout(() => {
    techTitleEl.textContent = tech.title;
    techPriceEl.textContent = tech.price;

    const newImg = new Image();
    newImg.src = tech.mainImg;
    newImg.onload = () => {
      techMainImgEl.src = newImg.src;
      techMainImgEl.classList.remove("fade-out");
    };

    techThumbsEl.innerHTML = "";
    tech.thumbnails.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      techThumbsEl.appendChild(img);
    });
  }, 300);
}
document.querySelector(".tech-prev").addEventListener("click", () => {
  currentTechIndex = (currentTechIndex - 1 + techs.length) % techs.length;
  renderTech(currentTechIndex);
});

document.querySelector(".tech-next").addEventListener("click", () => {
  currentTechIndex = (currentTechIndex + 1) % techs.length;
  renderTech(currentTechIndex);
});

renderGame(currentGameIndex);
renderTech(currentTechIndex);


