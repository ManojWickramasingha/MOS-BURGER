document.getElementById("menubarbtn").addEventListener("mouseenter", active);
document.getElementById("menubarbtn").addEventListener("click", inactive);

let card;

function active() {
  document.getElementById("menubar").style.display = "block";
}

function inactive() {
  document.getElementById("menubar").style.display = "none";
}

document.getElementById("searchbtn").addEventListener("click", loadData);

function loadData() {
  card = "";
  let itemName = document.getElementById("searchItem").value.toLowerCase();
  console.log(itemName);
  switch (itemName) {
    case "burgers":
      let burgers = DB[0];
      console.log(burgers);

      burgers.forEach((burger) => {
        card += `<div class="card">
            <div class="pic">
              <img src="${burger.imageUrl}" alt="" class="img" />
            </div>
            <div class="data">
              <div class="rate">
                <p>15%</p>
                <img src="assest/img/starIcon.png" alt="star" />
              </div>
              <div class="itemName">
                <span class="details">${burger.name}</span>
                <br />
                <span class="details">${burger.size}</span>

                <br />
                <span class="stock">Stock | code</span>
                <br />
                <span class="details">${burger.stoke} | ${burger.itemCode}</span>
                <hr style="width: 100%" />
                <div class="price">
                  <span>${burger.price}</span>
                  <img src="assest/img/plus icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>`;
      });
      document.getElementById("cardmain").innerHTML = card;
      break;
    case "submarines":
      let submarines = DB[1];
      submarines.forEach((Submarine) => {
        card += `<div class="card">
            <div class="pic">
              <img src="${Submarine.imageUrl}" alt="" class="img" />
            </div>
            <div class="data">
              <div class="rate">
                <p>15%</p>
                <img src="assest/img/starIcon.png" alt="star" />
              </div>
              <div class="itemName">
                <span class="details">${Submarine.name}</span>
                <br />
                <span class="details">${Submarine.size}</span>

                <br />
                <span class="stock">Stock | code</span>
                <br />
                <span class="details">${Submarine.stoke} | ${Submarine.itemCode}</span>
                <hr style="width: 100%" />
                <div class="price">
                  <span>${Submarine.price}</span>
                  <img src="assest/img/plus icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>`;
      });
      document.getElementById("cardmain").innerHTML = card;
      break;
    case "fries":
      let fries = DB[2];
      fries.forEach((frie) => {
        card += `<div class="card">
            <div class="pic">
              <img src="${frie.imageUrl}" alt="" class="img" />
            </div>
            <div class="data">
              <div class="rate">
                <p>15%</p>
                <img src="assest/img/starIcon.png" alt="star" />
              </div>
              <div class="itemName">
                <span class="details">${frie.name}</span>
                <br />
                <span class="details">${frie.size}</span>

                <br />
                <span class="stock">Stock | code</span>
                <br />
                <span class="details">${frie.stoke} | ${frie.itemCode}</span>
                <hr style="width: 100%" />
                <div class="price">
                  <span>${frie.price}</span>
                  <img src="assest/img/plus icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>`;
      });
      document.getElementById("cardmain").innerHTML = card;
      break;
    case "pasta":
      let pastas = DB[3];
      pastas.forEach((pasta) => {
        card += `<div class="card">
            <div class="pic">
              <img src="${pasta.imageUrl}" alt="" class="img" />
            </div>
            <div class="data">
              <div class="rate">
                <p>15%</p>
                <img src="assest/img/starIcon.png" alt="star" />
              </div>
              <div class="itemName">
                <span class="details">${pasta.name}</span>
                <br />
                <span class="details">${pasta.size}</span>

                <br />
                <span class="stock">Stock | code</span>
                <br />
                <span class="details">${pasta.stoke} | ${pasta.itemCode}</span>
                <hr style="width: 100%" />
                <div class="price">
                  <span>${pasta.price}</span>
                  <img src="assest/img/plus icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>`;
      });
      document.getElementById("cardmain").innerHTML = card;
      break;
    case "chicken":
      let chickens = DB[4];
      chickens.forEach((chicken) => {
        card += `<div class="card">
            <div class="pic">
              <img src="${chicken.imageUrl}" alt="" class="img" />
            </div>
            <div class="data">
              <div class="rate">
                <p>15%</p>
                <img src="assest/img/starIcon.png" alt="star" />
              </div>
              <div class="itemName">
                <span class="details">${chicken.name}</span>
                <br />
                <span class="details">${chicken.size}</span>

                <br />
                <span class="stock">Stock | code</span>
                <br />
                <span class="details">${chicken.stoke} | ${chicken.itemCode}</span>
                <hr style="width: 100%" />
                <div class="price">
                  <span>${chicken.price}</span>
                  <img src="assest/img/plus icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>`;
      });
      document.getElementById("cardmain").innerHTML = card;
      break;
    case "beverages":
      let beverages = DB[5];
      beverages.forEach((beverage) => {
        card += `<div class="card">
          <div class="pic">
            <img src="${beverage.imageUrl}" alt="" class="img" />
          </div>
          <div class="data">
            <div class="rate">
              <p>15%</p>
              <img src="assest/img/starIcon.png" alt="star" />
            </div>
            <div class="itemName">
              <span class="details">${beverage.name}</span>
              <br />
              <span class="details">${beverage.size}</span>

              <br />
              <span class="stock">Stock | code</span>
              <br />
              <span class="details">${beverage.stoke} | ${beverage.itemCode}</span>
              <hr style="width: 100%" />
              <div class="price">
                <span>${beverage.price}</span>
                <img src="assest/img/plus icon.png" alt="" />
              </div>
            </div>
          </div>
        </div>`;
      });
      document.getElementById("cardmain").innerHTML = card;
      break;
    default:
      alert("Invalide Item ..");
  }
}

