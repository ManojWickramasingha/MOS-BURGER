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
  let ordername = document.getElementById("searchItem").value.toLowerCase();
  console.log(ordername);
  const regex = /^o\d{3}$/;
  const regex1 = /^c\d{3}$/;
  let pattern = ordername;
  if (regex.test(ordername)) {
    ordername = true;
  }
  if (regex1.test(pattern)) {
    ordername = true;
  }

  switch (ordername) {
    case "new":
      let orders = OrderDB[0].filter((order) => order.status == "NEW");
      console.log(orders);

      orders.forEach((order) => {
        card += `<div class="card">
            <div class="pic">
              <img src="${order.iconurl}" alt="" class="img" />
            </div>
            <div class="data">
              <div class="rate">
                <p></p>
                <img src="../assest/img/starIcon.png" alt="star" />
              </div>
              <div class="itemName">
                <span class="details">${order.orderID}</span>
                <br />
                <span class="details">${order.CustomerID}</span>

                <br />
                <span class="stock">Date | Time</span>
                <br />
                <span class="details">${order.OrderDate} | ${order.orderTime}</span>
                <hr style="width: 100%" />
                <div class="price">
                  <span>${order.status}</span>
                  <img src="../assest/img/plus icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>`;
      });
      document.getElementById("cardmain").innerHTML = card;
      break;
    case "complete":
      let orders1 = OrderDB[0].filter((order) => order.status == "COMPLETE");
      orders1.forEach((order) => {
        card += `<div class="card">
            <div class="pic">
              <img src="${order.iconurl}" alt="" class="img" />
            </div>
            <div class="data">
              <div class="rate">
                <p></p>
                <img src="../../assest/img/starIcon.png" alt="star" />
              </div>
              <div class="itemName">
                <span class="details">${order.orderID}</span>
                <br />
                <span class="details">${order.CustomerID}</span>

                <br />
                <span class="stock">Date | Time</span>
                <br />
                <span class="details">${order.OrderDate} | ${order.orderTime}</span>
                <hr style="width: 100%" />
                <div class="price">
                  <span>${order.status}</span>
                  <img src="../../assest/img/plus icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>`;
      });
      document.getElementById("cardmain").innerHTML = card;
      break;
    case "progress":
      let orders2 = OrderDB[0].filter((order) => order.status == "PROGRESS");
      orders2.forEach((order) => {
        card += `<div class="card">
            <div class="pic">
              <img src="${order.iconurl}" alt="" class="img" />
            </div>
            <div class="data">
              <div class="rate">
                <p></p>
                <img src="../../assest/img/starIcon.png" alt="star" />
              </div>
              <div class="itemName">
                <span class="details">${order.orderID}</span>
                <br />
                <span class="details">${order.CustomerID}</span>

                <br />
                <span class="stock">Date | Time</span>
                <br />
                <span class="details">${order.OrderDate} | ${order.orderTime}</span>
                <hr style="width: 100%" />
                <div class="price">
                  <span>${order.status}</span>
                  <img src="../../assest/img/plus icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>`;
      });
      document.getElementById("cardmain").innerHTML = card;
      break;
    case /^o\d{3}$/.test(pattern):
      console.log(ordername);
      let PAT = pattern.toUpperCase();
      console.log(PAT);
      let orderById = OrderDB[0].find((order) => order.orderID == PAT);

      console.log(orderById);

      orderById.forEach((order) => {
        card += `<div class="card">
        <div class="pic">
          <img src="${order.iconurl}" alt="" class="img" />
        </div>
        <div class="data">
          <div class="rate">
            <p></p>
            <img src="../../assest/img/starIcon.png" alt="star" />
          </div>
          <div class="itemName">
            <span class="details">${order.orderID}</span>
            <br />
            <span class="details">${order.CustomerID}</span>

            <br />
            <span class="stock">Date | Time</span>
            <br />
            <span class="details">${order.OrderDate} | ${order.orderTime}</span>
            <hr style="width: 100%" />
            <div class="price">
              <span>${order.status}</span>
              <img src="../../assest/img/plus icon.png" alt="" />
            </div>
          </div>
        </div>
      </div>`;
      });
      document.getElementById("cardmain").innerHTML = card;
      break;

    case /^c\d{3}$/.test(pattern):
      let PAT1 = pattern.toUpperCase();
      let orderById1 = OrderDB[0].filter((order) => order.CustomerID == PAT1);
      orderById1.forEach((order) => {
        card += `<div class="card">
          <div class="pic">
            <img src="${order.iconurl}" alt="" class="img" />
          </div>
          <div class="data">
            <div class="rate">
              <p></p>
              <img src="../../assest/img/starIcon.png" alt="star" />
            </div>
            <div class="itemName">
              <span class="details">${order.orderID}</span>
              <br />
              <span class="details">${order.CustomerID}</span>
  
              <br />
              <span class="stock">Date | Time</span>
              <br />
              <span class="details">${order.OrderDate} | ${order.orderTime}</span>
              <hr style="width: 100%" />
              <div class="price">
                <span>${order.status}</span>
                <img src="../../assest/img/plus icon.png" alt="" />
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

let DB = [
  (Burgers = [
    {
      name: "Classic Burger",
      size: "(Large)",
      price: 750.0,
      itemCode: "B1001",
      stoke: 8,
      discount: "0%",
      imageUrl: "../../assest/img/classicBurger(large).png",
    },
    {
      name: "Classic Burger",
      size: "(Regular)",
      price: 1500.0,
      itemCode: "B1002",
      stoke: 10,
      discount: "15%",
      imageUrl: "../../assest/img/classicBurger(regular).png",
    },
    {
      name: "Turkey Burger",
      size: "(...)",
      price: 1600.0,
      itemCode: "B1003",
      stoke: 5,
      discount: "0%",
      imageUrl: "../../assest/img/Turkey Burger.png",
    },
    {
      name: "Chicken Burger",
      size: "(Large)",
      price: 1400.0,
      itemCode: "B1004",
      stoke: 12,
      discount: "0%",
      imageUrl: "../../assest/img/Chicken_Burger.png",
    },
    {
      name: "Chicken Burger",
      size: "(Regular)",
      price: 800.0,
      itemCode: "B1005",
      stoke: 12,
      discount: "20%",
      imageUrl: "../../assest/img/Chicken_Burger(regular).png",
    },
    {
      name: "Cheese Burger",
      size: "(Large)",
      price: 1000.0,
      itemCode: "B1006",
      stoke: 12,
      discount: "20%",
      imageUrl: "../../assest/img/Cheese_Burger.png",
    },
    {
      name: "Cheese Burger",
      size: "(Regular)",
      price: 600.0,
      itemCode: "B1007",
      stoke: 11,
      discount: "0%",
      imageUrl: "../../assest/img/Cheese_Burger_regula.png",
    },
    {
      name: "Bacon Burger",
      size: "()",
      price: 650.0,
      itemCode: "B1008",
      stoke: 9,
      discount: "15%",
      imageUrl: "../../assest/img/Bacon_Burger.png",
    },
    {
      name: "Shawarma Burger",
      size: "()",
      price: 800.0,
      itemCode: "B1009",
      stoke: 9,
      discount: "0%",
      imageUrl: "../../assest/img/Shawarma_Burger.png",
    },
    {
      name: "Olive Burger",
      size: "()",
      price: 1800.0,
      itemCode: "B1010",
      stoke: 6,
      discount: "0%",
      imageUrl: "../../assest/img/Olive_Burger.png",
    },
    {
      name: "Double-Cheese Burger",
      size: "()",
      price: 1250.0,
      itemCode: "B1012",
      stoke: 7,
      discount: "20%",
      imageUrl: "../../assest/img/Double-Cheese_Burger.png",
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
      imageUrl: "../../assest/img/Crispy_Chicken_Submarine.png",
    },
    {
      name: "Crispy Chicken Submarine",
      size: "(Regular)",
      price: 1500.0,
      itemCode: "B1017",
      stoke: 5,
      discount: "0%",
      imageUrl: "../../assest/img/Crispy_Chicken_Submarine (Regular).png",
    },
    {
      name: "Chicken Submarine",
      size: "(Large)",
      price: 1800.0,
      itemCode: "B1018",
      stoke: 15,
      discount: "20%",
      imageUrl: "../../assest/img/Chicken_Submarine.png",
    },
    {
      name: "Chicken Submarine",
      size: "(Regular)",
      price: 1400.0,
      itemCode: "B1019",
      stoke: 15,
      discount: "0%",
      imageUrl: "../../assest/img/Chicken_Submarine(Regular).png",
    },
    {
      name: "Grinder Submarine",
      size: "()",
      price: 2300.0,
      itemCode: "B1020",
      stoke: 14,
      discount: "0%",
      imageUrl: "../../assest/img/Grinder_Submarine.png",
    },
    {
      name: "Cheese Submarine",
      size: "()",
      price: 2200.0,
      itemCode: "B1021",
      stoke: 11,
      discount: "0%",
      imageUrl: "../../assest/img/Cheese_Submarine.png",
    },
    {
      name: "Double Cheese  Chicken Submarine",
      size: "()",
      price: 1900.0,
      itemCode: "B1022",
      stoke: 13,
      discount: "16%",
      imageUrl: "../../assest/img/Double_Cheese_ Chicken Submarine.png",
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
      imageUrl: "../../assest/img/Double_Cheese_ Chicken Submarine.png",
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
      imageUrl: "../../assest/img/Steak_Fries (Medium).png",
    },
    {
      name: "Steak Fries",
      size: "(Medium)",
      price: 600.0,
      itemCode: "B1026",
      stoke: 7,
      discount: "0%",
      imageUrl: "../../assest/img/Steak_Fries.png",
    },
    {
      name: "French Fries",
      size: "(Large)",
      price: 800.0,
      itemCode: "B1027",
      stoke: 5,
      discount: "0%",
      imageUrl: "../../assest/img/French_Fries (Large).png",
    },
    {
      name: "French Fries",
      size: "(Medium)",
      price: 650.0,
      itemCode: "B1028",
      stoke: 4,
      discount: "0%",
      imageUrl: "../../assest/img/French_Fries_me.png",
    },
    {
      name: "French Fries",
      size: "(Small)",
      price: 450.0,
      itemCode: "B1029",
      stoke: 10,
      discount: "0%",
      imageUrl: "../../assest/img/French_Fries(small).png",
    },
    {
      name: "Sweet Potato Fries",
      size: "(Large)",
      price: 600.0,
      itemCode: "B1030",
      stoke: 12,
      discount: "0%",
      imageUrl: "../../assest/img/Sweet_Potato_Fries.png",
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
      imageUrl: "../../assest/img/Chicken_n_Cheese Pasta.png",
    },
    {
      name: "Chicken Penne Pasta",
      size: "()",
      price: 1700.0,
      itemCode: "B1032",
      stoke: 5,
      discount: "0%",
      imageUrl: "../../assest/img/Chicken_Penne_Pasta.png",
    },
    {
      name: "Ground Turkey Pasta Bake",
      size: "()",
      price: 2900.0,
      itemCode: "B1033",
      stoke: 20,
      discount: "10%",
      imageUrl: "../../assest/img/Ground_Turkey_Pasta Bake.png",
    },
    {
      name: "Creamy Shrimp Pasta",
      size: "()",
      price: 2000.0,
      itemCode: "B1034",
      stoke: 12,
      discount: "0%",
      imageUrl: "../../assest/img/Creamy_Shrimp_Pasta.png",
    },
    {
      name: "Lemon Butter Pasta",
      size: "()",
      price: 1950.0,
      itemCode: "B1035",
      stoke: 5,
      discount: "0%",
      imageUrl: "../../assest/img/Lemon_Butter_Pasta.png",
    },
    {
      name: "Tagliatelle Pasta",
      size: "()",
      price: 2400.0,
      itemCode: "B1036",
      stoke: 3,
      discount: "1%",
      imageUrl: "../../assest/img/Tagliatelle_Pasta.png",
    },
    {
      name: "Baked Ravioli",
      size: "()",
      price: 2000.0,
      itemCode: "B1037",
      stoke: 10,
      discount: "1%",
      imageUrl: "../../assest/img/Baked_Ravioli.png",
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
      imageUrl: "../../assest/img/Fried_Chicken.png",
    },
    {
      name: "Fried Chicken",
      size: "(small)",
      price: 1200.0,
      itemCode: "B1038",
      stoke: 10,
      discount: "0%",
      imageUrl: "../../assest/img/Fried_Chicken(small).png",
    },
    {
      name: "Fried Chicken",
      size: "(Large)",
      price: 3100.0,
      itemCode: "B1040",
      stoke: 5,
      discount: "5%",
      imageUrl: "../../assest/img/Fried_Chicken(Large).png",
    },
    {
      name: "Hot Wings",
      size: "(Large)",
      price: 2400.0,
      itemCode: "B1041",
      stoke: 8,
      discount: "0%",
      imageUrl: "../../assest/img/Hot_Wings.png",
    },
    {
      name: "Devilled Chicken",
      size: "(Large)",
      price: 900.0,
      itemCode: "B1042",
      stoke: 20,
      discount: "0%",
      imageUrl: "../../assest/img/Devilled_Chicken.png",
    },
    {
      name: "BBQ Chicken",
      size: "(Large)",
      price: 2100.0,
      itemCode: "B1043",
      stoke: 20,
      discount: "0%",
      imageUrl: "../../assest/img/BBQ_Chicken.png",
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
      imageUrl: "../../assest/img/Pepsi_r.png",
    },
    {
      name: "Coca-Cola",
      size: "(330ml)",
      price: 1230.0,
      itemCode: "B1045",
      stoke: 25,
      discount: "0%",
      imageUrl: "../../assest/img/Coca-Cola_r.png",
    },
    {
      name: "Sprite",
      size: "(330ml)",
      price: 1500.0,
      itemCode: "B1046",
      stoke: 30,
      discount: "3%",
      imageUrl: "../../assest/img/Sprite_r.png",
    },
    {
      name: "Mirinda",
      size: "(330ml)",
      price: 850.0,
      itemCode: "B1047",
      stoke: 30,
      discount: "7%",
      imageUrl: "../../assest/img/Mirinda_r.png",
    },
  ]),
];

let itemDB = [
  {
    name: "Classic Burger",
    size: "(Large)",
    price: 750.0,
    itemCode: "B1001",
    stoke: 8,
    discount: "0%",
    imageUrl: "../../assest/img/classicBurger(large).png",
    expire: "2024-12-28",
  },
  {
    name: "Classic Burger",
    size: "(Regular)",
    price: 1500.0,
    itemCode: "B1002",
    stoke: 10,
    discount: "15%",
    imageUrl: "../../assest/img/classicBurger(regular).png",
    expire: "2024-12-28",
  },
  {
    name: "Turkey Burger",
    size: "(...)",
    price: 1600.0,
    itemCode: "B1003",
    stoke: 5,
    discount: "0%",
    imageUrl: "../../assest/img/Turkey Burger.png",
    expire: "2024-12-28",
  },
  {
    name: "Chicken Burger",
    size: "(Large)",
    price: 1400.0,
    itemCode: "B1004",
    stoke: 12,
    discount: "0%",
    imageUrl: "../../assest/img/Chicken_Burger.png",
    expire: "2024-11-28",
  },
  {
    name: "Chicken Burger",
    size: "(Regular)",
    price: 800.0,
    itemCode: "B1005",
    stoke: 12,
    discount: "20%",
    imageUrl: "../../assest/img/Chicken_Burger(regular).png",
    expire: "2024-10-28",
  },
  {
    name: "Cheese Burger",
    size: "(Large)",
    price: 1000.0,
    itemCode: "B1006",
    stoke: 12,
    discount: "20%",
    imageUrl: "../../assest/img/Cheese_Burger.png",
    expire: "2024-9-28",
  },
  {
    name: "Cheese Burger",
    size: "(Regular)",
    price: 600.0,
    itemCode: "B1007",
    stoke: 11,
    discount: "0%",
    imageUrl: "../../assest/img/Cheese_Burger_regula.png",
    expire: "2025-12-28",
  },
  {
    name: "Bacon Burger",
    size: "()",
    price: 650.0,
    itemCode: "B1008",
    stoke: 9,
    discount: "15%",
    imageUrl: "../../assest/img/Bacon_Burger.png",
    expire: "2024-12-30",
  },
  {
    name: "Shawarma Burger",
    size: "()",
    price: 800.0,
    itemCode: "B1009",
    stoke: 9,
    discount: "0%",
    imageUrl: "../../assest/img/Shawarma_Burger.png",
    expire: "2024-10-12",
  },
  {
    name: "Olive Burger",
    size: "()",
    price: 1800.0,
    itemCode: "B1010",
    stoke: 6,
    discount: "0%",
    imageUrl: "../../assest/img/Olive_Burger.png",
    expire: "2024-11-05",
  },
  {
    name: "Double-Cheese Burger",
    size: "()",
    price: 1250.0,
    itemCode: "B1012",
    stoke: 7,
    discount: "20%",
    imageUrl: "../../assest/img/Double-Cheese_Burger.png",
    expire: "2024-12-08",
  },

  {
    name: "Crispy Chicken Submarine",
    size: "(Large)",
    price: 2000.0,
    itemCode: "B1016",
    stoke: 7,
    discount: "0%",
    imageUrl: "../../assest/img/Crispy_Chicken_Submarine.png",
    expire: "2024-12-07",
  },
  {
    name: "Crispy Chicken Submarine",
    size: "(Regular)",
    price: 1500.0,
    itemCode: "B1017",
    stoke: 5,
    discount: "0%",
    imageUrl: "../../assest/img/Crispy_Chicken_Submarine (Regular).png",
    expire: "2024-11-11",
  },
  {
    name: "Chicken Submarine",
    size: "(Large)",
    price: 1800.0,
    itemCode: "B1018",
    stoke: 15,
    discount: "20%",
    imageUrl: "../../assest/img/Chicken_Submarine.png",
    expire: "2024-12-05",
  },
  {
    name: "Chicken Submarine",
    size: "(Regular)",
    price: 1400.0,
    itemCode: "B1019",
    stoke: 15,
    discount: "0%",
    imageUrl: "../../assest/img/Chicken_Submarine(Regular).png",
    expire: "2024-12-28",
  },
  {
    name: "Grinder Submarine",
    size: "()",
    price: 2300.0,
    itemCode: "B1020",
    stoke: 14,
    discount: "0%",
    imageUrl: "../../assest/img/Grinder_Submarine.png",
    expire: "2024-12-28",
  },
  {
    name: "Cheese Submarine",
    size: "()",
    price: 2200.0,
    itemCode: "B1021",
    stoke: 11,
    discount: "0%",
    imageUrl: "../../assest/img/Cheese_Submarine.png",
    expire: "2024-12-28",
  },
  {
    name: "Double Cheese  Chicken Submarine",
    size: "()",
    price: 1900.0,
    itemCode: "B1022",
    stoke: 13,
    discount: "16%",
    imageUrl: "../../assest/img/Double_Cheese_ Chicken Submarine.png",
    expire: "2024-12-28",
  },
  {
    name: "Special Horgie Submarine",
    size: "()",
    price: 2800.0,
    itemCode: "B1023",
    stoke: 13,
    discount: "0%",
    imageUrl: "assest/img/Special_Horgie_Submarine.png",
    expire: "2024-12-28",
  },
  {
    name: "MOS Special Submarine",
    size: "()",
    price: 3000.0,
    itemCode: "B1024",
    stoke: 19,
    discount: "0%",
    imageUrl: "../../assest/img/Double_Cheese_ Chicken Submarine.png",
    expire: "2024-12-28",
  },

  {
    name: "Steak Fries",
    size: "(Large)",
    price: 1200.0,
    itemCode: "B1025",
    stoke: 9,
    discount: "0%",
    imageUrl: "../../assest/img/Steak_Fries (Medium).png",
    expire: "2024-12-28",
  },
  {
    name: "Steak Fries",
    size: "(Medium)",
    price: 600.0,
    itemCode: "B1026",
    stoke: 7,
    discount: "0%",
    imageUrl: "../../assest/img/Steak_Fries.png",
    expire: "2024-12-28",
  },
  {
    name: "French Fries",
    size: "(Large)",
    price: 800.0,
    itemCode: "B1027",
    stoke: 5,
    discount: "0%",
    imageUrl: "../../assest/img/French_Fries (Large).png",
    expire: "2024-12-28",
  },
  {
    name: "French Fries",
    size: "(Medium)",
    price: 650.0,
    itemCode: "B1028",
    stoke: 4,
    discount: "0%",
    imageUrl: "../../assest/img/French_Fries_me.png",
    expire: "2024-12-28",
  },
  {
    name: "French Fries",
    size: "(Small)",
    price: 450.0,
    itemCode: "B1029",
    stoke: 10,
    discount: "0%",
    imageUrl: "../../assest/img/French_Fries(small).png",
    expire: "2024-12-28",
  },
  {
    name: "Sweet Potato Fries",
    size: "(Large)",
    price: 600.0,
    itemCode: "B1030",
    stoke: 12,
    discount: "0%",
    imageUrl: "../../assest/img/Sweet_Potato_Fries.png",
    expire: "2024-12-28",
  },

  {
    name: "Chicken n Cheese Pasta",
    size: "()",
    price: 1600.0,
    itemCode: "B1031",
    stoke: 6,
    discount: "15%",
    imageUrl: "../../assest/img/Chicken_n_Cheese Pasta.png",
    expire: "2024-12-28",
  },
  {
    name: "Chicken Penne Pasta",
    size: "()",
    price: 1700.0,
    itemCode: "B1032",
    stoke: 5,
    discount: "0%",
    imageUrl: "../../assest/img/Chicken_Penne_Pasta.png",
    expire: "2024-12-28",
  },
  {
    name: "Ground Turkey Pasta Bake",
    size: "()",
    price: 2900.0,
    itemCode: "B1033",
    stoke: 20,
    discount: "10%",
    imageUrl: "../../assest/img/Ground_Turkey_Pasta Bake.png",
    expire: "2024-12-28",
  },
  {
    name: "Creamy Shrimp Pasta",
    size: "()",
    price: 2000.0,
    itemCode: "B1034",
    stoke: 12,
    discount: "0%",
    imageUrl: "../../assest/img/Creamy_Shrimp_Pasta.png",
    expire: "2024-12-28",
  },
  {
    name: "Lemon Butter Pasta",
    size: "()",
    price: 1950.0,
    itemCode: "B1035",
    stoke: 5,
    discount: "0%",
    imageUrl: "../../assest/img/Lemon_Butter_Pasta.png",
    expire: "2024-12-28",
  },
  {
    name: "Tagliatelle Pasta",
    size: "()",
    price: 2400.0,
    itemCode: "B1036",
    stoke: 3,
    discount: "1%",
    imageUrl: "../../assest/img/Tagliatelle_Pasta.png",
    expire: "2024-12-28",
  },
  {
    name: "Baked Ravioli",
    size: "()",
    price: 2000.0,
    itemCode: "B1037",
    stoke: 10,
    discount: "1%",
    imageUrl: "../../assest/img/Baked_Ravioli.png",
    expire: "2024-12-28",
  },

  {
    name: "Fried Chicken",
    size: "(medium)",
    price: 2300.0,
    itemCode: "B1039",
    stoke: 11,
    discount: "10%",
    imageUrl: "../../assest/img/Fried_Chicken.png",
    expire: "2024-12-28",
  },
  {
    name: "Fried Chicken",
    size: "(small)",
    price: 1200.0,
    itemCode: "B1038",
    stoke: 10,
    discount: "0%",
    imageUrl: "../../assest/img/Fried_Chicken(small).png",
    expire: "2024-09-02",
  },
  {
    name: "Fried Chicken",
    size: "(Large)",
    price: 3100.0,
    itemCode: "B1040",
    stoke: 5,
    discount: "5%",
    imageUrl: "../../assest/img/Fried_Chicken(Large).png",
    expire: "2024-10-01",
  },
  {
    name: "Hot Wings",
    size: "(Large)",
    price: 2400.0,
    itemCode: "B1041",
    stoke: 8,
    discount: "0%",
    imageUrl: "../../assest/img/Hot_Wings.png",
    expire: "2024-10-02",
  },
  {
    name: "Devilled Chicken",
    size: "(Large)",
    price: 900.0,
    itemCode: "B1042",
    stoke: 20,
    discount: "0%",
    imageUrl: "../../assest/img/Devilled_Chicken.png",
    expire: "2024-12-28",
  },
  {
    name: "BBQ Chicken",
    size: "(Large)",
    price: 2100.0,
    itemCode: "B1043",
    stoke: 20,
    discount: "0%",
    imageUrl: "../../assest/img/BBQ_Chicken.png",
    expire: "2024-12-28",
  },

  {
    name: "Pepsi",
    size: "(330ml)",
    price: 990.0,
    itemCode: "B1044",
    stoke: 25,
    discount: "5%",
    imageUrl: "../../assest/img/Pepsi_r.png",
    expire: "2024-12-28",
  },
  {
    name: "Coca-Cola",
    size: "(330ml)",
    price: 1230.0,
    itemCode: "B1045",
    stoke: 25,
    discount: "0%",
    imageUrl: "../../assest/img/Coca-Cola_r.png",
    expire: "2024-12-28",
  },
  {
    name: "Sprite",
    size: "(330ml)",
    price: 1500.0,
    itemCode: "B1046",
    stoke: 30,
    discount: "3%",
    imageUrl: "../../assest/img/Sprite_r.png",
    expire: "2024-12-28",
  },
  {
    name: "Mirinda",
    size: "(330ml)",
    price: 850.0,
    itemCode: "B1047",
    stoke: 30,
    discount: "7%",
    imageUrl: "../../assest/img/Mirinda_r.png",
    expire: "2024-12-28",
  },
];

let items = document.getElementsByClassName("item");
console.log(items);

items[0].addEventListener("click", () => {
  location.href = "../../index.html";
});

items[1].addEventListener("click", () => {
  console.log("in order");
  window.location.href = "../../pages/order.html";
});

items[2].addEventListener("click", () => {
  location.href = "../../pages/customer.html";
});

items[3].addEventListener("click", () => {
  location.href = "../../pages/report.html";
});

items[4].addEventListener("click", () => {
  location.href = "../../pages/item.html";
});

const Order = {
  orderID: null,
  CustomerID: null,
  OrderTimeAndDate: null,
};

const orderDetails = {
  OrderID: null,
  items: [
    {
      itemcode: null,
      Qty: null,
      price: null,
      discount: null,
    },
    {
      itemcode: null,
      Qty: null,
      price: null,
      discount: null,
    },
  ],
  Total: null,
  orderDiscount: null,
};

let OrderDB = [
  (Orders = [
    {
      orderID: "O001",
      CustomerID: "C001",
      OrderDate: "2021-12-28",
      orderTime: "12.52",
      status: "NEW",
      items: [
        {
          name: "Burger",
          size: "Large",
          price: 1000.0,
          qty: 5,
          total: 5000,
        },
        {
          name: "Fries",
          size: "small",
          price: 900.0,
          qty: 1,
          total: 900,
        },
        {
          name: "sprit",
          size: "300ml",
          price: 990.0,
          qty: 1,
          total: 990,
        },
      ],
    },
    {
      orderID: "O002",
      CustomerID: "C002",
      OrderDate: "2024-10-02",
      orderTime: "10.52",
      status: "COMPLETE",
      items: [
        {
          name: "Burger",
          size: "Large",
          price: 1000.0,
          qty: 5,
          total: 5000,
        },
        {
          name: "Fries",
          size: "small",
          price: 900.0,
          qty: 1,
          total: 900,
        },
        {
          name: "sprit",
          size: "300ml",
          price: 990.0,
          qty: 1,
          total: 990,
        },
      ],
    },
    {
      orderID: "O003",
      CustomerID: "C005",
      OrderDate: "2024-10-06",
      orderTime: "9.00",
      status: "PROGRESS",
      items: [
        {
          name: "Burger",
          size: "Large",
          price: 1000.0,
          qty: 5,
          total: 5000,
        },
        {
          name: "Fries",
          size: "small",
          price: 900.0,
          qty: 1,
          total: 900,
        },
        {
          name: "sprit",
          size: "300ml",
          price: 990.0,
          qty: 1,
          total: 990,
        },
      ],
    },
  ]),
  // (orderDetails = []),
];

function InitLoaded() {
  let orders = OrderDB[0];

  let orderArray = orders;
  card = "";
  orderArray.forEach((order) => {
    card += `<div class="card">
      <div class="pic">
        <img src="../../assest/img/newIcon.png" alt="" class="img" />
      </div>
      <div class="data">
        <div class="rate">
          <p></p>
          <img src="../../assest/img/starIcon.png" alt="" />
        </div>
        <div class="itemName">
          <span class="details">${order.orderID}</span>
          <br />
          <span class="details">${order.CustomerID}</span>

          <br />
          <span class="stock">Date | Time</span>
          <br />
          <span class="details">${order.OrderDate} | ${order.orderTime}</span>
          <hr style="width: 100%" />
          <div class="price">
            <span>${order.status}</span>
            <img src="assest/img/plus icon.png" alt="" />
          </div>
        </div>
      </div>
    </div>`;
  });
  document.getElementById("cardmain").innerHTML = card;
}
InitLoaded();

let btnGroup = document.getElementsByClassName("bunGroup");
btnGroup[0].addEventListener("click", loadAdd);
btnGroup[2].addEventListener("click", loadUpdate);
btnGroup[1].addEventListener("click", loadDelete);

function loadAdd() {
  if (
    document.getElementById("addForm").style.display === "none" ||
    document.getElementById("addForm") === ""
  ) {
    document.getElementById("addForm").style.display = "block";
    document.getElementById("addForm1").style.display = "none"; // Show the form
  } else {
    document.getElementById("addForm").style.display = "none";
    document.getElementById("addForm1").style.display = "none"; // Hide the form
  }
}
function loadUpdate() {
  if (
    document.getElementById("addForm1").style.display == "none" ||
    document.getElementById("addForm1") === ""
  ) {
    document.getElementById("addForm1").style.display = "block";
    document.getElementById("addForm").style.display = "none";
  } else {
    document.getElementById("addForm1").style.display = "none";
  }
}

function loadDelete() {
  if (
    document.getElementById("addForm1").style.display == "none" ||
    document.getElementById("addForm1") === ""
  ) {
    document.getElementById("addForm1").style.display = "block";
    document.getElementById("addForm").style.display = "none";
  } else {
    document.getElementById("addForm1").style.display = "none";
  }
}

document.getElementById("addbtnOrder").addEventListener("click", validateForm);
var CartItemList = [];
function validateForm() {
  let id = document.getElementById("orderid").value;
  let name = document.getElementById("customerid").value;
  let date = document.getElementById("orderdate").value;
  let time = document.getElementById("ordertime").value;
  let status = document.getElementById("status").value;

  if (
    id == "" ||
    name == "" ||
    date == "" ||
    time == "" ||
    status == "" ||
    CartItemList.length === 0
  ) {
    alert("Not Complete Form");
  } else {
    if (exitOrderId(id)) {
      alert("OrderId exit");
      return false;
    }
    let order = {
      orderID: id,
      CustomerID: name,
      OrderDate: date,
      orderTime: time,
      status: status,
      items: CartItemList,
    };

    OrderDB[0].push(order);
    console.log(order);
    console.log(OrderDB[0]);
    document.getElementById("addForm").style.display = "none";
    InitLoaded();
  }
}

document.getElementById("searchbtn1").addEventListener("click", serchOrder);

function serchOrder() {
  let orderId = document.getElementById("searchItem1").value;
  // let cusId = document.getElementById("customerid");
  // let date = document.getElementById("orderdate");
  // let time = document.getElementById("ordertime");
  // let status = document.getElementById("status");
  const regex = /^O\d{3}$/;
  const regex1 = /^C\d{3}$/;

  let pattern = orderId;
  if (regex.test(orderId)) {
    orderId = true;
  }
  if (regex1.test(pattern)) {
    orderId = true;
  }

  switch (orderId) {
    case /^O\d{3}$/.test(pattern):
      let data = OrderDB[0].filter((order) => order.orderID == pattern);
      console.log(data);
      data.forEach((order) => {
        let orderRow = document.createElement("div");
        orderRow.id = "updatechild";

        let customerID = document.createElement("input");
        customerID.type = "text";
        customerID.id = "customeridup";
        customerID.value = order.CustomerID;
        customerID.readOnly = false;

        let orderDate = document.createElement("input");
        orderDate.type = "text";
        orderDate.id = "orderdataup";
        orderDate.value = order.OrderDate;
        orderDate.readOnly = false;

        let orderTime = document.createElement("input");
        orderTime.type = "text";
        orderTime.id = "ordertimeup";
        orderTime.value = order.orderTime;
        orderTime.readOnly = false;

        let orderStatus = document.createElement("input");
        orderStatus.type = "text";
        orderStatus.id = "statusup";
        orderStatus.value = order.status;
        orderStatus.readOnly = false;

        let refresh = document.createElement("button");
        refresh.type = "button";
        refresh.id = "refresh";
        refresh.innerHTML = "Refresh";
        refresh.onclick = RefreshChild();
        refresh.readOnly = false;

        // Append the input fields to the row
        orderRow.appendChild(customerID);
        orderRow.appendChild(orderDate);
        orderRow.appendChild(orderTime);
        orderRow.appendChild(orderStatus);
        orderRow.appendChild(refresh);

        if (!document.getElementById("addForm1").contains(orderRow)) {
          document.getElementById("addForm1").appendChild(orderRow);
          console.log("Element appended!");
        } else {
          console.log("Element already exists!");
        }
      });
      break;
    case /^C\d{3}$/.test(pattern):
      let data1 = OrderDB[0].filter((order) => order.CustomerID == pattern);
      console.log(data1);
      data1.forEach((order) => {
        let orderRow = document.createElement("div");
        orderRow.id = "updatechild";

        let customerID = document.createElement("input");
        customerID.type = "text";
        customerID.id = "customeridup";
        customerID.value = order.CustomerID;
        customerID.readOnly = false;

        let orderDate = document.createElement("input");
        orderDate.type = "text";
        orderDate.id = "orderdataup";
        orderDate.value = order.OrderDate;
        orderDate.readOnly = false;

        let orderTime = document.createElement("input");
        orderTime.type = "text";
        orderTime.id = "ordertimeup";
        orderTime.value = order.orderTime;
        orderTime.readOnly = false;

        let orderStatus = document.createElement("input");
        orderStatus.type = "text";
        orderStatus.id = "statusup";
        orderStatus.value = order.status;
        orderStatus.readOnly = false;

        let refresh = document.createElement("button");
        refresh.type = "button";
        refresh.id = "refresh";
        refresh.innerHTML = "Refresh";
        refresh.onclick = RefreshChild;
        refresh.readOnly = false;

        // Append the input fields to the row
        orderRow.appendChild(customerID);
        orderRow.appendChild(orderDate);
        orderRow.appendChild(orderTime);
        orderRow.appendChild(orderStatus);
        orderRow.appendChild(refresh);

        if (!document.getElementById("addForm1").contains(orderRow)) {
          document.getElementById("addForm1").appendChild(orderRow);
          console.log("Element appended!");
        } else {
          console.log("Element already exists!");
        }
      });
      break;
    default:
      alert("Invalide IDs try agin");
  }
}

function RefreshChild() {
  let removeItem = document.getElementById("updatechild");
  document.getElementById("addForm1").removeChild(removeItem);
}

document.getElementById("addbtnOrder1").addEventListener("click", setUpdate);
document.getElementById("addbtnOrder2").addEventListener("click", setDelete);

function setUpdate() {
  let orderRow = document.getElementById("updatechild");
  console.log(orderRow);

  let orderId = document.getElementById("searchItem1").value;
  let customerid = document.getElementById("customeridup").value;
  let orderdate = document.getElementById("orderdataup").value;
  let time = document.getElementById("ordertimeup").value;
  let status = document.getElementById("statusup").value;

  console.log(customerid);
  console.log(orderdate);
  console.log(time);
  console.log(status);

  let isUpdated = updateOrder(
    OrderDB[0],
    orderId,
    customerid,
    orderdate,
    time,
    status
  );

  if (isUpdated) {
    alert("update Successful");
  } else {
    alert("Update not successful");
  }
  document.getElementById("addForm1").removeChild(orderRow);
  document.getElementById("addForm1").style.display = "none";
}

function setDelete() {
  let orderId = document.getElementById("searchItem1").value;
  let isDeleted = deleteOrder(Orders, orderId);
  if (isDeleted) {
    alert("Order Delete Successful");
  } else {
    alert("order dalete not successful");
  }

  document.getElementById("addForm1").style.display = "none";
}

function deleteOrder(Orderdb, orderId) {
  const index = Orderdb.findIndex((order) => order.orderID === orderId);
  console.log(index);

  if (index !== -1) {
    Orderdb.splice(index, 1);
    return true;
  }
  return false;
}

function updateOrder(orderArray, orderId, customerId, orderdate, time, status) {
  let order = orderArray.find((order) => order.orderID == orderId);
  console.log(order);
  if (order) {
    order.CustomerID = customerId;
    order.OrderDate = orderdate;
    order.orderTime = time;
    order.status = status;

    console.log(order);
    console.log(OrderDB);
    return true;
  }

  return false;
}

window.onload = function () {
  var select = document.getElementById("itemcode");
  itemDB.forEach((item) => {
    var option = document.createElement("option");
    option.text = option.value = item.itemCode;
    select.add(option, 0);
  });
};

function addcart(event) {
  console.log("addcart");
  let itemcode = document.getElementById("itemcode").value;
  addsearchItemBy(itemcode);
}

function addsearchItemBy(itemCode) {
  console.log("addsearch");
  let itemList = itemDB.filter((item) => item.itemCode == itemCode);
  itemList.forEach((item) => {
    let itemRow = document.createElement("div");
    itemRow.id = "cartDiv";

    let itemName = document.createElement("input");
    itemName.type = "text";
    itemName.id = "cartItemName";
    itemName.value = item.name;
    itemName.readOnly = false;

    let itemSize = document.createElement("input");
    itemSize.type = "text";
    itemSize.id = "cartItemSize";
    itemSize.value = item.size;
    itemSize.readOnly = false;

    let itemPrice = document.createElement("input");
    itemPrice.type = "number";
    itemPrice.id = "cartItemPrice";
    itemPrice.value = item.price;
    itemPrice.readOnly = false;

    let itemStoke = document.createElement("input");
    itemStoke.type = "number";
    itemStoke.id = "cartItemStoke";
    itemStoke.value = item.stoke;
    itemStoke.readOnly = false;

    let itemDis = document.createElement("input");
    itemDis.type = "text";
    itemDis.id = "cartItemDis";
    itemDis.value = item.discount;
    itemDis.readOnly = false;

    let QTY = document.createElement("input");
    QTY.type = "number";
    QTY.id = "cartItemQTY";
    QTY.placeholder = "quantity";
    QTY.value = "";
    QTY.readOnly = false;

    let addbtn = document.createElement("button");
    addbtn.type = "button";
    addbtn.id = "cartItemAddOnAction";
    addbtn.innerHTML = "ADD";
    addbtn.onclick = validateCartItem;
    QTY.readOnly = false;

    itemRow.appendChild(itemName);
    itemRow.appendChild(itemSize);
    itemRow.appendChild(itemPrice);
    itemRow.appendChild(itemStoke);
    itemRow.appendChild(itemDis);
    itemRow.appendChild(QTY);
    itemRow.appendChild(addbtn);

    if (!document.getElementById("addForm").contains(itemRow)) {
      document.getElementById("addForm").appendChild(itemRow);
      console.log("Element appended!");
    } else {
      console.log("Element already exists!");
    }
  });
}

function validateCartItem() {
  var QTY = parseInt(document.getElementById("cartItemQTY").value);
  var STOKE = parseInt(document.getElementById("cartItemStoke").value);

  console.log(QTY);
  console.log(STOKE);
  console.log(QTY === "" || STOKE < QTY);

  if (isNaN(QTY) || QTY <= 0 || STOKE < QTY) {
    alert("Invalid or unavailable quantity");
    return;
  }

  let item_name = document.getElementById("cartItemName").value;
  let item_size = document.getElementById("cartItemSize").value;
  let item_price = parseFloat(document.getElementById("cartItemPrice").value);
  let item_discount = parseFloat(document.getElementById("cartItemDis").value);

  let total = ((item_price * (100 - item_discount)) / 100) * QTY;

  let cart = {
    name: item_name,
    size: item_size,
    price: item_price,
    qty: QTY,
    total: total,
  };

  CartItemList.push(cart);
  console.log(CartItemList);

  let cartDiv = document.getElementById("cartDiv");
  if (cartDiv) {
    document.getElementById("addForm").removeChild(cartDiv);
  }
}

function generatePDFWithTable() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Invoice", 10, 10);

  let orders = Orders[Orders.length - 1];

  doc.setFontSize(12);
  doc.text("Order ID: " + orders.orderID, 10, 20);
  doc.text("Customer ID: " + orders.CustomerID, 10, 30);
  doc.text("Order Date: " + orders.OrderDate, 10, 40);

  let startY = 50;
  doc.setFontSize(12);
  doc.text("Item Code", 10, startY);
  doc.text("Size", 50, startY);
  doc.text("Price", 80, startY);
  doc.text("QTY", 110, startY);
  doc.text("Total", 140, startY);

  doc.line(10, startY + 2, 200, startY + 2);

  let Total = 0.0;
  let currentY = startY + 10;
  let items = orders.items;
  console.log(items);

  items.forEach((item) => {
    doc.text(item.name, 10, currentY);
    doc.text(item.size, 50, currentY);
    doc.text("" + item.price.toFixed(2), 80, currentY);
    doc.text("" + item.qty, 110, currentY);
    doc.text("" + item.total.toFixed(2), 140, currentY);
    Total += parseFloat(item.total);

    currentY += 10;
  });

  doc.setFontSize(14);
  doc.text("Total: $" + Total.toFixed(2), 10, currentY + 10);
  doc.save("invoice.pdf");
}

document
  .getElementById("downloadInvoice")
  .addEventListener("click", generatePDFWithTable);

function exitOrderId(orderId) {
  for (let i = 0; i < Orders.length; i++) {
    if (Orders[i].orderID == orderId) {
      return true;
    }
  }
  return false;
}
