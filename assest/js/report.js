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
  let ordername = document.getElementById("searchItem").value;
  console.log(ordername);
  const regex = /B\d{4}/;
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
    case /B\d{4}/.test(pattern):
      console.log(ordername);
      let PAT = pattern.toUpperCase();
      console.log(PAT);
      let itemById = itemDB.filter((item) => item.itemCode == PAT);

      console.log(itemById);

      itemById.forEach((item) => {
        card += `<div class="card">
        <div class="pic">
          <img src="${item.imageUrl}" alt="" class="img" />
        </div>
        <div class="data">
          <div class="rate">
            <p></p>
            <img src="../../assest/img/starIcon.png" alt="star" />
          </div>
          <div class="itemName">
            <span class="details">${item.name}</span>
            <br />
            <span class="details">${item.size}</span>

            <br />
            <span class="stock">Stoke | Code</span>
            <br />
            <span class="details">${item.stoke} | ${item.itemCode}</span>
            <hr style="width: 100%" />
            <div class="price">
              <span>${item.price}</span>
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

let userDB = [
  {
    customerId: "C002",
    name: "Manoj",
    address: "Kurunegala",
    countycode: "+94",
    contact: "+94719238305",
    imageUrl:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    customerId: "C001",
    name: "pathum",
    address: "colombo",
    countycode: "+94",
    contact: "719238307",
    imageUrl:
      "https://i.pinimg.com/originals/de/97/55/de975595890f0ed79238dc4d61532777.jpg",
  },
  {
    customerId: "C004",
    name: "malindu",
    address: "Kadawatha",
    contact: "719238309",
    countycode: "+94",
    imageUrl:
      "https://i.pinimg.com/originals/08/1a/49/081a4990914d41a52e25a8fe6807ba5f.jpg",
  },
  {
    customerId: "C005",
    name: "Yasindu",
    address: "Benthra",
    countycode: "+94",
    contact: "719238304",
    imageUrl:
      "https://dc-dermdocs.com/wp-content/uploads/shutterstock_149962697.jpg",
  },
];

let OrderDB = [
  (Orders = [
    {
      iconurl: "../../assest/img/newIcon.png",
      orderID: "O001",
      CustomerID: "C001",
      OrderDate: "2021-12-28",
      orderTime: "12.52",
      status: "NEW",
    },
    {
      orderID: "O002",
      CustomerID: "C002",
      OrderDate: "2024-10-02",
      orderTime: "10.52",
      status: "COMPLETE",
    },
    {
      orderID: "O003",
      CustomerID: "C005",
      OrderDate: "2024-10-06",
      orderTime: "9.00",
      status: "PROGRESS",
    },
  ]),
  (OrderDetails = [
    {
      orderID: "O002",
      customerId: "C002",
      customerName: "Manoj",
      Items: [{}],
    },
  ]),
];

let reportDB = [
  (mothly = [
    {
      itemCode: "B1001",
      item_name: "Burger",
      customerId: "C002",
      customer_name: "Manoj",
    },
    {
      itemCode: "B1025",
      item_name: "Fries",
      customerId: "C004",
      customer_name: "Lahiru",
    },
    {
      itemCode: "B1005",
      item_name: "Chicken Burger",
      customerId: "C006",
      customer_name: "Amila",
    },
    {
      itemCode: "B1006",
      item_name: "Veggie Burger",
      customerId: "C007",
      customer_name: "Nimal",
    },
    {
      itemCode: "B1010",
      item_name: "Coke",
      customerId: "C009",
      customer_name: "Sunil",
    },
    {
      itemCode: "B1011",
      item_name: "Pepsi",
      customerId: "C010",
      customer_name: "Kamal",
    },
    {
      itemCode: "B1015",
      item_name: "Chicken Nuggets",
      customerId: "C012",
      customer_name: "Roshan",
    },
    {
      itemCode: "B1017",
      item_name: "Ice Cream",
      customerId: "C014",
      customer_name: "Kasun",
    },
    {
      itemCode: "B1020",
      item_name: "Salad",
      customerId: "C016",
      customer_name: "Isuru",
    },
    {
      itemCode: "B1022",
      item_name: "Pizza",
      customerId: "C018",
      customer_name: "Sahan",
    },
    {
      itemCode: "B1024",
      item_name: "Pasta",
      customerId: "C020",
      customer_name: "Nuwan",
    },
    {
      itemCode: "B1030",
      item_name: "Fried Chicken",
      customerId: "C021",
      customer_name: "Ruwan",
    },
    {
      itemCode: "B1031",
      item_name: "Fish Burger",
      customerId: "C022",
      customer_name: "Kavindu",
    },
    {
      itemCode: "B1035",
      item_name: "Soup",
      customerId: "C024",
      customer_name: "Samantha",
    },
    {
      itemCode: "B1040",
      item_name: "Fruit Juice",
      customerId: "C026",
      customer_name: "Tharindu",
    },
    {
      itemCode: "B1045",
      item_name: "Garlic Bread",
      customerId: "C028",
      customer_name: "Sachin",
    },
    {
      itemCode: "B1050",
      item_name: "Hotdog",
      customerId: "C030",
      customer_name: "Pradeep",
    },
    {
      itemCode: "B1055",
      item_name: "Milkshake",
      customerId: "C032",
      customer_name: "Lakshan",
    },
    {
      itemCode: "B1060",
      item_name: "Muffin",
      customerId: "C034",
      customer_name: "Sanjeewa",
    },
    {
      itemCode: "B1065",
      item_name: "Chicken Wrap",
      customerId: "C036",
      customer_name: "Sameera",
    },
    {
      itemCode: "B1070",
      item_name: "Tacos",
      customerId: "C038",
      customer_name: "Dilshan",
    },
    {
      itemCode: "B1075",
      item_name: "Nachos",
      customerId: "C040",
      customer_name: "Pubudu",
    },
    {
      itemCode: "B1080",
      item_name: "Smoothie",
      customerId: "C042",
      customer_name: "Janith",
    },
    {
      itemCode: "B1085",
      item_name: "Samosa",
      customerId: "C044",
      customer_name: "Rukshan",
    },
    {
      itemCode: "B1090",
      item_name: "Doughnut",
      customerId: "C046",
      customer_name: "Pasindu",
    },
  ]),
  (annual = [
    {
      itemCode: "A1001",
      item_name: "Burger",
      customerId: "C002",
      customer_name: "Manoj",
    },
    {
      itemCode: "A1025",
      item_name: "Fries",
      customerId: "C004",
      customer_name: "Lahiru",
    },
    {
      itemCode: "A1005",
      item_name: "Chicken Burger",
      customerId: "C006",
      customer_name: "Amila",
    },
    {
      itemCode: "A1006",
      item_name: "Veggie Burger",
      customerId: "C007",
      customer_name: "Nimal",
    },
    {
      itemCode: "A1010",
      item_name: "Coke",
      customerId: "C009",
      customer_name: "Sunil",
    },
    {
      itemCode: "A1011",
      item_name: "Pepsi",
      customerId: "C010",
      customer_name: "Kamal",
    },
    {
      itemCode: "A1015",
      item_name: "Chicken Nuggets",
      customerId: "C012",
      customer_name: "Roshan",
    },
    {
      itemCode: "A1017",
      item_name: "Ice Cream",
      customerId: "C014",
      customer_name: "Kasun",
    },
    {
      itemCode: "A1020",
      item_name: "Salad",
      customerId: "C016",
      customer_name: "Isuru",
    },
    {
      itemCode: "A1022",
      item_name: "Pizza",
      customerId: "C018",
      customer_name: "Sahan",
    },
    {
      itemCode: "A1024",
      item_name: "Pasta",
      customerId: "C020",
      customer_name: "Nuwan",
    },
    {
      itemCode: "A1030",
      item_name: "Fried Chicken",
      customerId: "C021",
      customer_name: "Ruwan",
    },
    {
      itemCode: "A1031",
      item_name: "Fish Burger",
      customerId: "C022",
      customer_name: "Kavindu",
    },
    {
      itemCode: "A1035",
      item_name: "Soup",
      customerId: "C024",
      customer_name: "Samantha",
    },
    {
      itemCode: "A1040",
      item_name: "Fruit Juice",
      customerId: "C026",
      customer_name: "Tharindu",
    },
    {
      itemCode: "A1045",
      item_name: "Garlic Bread",
      customerId: "C028",
      customer_name: "Sachin",
    },
    {
      itemCode: "A1050",
      item_name: "Hotdog",
      customerId: "C030",
      customer_name: "Pradeep",
    },
    {
      itemCode: "A1055",
      item_name: "Milkshake",
      customerId: "C032",
      customer_name: "Lakshan",
    },
    {
      itemCode: "A1060",
      item_name: "Muffin",
      customerId: "C034",
      customer_name: "Sanjeewa",
    },
    {
      itemCode: "A1065",
      item_name: "Chicken Wrap",
      customerId: "C036",
      customer_name: "Sameera",
    },
    {
      itemCode: "A1070",
      item_name: "Tacos",
      customerId: "C038",
      customer_name: "Dilshan",
    },
    {
      itemCode: "A1075",
      item_name: "Nachos",
      customerId: "C040",
      customer_name: "Pubudu",
    },
    {
      itemCode: "A1080",
      item_name: "Smoothie",
      customerId: "C042",
      customer_name: "Janith",
    },
    {
      itemCode: "A1085",
      item_name: "Samosa",
      customerId: "C044",
      customer_name: "Rukshan",
    },
    {
      itemCode: "A1090",
      item_name: "Doughnut",
      customerId: "C046",
      customer_name: "Pasindu",
    },
  ]),
];

function populateTable() {
  let tableBody = document.querySelector("#monthlyTable tbody");

  // Get the <tbody> element of the table
  tableBody.innerHTML = "";

  // Loop through each item in the 'monthly' array
  mothly.forEach((order) => {
    // Create a new row element
    let row = document.createElement("tr");

    // Create a cell for each property in the object
    let itemCodeCell = document.createElement("td");
    itemCodeCell.textContent = order.itemCode;

    let itemNameCell = document.createElement("td");
    itemNameCell.textContent = order.item_name;

    let customerIdCell = document.createElement("td");
    customerIdCell.textContent = order.customerId;

    let customerNameCell = document.createElement("td");
    customerNameCell.textContent = order.customer_name;

    // Append the cells to the row
    row.appendChild(itemCodeCell);
    row.appendChild(itemNameCell);
    row.appendChild(customerIdCell);
    row.appendChild(customerNameCell);

    // Append the row to the table body
    tableBody.appendChild(row);
  });
}

function populateTableAnnual() {
  // Get the <tbody> element of the table
  let tableBody = document.querySelector("#monthlyTable tbody");
  tableBody.innerHTML = "";

  // Loop through each item in the 'monthly' array
  annual.forEach((order) => {
    // Create a new row element
    let row = document.createElement("tr");
    row.id = "tableRow";

    // Create a cell for each property in the object
    let itemCodeCell = document.createElement("td");
    itemCodeCell.textContent = order.itemCode;

    let itemNameCell = document.createElement("td");
    itemNameCell.textContent = order.item_name;

    let customerIdCell = document.createElement("td");
    customerIdCell.textContent = order.customerId;

    let customerNameCell = document.createElement("td");
    customerNameCell.textContent = order.customer_name;

    // Append the cells to the row
    row.appendChild(itemCodeCell);
    row.appendChild(itemNameCell);
    row.appendChild(customerIdCell);
    row.appendChild(customerNameCell);

    // Append the row to the table body
    tableBody.appendChild(row);
  });
}

let report = document.getElementsByClassName("bunGroup");
report[0].addEventListener("click", populateTable);
report[1].addEventListener("click", populateTableAnnual);
// Call the function to populate the table

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

// name: "Steak Fries",
//       size: "(Large)",
//       price: 1200.0,
//       itemCode: "B1025",
//       stoke: 9,
//       discount: "0%",
//       imageUrl: "../../assest/img/Steak_Fries (Medium).png",

// function InitLoaded() {
//   let items = itemDB;

//   card = "";
//   items.forEach((item) => {
//     card += `<div class="card">
//       <div class="pic">
//         <img src="${item.imageUrl}" alt="" class="img" />
//       </div>
//       <div class="data">
//         <div class="rate">
//           <p></p>
//           <img src="../../assest/img/starIcon.png" alt="" />
//         </div>
//         <div class="itemName">
//           <span class="details">${item.name}</span>
//           <br />
//           <span class="details">${item.size}</span>

//           <br />
//           <span class="stock">stoke | code</span>
//           <br />
//           <span class="details">${item.stoke} | ${item.itemCode}</span>
//           <hr style="width: 100%" />
//           <div class="price">
//             <span>${item.price}</span>
//             <img src="assest/img/plus icon.png" alt="" />
//           </div>
//         </div>
//       </div>
//     </div>`;
//   });
//   document.getElementById("cardmain").innerHTML = card;
// }
//InitLoaded();

// let btnGroup = document.getElementsByClassName("bunGroup");
// btnGroup[0].addEventListener("click", loadAdd);
// btnGroup[2].addEventListener("click", loadUpdate);
// btnGroup[1].addEventListener("click", loadDelete);
// btnGroup[3].addEventListener("click", expiredMarke);

function loadAdd() {
  document.getElementById("addForm1").style.display = "none";
  document.getElementById("addForm").style.display = "block";
}
function loadUpdate() {
  document.getElementById("addForm").style.display = "none";
  document.getElementById("addForm1").style.display = "block";
}

function loadDelete() {
  document.getElementById("addForm1").style.display = "none";
  document.getElementById("addForm").style.display = "none";
  document.getElementById("addForm1").style.display = "block";
}

document.getElementById("addbtnOrder").addEventListener("click", validateForm);

function validateForm() {
  let name = document.getElementById("item-name").value;
  let size = document.getElementById("item-size").value;
  let price = document.getElementById("item-price").value;
  let code = document.getElementById("item-code").value;
  let stock = document.getElementById("item-stock").value;
  let discount = document.getElementById("item-discount").value;

  if (
    name == "" ||
    size == "" ||
    price == "" ||
    code == "" ||
    stock == "" ||
    discount == ""
  ) {
    alert("Not Complete Form");
  } else {
    let item = {
      name: name,
      size: size,
      price: price,
      itemCode: code,
      stoke: stock,
      discount: discount,
      imageUrl: "../../assest/img/Bacon_Burger.png",
    };
    console.log(item);

    itemDB.push(item);
    console.log(itemDB);
    document.getElementById("addForm").style.display = "none";
  }
}

document.getElementById("searchbtn1").addEventListener("click", serchOrder);

function serchOrder() {
  let itemid = document.getElementById("searchItem1").value;
  //   let cusId = document.getElementById("customerid");
  //   let date = document.getElementById("orderdate");
  //   let time = document.getElementById("ordertime");
  //   let status = document.getElementById("status");

  let data = itemDB.filter((item) => item.itemCode == itemid);
  console.log(data);
  data.forEach((item) => {
    let orderRow = document.createElement("div");
    orderRow.id = "updatechild";

    let itemName = document.createElement("input");
    itemName.type = "text";
    itemName.id = "item-nameup";
    itemName.value = item.name;
    itemName.readOnly = false;

    let itemSize = document.createElement("input");
    itemSize.type = "text";
    itemSize.id = "item-sizeup";
    itemSize.value = item.size;
    itemSize.readOnly = false;

    let itemPrice = document.createElement("input");
    itemPrice.type = "text";
    itemPrice.id = "item-priceup";
    itemPrice.value = item.price;
    itemPrice.readOnly = false;

    let itemStock = document.createElement("input");
    itemStock.type = "text";
    itemStock.id = "item-stockup";
    itemStock.value = item.stoke;
    itemStock.readOnly = false;

    let itemDiscount = document.createElement("input");
    itemDiscount.type = "text";
    itemDiscount.id = "item-disCountup";
    itemDiscount.value = item.discount;
    itemDiscount.readOnly = false;

    // Append the input fields to the row
    orderRow.appendChild(itemName);
    orderRow.appendChild(itemSize);
    orderRow.appendChild(itemPrice);
    orderRow.appendChild(itemStock);
    orderRow.appendChild(itemDiscount);

    if (!document.getElementById("addForm1").contains(orderRow)) {
      document.getElementById("addForm1").appendChild(orderRow);
      console.log("Element appended!");
    } else {
      console.log("Element already exists!");
    }
  });
}

document.getElementById("addbtnOrder1").addEventListener("click", setUpdate);
document.getElementById("addbtnOrder2").addEventListener("click", setDelete);

function setUpdate() {
  let orderRow = document.getElementById("updatechild");
  console.log(orderRow);

  let itemcode = document.getElementById("searchItem1").value;
  let itemname = document.getElementById("item-nameup").value;
  let itemsize = document.getElementById("item-sizeup").value;
  let itemprice = document.getElementById("item-priceup").value;
  let itemstock = document.getElementById("item-stockup").value;
  let itemdiscount = document.getElementById("item-disCountup").value;

  console.log(itemname);
  console.log(itemsize);
  console.log(itemprice);
  console.log(itemstock);
  console.log(itemdiscount);

  let isUpdated = updateItem(
    itemDB,
    itemcode,
    itemname,
    itemsize,
    itemprice,
    itemstock,
    itemdiscount
  );

  if (isUpdated) {
    alert("update Successful");
  } else {
    alert("Update not successful");
  }
  document.getElementById("addForm1").removeChild(orderRow);
  document.getElementById("addForm1").style.display = "none";
  InitLoaded();
}

function setDelete() {
  let itemcode = document.getElementById("searchItem1").value;
  let isDeleted = deleteItem(itemDB, itemcode);
  if (isDeleted) {
    alert("Order Delete Successful");
  } else {
    alert("order dalete not successful");
  }

  document.getElementById("addForm1").style.display = "none";
  InitLoaded();
}

function deleteItem(itemdb, itemcode) {
  const index = itemdb.findIndex((order) => order.itemCode === itemcode);
  console.log(index);

  if (index !== -1) {
    itemdb.splice(index, 1);
    return true;
  }
  return false;
}

function updateItem(
  itemArray,
  itemcode,
  itemname,
  size,
  price,
  stock,
  discount
) {
  let item = itemArray.find((item) => item.itemCode == itemcode);

  if (item) {
    item.name = itemname;
    item.size = size;
    item.price = price;
    console.log(stock);
    item.stoke = stock;
    item.discount = discount;

    console.log(item);
    console.log(itemDB);
    return true;
  }

  return false;
}

function expiredMarke() {
  card = "";
  let now = new Date();
  let currentDate = formate(now);

  let expireList = itemDB.filter((item) => item.expire < currentDate);
  console.log(expireList);

  expireList.forEach((expireItem) => {
    card += `<div class="card">
    <div class="pic">
      <img src="${expireItem.imageUrl}" alt="" class="img" />
    </div>
    <div class="data">
      <div class="rate">
        <p></p>
        <img src="../../assest/img/starIcon.png" alt="" />
      </div>
      <div class="itemName">
        <span class="details">${expireItem.name}</span>
        <br />
        <span class="details">${expireItem.size}</span>

        <br />
        <span class="stock">stoke | code</span>
        <br />
        <span class="details">${expireItem.stoke} | ${expireItem.itemCode}</span>
        <hr style="width: 100%" />
        <div class="price">
          <span>${expireItem.price}</span>
          <img src="../../assest/img/icons8-check-mark-50.png" alt="" />
        </div>
      </div>
    </div>
  </div>`;
  });
  document.getElementById("cardmain").innerHTML = card;
}

function formate(date) {
  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let year = String(date.getFullYear());

  return `${year}-${month}-${day}`;
}

//most popular item calculate function

let reportDB1 = {
  monthly: [
    {
      itemCode: "B1001",
      item_name: "Burger",
      customerId: "C002",
      customer_name: "Manoj",
    },
    {
      itemCode: "B1025",
      item_name: "Fries",
      customerId: "C004",
      customer_name: "Lahiru",
    },
    {
      itemCode: "B1005",
      item_name: "Chicken Burger",
      customerId: "C006",
      customer_name: "Amila",
    },
    {
      itemCode: "B1006",
      item_name: "Veggie Burger",
      customerId: "C007",
      customer_name: "Nimal",
    },
    {
      itemCode: "B1010",
      item_name: "Coke",
      customerId: "C009",
      customer_name: "Sunil",
    },
    {
      itemCode: "B1011",
      item_name: "Pepsi",
      customerId: "C010",
      customer_name: "Kamal",
    },
    {
      itemCode: "B1015",
      item_name: "Chicken Nuggets",
      customerId: "C012",
      customer_name: "Roshan",
    },
    {
      itemCode: "B1020",
      item_name: "Salad",
      customerId: "C016",
      customer_name: "Isuru",
    },
    {
      itemCode: "B1022",
      item_name: "Pizza",
      customerId: "C018",
      customer_name: "Sahan",
    },
    {
      itemCode: "B1024",
      item_name: "Pasta",
      customerId: "C020",
      customer_name: "Nuwan",
    },
    {
      itemCode: "B1030",
      item_name: "Fried Chicken",
      customerId: "C021",
      customer_name: "Ruwan",
    },
    {
      itemCode: "B1005",
      item_name: "Chicken Burger",
      customerId: "C006",
      customer_name: "Amila",
    }, // repeated item
    {
      itemCode: "B1001",
      item_name: "Burger",
      customerId: "C002",
      customer_name: "Manoj",
    }, // repeated item
    {
      itemCode: "B1005",
      item_name: "Chicken Burger",
      customerId: "C006",
      customer_name: "Amila",
    }, // repeated item
    // (Add more records up to 25)
  ],
};
let mostPopularItems = function start() {
  return getMostPopularItems(reportDB1.monthly);
};

let popular = mostPopularItems();
// Function to calculate most popular items
function getMostPopularItems(data) {
  let itemFrequency = {};

  // Count occurrences of each item_name
  data.forEach((item) => {
    if (itemFrequency[item.item_name]) {
      itemFrequency[item.item_name]++;
    } else {
      itemFrequency[item.item_name] = 1;
    }
  });

  // Convert the object into an array and sort by frequency
  let sortedItems = Object.keys(itemFrequency)
    .map((item) => ({ item_name: item, count: itemFrequency[item] }))
    .sort((a, b) => b.count - a.count);

  // Return top 3 most popular items
  return sortedItems.slice(0, 3).map((i) => i.item_name);
}

// Get the most popular items
let mostUser = document.getElementsByClassName("bunGroup");
mostUser[2].addEventListener("click", mostPopularItems);

// Function to create the card HTML for an item
function createCard(itemName, itemCode, price, stock) {
  return `
    <div class="card">
      <div class="pic">
        <img src="../assest/img/${itemName.replace(
          /\s+/g,
          ""
        )}.png" alt="" class="img" />
      </div>
      <div class="data">
        <div class="rate">
          <p></p> 
          <img src="" alt="star" />
        </div>
        <div class="itemName">
          <span class="details">${itemName}</span>
          <br />
          <span class="details">(Regular)</span>
          <br />
          <span class="stock">Stock | code</span>
          <br />
          <span class="details">${stock} | ${itemCode}</span>
          <hr style="width: 100%" />
          <div class="price">
            <span>${price}</span>
            <img src="../assest/img/plusicon.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  `;
}

// Select the container to insert cards
const container = document.getElementById("popularFoodItems");

// Iterate over the most popular items and add them to the container
popular.forEach((item, index) => {
  // Assuming each item has unique price and stock values
  let price = 1500 + index * 100; // Example prices: 1500, 1600, 1700
  let stock = 10 + index * 5; // Example stocks: 10, 15, 20
  let itemCode = `B100${index + 1}`; // Example item codes: B1001, B1002, B1003

  // Append the card HTML
  container.innerHTML += createCard(item, itemCode, price, stock);
});