const DB = [
  (Burgers = [
    {
      name: "Classic Burger",
      size: "(Large)",
      price: 750.0,
      itemCode: "B1001",
      stoke: 8,
      discount: "0%",
      imageUrl: "assest/img/classicBurger(large).png",
    },
    {
      name: "Classic Burger",
      size: "(Regular)",
      price: 1500.0,
      itemCode: "B1002",
      stoke: 10,
      discount: "15%",
      imageUrl: "assest/img/classicBurger(regular).png",
    },
    {
      name: "Turkey Burger",
      size: "(...)",
      price: 1600.0,
      itemCode: "B1003",
      stoke: 5,
      discount: "0%",
      imageUrl: "assest/img/Turkey Burger.png",
    },
    {
      name: "Chicken Burger",
      size: "(Large)",
      price: 1400.0,
      itemCode: "B1004",
      stoke: 12,
      discount: "0%",
      imageUrl: "assest/img/Chicken_Burger.png",
    },
    {
      name: "Chicken Burger",
      size: "(Regular)",
      price: 800.0,
      itemCode: "B1005",
      stoke: 12,
      discount: "20%",
      imageUrl: "assest/img/Chicken_Burger(regular).png",
    },
    {
      name: "Cheese Burger",
      size: "(Large)",
      price: 1000.0,
      itemCode: "B1006",
      stoke: 12,
      discount: "20%",
      imageUrl: "assest/img/Cheese_Burger.png",
    },
    {
      name: "Cheese Burger",
      size: "(Regular)",
      price: 600.0,
      itemCode: "B1007",
      stoke: 11,
      discount: "0%",
      imageUrl: "assest/img/Cheese_Burger_regula.png",
    },
    {
      name: "Bacon Burger",
      size: "()",
      price: 650.0,
      itemCode: "B1008",
      stoke: 9,
      discount: "15%",
      imageUrl: "assest/img/Bacon_Burger.png",
    },
    {
      name: "Shawarma Burger",
      size: "()",
      price: 800.0,
      itemCode: "B1009",
      stoke: 9,
      discount: "0%",
      imageUrl: "assest/img/Shawarma_Burger.png",
    },
    {
      name: "Olive Burger",
      size: "()",
      price: 1800.0,
      itemCode: "B1010",
      stoke: 6,
      discount: "0%",
      imageUrl: "assest/img/Olive_Burger.png",
    },
    {
      name: "Double-Cheese Burger",
      size: "()",
      price: 1250.0,
      itemCode: "B1012",
      stoke: 7,
      discount: "20%",
      imageUrl: "assest/img/Double-Cheese_Burger.png",
    },
  ]),
  (Submarines = [
    {
      name: "Crispy Chicken Submarine",
      size: "(Large)",
      price: 2000.0,
      itemCode: "B1016",
      stoke: 7,
      discount: "0%",
      imageUrl: "assest/img/Crispy_Chicken_Submarine.png",
    },
    {
      name: "Crispy Chicken Submarine",
      size: "(Regular)",
      price: 1500.0,
      itemCode: "B1017",
      stoke: 5,
      discount: "0%",
      imageUrl: "assest/img/Crispy_Chicken_Submarine (Regular).png",
    },
    {
      name: "Chicken Submarine",
      size: "(Large)",
      price: 1800.0,
      itemCode: "B1018",
      stoke: 15,
      discount: "20%",
      imageUrl: "assest/img/Chicken_Submarine.png",
    },
    {
      name: "Chicken Submarine",
      size: "(Regular)",
      price: 1400.0,
      itemCode: "B1019",
      stoke: 15,
      discount: "0%",
      imageUrl: "assest/img/Chicken_Submarine(Regular).png",
    },
    {
      name: "Grinder Submarine",
      size: "()",
      price: 2300.0,
      itemCode: "B1020",
      stoke: 14,
      discount: "0%",
      imageUrl: "assest/img/Grinder_Submarine.png",
    },
    {
      name: "Cheese Submarine",
      size: "()",
      price: 2200.0,
      itemCode: "B1021",
      stoke: 11,
      discount: "0%",
      imageUrl: "assest/img/Cheese_Submarine.png",
    },
    {
      name: "Double Cheese  Chicken Submarine",
      size: "()",
      price: 1900.0,
      itemCode: "B1022",
      stoke: 13,
      discount: "16%",
      imageUrl: "assest/img/Double_Cheese_ Chicken Submarine.png",
    },
    {
      name: "Special Horgie Submarine",
      size: "()",
      price: 2800.0,
      itemCode: "B1023",
      stoke: 13,
      discount: "0%",
      imageUrl: "assest/img/Special_Horgie_Submarine.png",
    },
    {
      name: "MOS Special Submarine",
      size: "()",
      price: 3000.0,
      itemCode: "B1024",
      stoke: 19,
      discount: "0%",
      imageUrl: "assest/img/Double_Cheese_ Chicken Submarine.png",
    },
  ]),
  (Fries = [
    {
      name: "Steak Fries",
      size: "(Large)",
      price: 1200.0,
      itemCode: "B1025",
      stoke: 9,
      discount: "0%",
      imageUrl: "assest/img/Steak_Fries (Medium).png",
    },
    {
      name: "Steak Fries",
      size: "(Medium)",
      price: 600.0,
      itemCode: "B1026",
      stoke: 7,
      discount: "0%",
      imageUrl: "assest/img/Steak_Fries.png",
    },
    {
      name: "French Fries",
      size: "(Large)",
      price: 800.0,
      itemCode: "B1027",
      stoke: 5,
      discount: "0%",
      imageUrl: "assest/img/French_Fries (Large).png",
    },
    {
      name: "French Fries",
      size: "(Medium)",
      price: 650.0,
      itemCode: "B1028",
      stoke: 4,
      discount: "0%",
      imageUrl: "assest/img/French_Fries_me.png",
    },
    {
      name: "French Fries",
      size: "(Small)",
      price: 450.0,
      itemCode: "B1029",
      stoke: 10,
      discount: "0%",
      imageUrl: "assest/img/French_Fries(small).png",
    },
    {
      name: "Sweet Potato Fries",
      size: "(Large)",
      price: 600.0,
      itemCode: "B1030",
      stoke: 12,
      discount: "0%",
      imageUrl: "assest/img/Sweet_Potato_Fries.png",
    },
  ]),
  (Pasta = [
    {
      name: "Chicken n Cheese Pasta",
      size: "()",
      price: 1600.0,
      itemCode: "B1031",
      stoke: 6,
      discount: "15%",
      imageUrl: "assest/img/Chicken_n_Cheese Pasta.png",
    },
    {
      name: "Chicken Penne Pasta",
      size: "()",
      price: 1700.0,
      itemCode: "B1032",
      stoke: 5,
      discount: "0%",
      imageUrl: "assest/img/Chicken_Penne_Pasta.png",
    },
    {
      name: "Ground Turkey Pasta Bake",
      size: "()",
      price: 2900.0,
      itemCode: "B1033",
      stoke: 20,
      discount: "10%",
      imageUrl: "assest/img/Ground_Turkey_Pasta Bake.png",
    },
    {
      name: "Creamy Shrimp Pasta",
      size: "()",
      price: 2000.0,
      itemCode: "B1034",
      stoke: 12,
      discount: "0%",
      imageUrl: "assest/img/Creamy_Shrimp_Pasta.png",
    },
    {
      name: "Lemon Butter Pasta",
      size: "()",
      price: 1950.0,
      itemCode: "B1035",
      stoke: 5,
      discount: "0%",
      imageUrl: "assest/img/Lemon_Butter_Pasta.png",
    },
    {
      name: "Tagliatelle Pasta",
      size: "()",
      price: 2400.0,
      itemCode: "B1036",
      stoke: 3,
      discount: "1%",
      imageUrl: "assest/img/Tagliatelle_Pasta.png",
    },
    {
      name: "Baked Ravioli",
      size: "()",
      price: 2000.0,
      itemCode: "B1037",
      stoke: 10,
      discount: "1%",
      imageUrl: "assest/img/Baked_Ravioli.png",
    },
  ]),
  (Chicken = [
    {
      name: "Fried Chicken",
      size: "(medium)",
      price: 2300.0,
      itemCode: "B1039",
      stoke: 11,
      discount: "10%",
      imageUrl: "assest/img/Fried_Chicken.png",
    },
    {
      name: "Fried Chicken",
      size: "(small)",
      price: 1200.0,
      itemCode: "B1038",
      stoke: 10,
      discount: "0%",
      imageUrl: "assest/img/Fried_Chicken(small).png",
    },
    {
      name: "Fried Chicken",
      size: "(Large)",
      price: 3100.0,
      itemCode: "B1040",
      stoke: 5,
      discount: "5%",
      imageUrl: "assest/img/Fried_Chicken(Large).png",
    },
    {
      name: "Hot Wings",
      size: "(Large)",
      price: 2400.0,
      itemCode: "B1041",
      stoke: 8,
      discount: "0%",
      imageUrl: "assest/img/Hot_Wings.png",
    },
    {
      name: "Devilled Chicken",
      size: "(Large)",
      price: 900.0,
      itemCode: "B1042",
      stoke: 20,
      discount: "0%",
      imageUrl: "assest/img/Devilled_Chicken.png",
    },
    {
      name: "BBQ Chicken",
      size: "(Large)",
      price: 2100.0,
      itemCode: "B1043",
      stoke: 20,
      discount: "0%",
      imageUrl: "assest/img/BBQ_Chicken.png",
    },
  ]),
  (Beverages = [
    {
      name: "Pepsi",
      size: "(330ml)",
      price: 990.0,
      itemCode: "B1044",
      stoke: 25,
      discount: "5%",
      imageUrl: "assest/img/Pepsi_r.png",
    },
    {
      name: "Coca-Cola",
      size: "(330ml)",
      price: 1230.0,
      itemCode: "B1045",
      stoke: 25,
      discount: "0%",
      imageUrl: "assest/img/Coca-Cola_r.png",
    },
    {
      name: "Sprite",
      size: "(330ml)",
      price: 1500.0,
      itemCode: "B1046",
      stoke: 30,
      discount: "3%",
      imageUrl: "assest/img/Sprite_r.png",
    },
    {
      name: "Mirinda",
      size: "(330ml)",
      price: 850.0,
      itemCode: "B1047",
      stoke: 30,
      discount: "7%",
      imageUrl: "assest/img/Mirinda_r.png",
    },
  ]),
];

let items = document.getElementsByClassName("item");
console.log(items);

items[0].addEventListener("click", () => {
  location.href = "index.html";
});

items[1].addEventListener("click", () => {
  console.log("in order");
  window.location.href = "pages/order.html";
});

items[2].addEventListener("click", () => {
  location.href = "pages/customer.html";
});

items[3].addEventListener("click", () => {
  location.href = "pages/report.html";
});

items[4].addEventListener("click", () => {
  location.href = "pages/item.html";
});
