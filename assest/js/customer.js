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
  const regex = /7\d*9/;
  const regex1 = /^c\d{3}$/;
  let pattern = ordername;
  if (regex.test(ordername)) {
    ordername = true;
  }
  if (regex1.test(pattern)) {
    ordername = true;
  }

  switch (ordername) {
    case /7\d*9/.test(pattern):
      console.log(ordername);
      let PAT = pattern.toUpperCase();
      console.log(PAT);
      let userByContact = userDB.filter((user) => user.contact == PAT);

      console.log(userByContact);

      userByContact.forEach((user) => {
        card += `<div class="card">
        <div class="pic">
          <img src="${user.imageUrl}" alt="" class="img" />
        </div>
        <div class="data">
          <div class="rate">
            <p></p>
            <img src="../../assest/img/starIcon.png" alt="star" />
          </div>
          <div class="itemName">
            <span class="details">${user.name}</span>
            <br />
            <span class="details">${user.address}</span>

            <br />
            <span class="stock">Date | Time</span>
            <br />
            <span class="details">${user.countycode} | ${user.contact}</span>
            <hr style="width: 100%" />
            <div class="price">
              <span></span>
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
      let userById = userDB.filter((user) => user.customerId == PAT1);
      userById.forEach((user) => {
        card += `<div class="card">
          <div class="pic">
            <img src="${user.imageUrl}" alt="" class="img" />
          </div>
          <div class="data">
            <div class="rate">
              <p></p>
              <img src="../../assest/img/starIcon.png" alt="star" />
            </div>
            <div class="itemName">
              <span class="details">${user.name}</span>
              <br />
              <span class="details">${user.address}</span>
  
              <br />
              <span class="stock">country | Contact</span>
              <br />
              <span class="details">${user.countycode} | ${user.contact}</span>
              <hr style="width: 100%" />
              <div class="price">
                <span>${user.customerId}</span>
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

function InitLoaded() {
  let users = userDB;

  card = "";
  users.forEach((user) => {
    card += `<div class="card">
      <div class="pic">
        <img src="${user.imageUrl}" alt="" class="img" />
      </div>
      <div class="data">
        <div class="rate">
          <p></p>
          <img src="../../assest/img/starIcon.png" alt="" />
        </div>
        <div class="itemName">
          <span class="details">${user.name}</span>
          <br />
          <span class="details">${user.address}</span>

          <br />
          <span class="stock">country | number</span>
          <br />
          <span class="details">${user.countycode} | ${user.contact}</span>
          <hr style="width: 100%" />
          <div class="price">
            <span>${user.customerId}</span>
            <img src="../../assest/img/plus icon.png" alt="" />
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
    document.getElementById("addForm").style.display == "none" ||
    document.getElementById("addForm") === ""
  ) {
    document.getElementById("addForm1").style.display = "none";
    document.getElementById("addForm").style.display = "block";
  } else {
    document.getElementById("addForm").style.display = "none";
  }
}
function loadUpdate() {
  if (
    document.getElementById("addForm1").style.display == "none" ||
    document.getElementById("addForm1") === ""
  ) {
    document.getElementById("addForm").style.display = "none";
    document.getElementById("addForm1").style.display = "block";
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

function validateForm() {
  let cusId = document.getElementById("cus-Id").value;
  let name = document.getElementById("user-name").value;
  let address = document.getElementById("user-address").value;
  let code = document.getElementById("contry-code").value;
  let contact = document.getElementById("contact-number").value;
  let photo = document.getElementById("user-photo").value;

  if (
    cusId == "" ||
    name == "" ||
    address == "" ||
    code == "" ||
    contact == "" ||
    photo == ""
  ) {
    alert("Not Complete Form");
  } else {
    console.log(exisCusId(cusId));
    if (exisCusId(cusId)) {
      alert("Customer Id exist another id enter");
      return false;
    }
    let user = {
      customerId: cusId,
      name: name,
      address: address,
      countycode: code,
      contact: contact,
      imageUrl: photo,
    };
    console.log(user);

    userDB.push(user);
    console.log(userDB);
    document.getElementById("addForm").style.display = "none";
    InitLoaded();
  }
}

document.getElementById("searchbtn1").addEventListener("click", serchUser);

function serchUser() {
  let contact = document.getElementById("searchItem1").value;
  //   let cusId = document.getElementById("customerid");
  //   let date = document.getElementById("orderdate");
  //   let time = document.getElementById("ordertime");
  //   let status = document.getElementById("status");

  let data = userDB.filter((user) => user.contact == contact);
  if (data.length === 0) {
    alert("Not Avaliable User");
    document.getElementById("addForm1").style.display = "none";
    return false;
  }
  console.log(data);
  data.forEach((user) => {
    let userRow = document.createElement("div");
    userRow.id = "updatechild";

    let userName = document.createElement("input");
    userName.type = "text";
    userName.id = "user-nameup";
    userName.value = user.name;
    userName.readOnly = false;

    let userAddress = document.createElement("input");
    userAddress.type = "text";
    userAddress.id = "user-addressup";
    userAddress.value = user.address;
    userAddress.readOnly = false;

    let userContact = document.createElement("input");
    userContact.type = "text";
    userContact.id = "user-contactup";
    userContact.value = user.contact;
    userContact.readOnly = false;

    let CountryCode = document.createElement("input");
    CountryCode.type = "text";
    CountryCode.id = "contry-codeup";
    CountryCode.value = user.countycode;
    CountryCode.readOnly = false;

    let userPhoto = document.createElement("input");
    userPhoto.type = "url";
    userPhoto.id = "user-photo";
    userPhoto.value = user.imageUrl;
    userPhoto.readOnly = false;

    // Append the input fields to the row
    userRow.appendChild(userName);
    userRow.appendChild(userAddress);
    userRow.appendChild(userContact);
    userRow.appendChild(CountryCode);
    userRow.appendChild(userPhoto);

    if (!document.getElementById("addForm1").contains(userRow)) {
      document.getElementById("addForm1").appendChild(userRow);
      console.log("Element appended!");
    } else {
      console.log("Element already exists!");
    }
  });
}

document.getElementById("addbtnOrder1").addEventListener("click", setUpdate);
document.getElementById("addbtnOrder2").addEventListener("click", setDelete);

function setUpdate() {
  let userRow = document.getElementById("updatechild");
  console.log(userRow);

  let contact = document.getElementById("searchItem1").value;
  let username = document.getElementById("user-nameup").value;
  let useraddress = document.getElementById("user-addressup").value;
  let usercontact = document.getElementById("user-contactup").value;
  let contrycode = document.getElementById("contry-codeup").value;
  let userphoto = document.getElementById("user-photo").value;

  console.log(username);
  console.log(useraddress);
  console.log(usercontact);
  console.log(contrycode);
  console.log(userphoto);

  let isUpdated = updateUser(
    userDB,
    contact,
    username,
    useraddress,
    usercontact,
    contrycode,
    userphoto
  );

  if (isUpdated) {
    alert("update Successful");
  } else {
    alert("Update not successful");
  }
  document.getElementById("addForm1").removeChild(userRow);
  document.getElementById("addForm1").style.display = "none";
  InitLoaded();
}

function setDelete() {
  let contact = document.getElementById("searchItem1").value;
  let isDeleted = deleteUser(userDB, contact);
  if (isDeleted) {
    alert("Order Delete Successful");
  } else {
    alert("order dalete not successful");
  }

  document.getElementById("addForm1").style.display = "none";
  InitLoaded();
}

function deleteUser(userdb, contact) {
  const index = userdb.findIndex((user) => user.contact === contact);
  console.log(index);

  if (index !== -1) {
    userdb.splice(index, 1);
    return true;
  }
  alert("Not Founded");
  return false;
}

function updateUser(
  userArray,
  contact,
  username,
  useraddress,
  usercontact,
  contrycode,
  userphoto
) {
  let user = userArray.find((user) => user.contact == contact);

  if (user) {
    user.name = username;
    user.address = useraddress;
    user.contrycode = contrycode;
    user.contact = usercontact;
    user.imageUrl = userphoto;

    console.log(user);
    console.log(userDB);
    return true;
  }
  alert("User Not founded");
  return false;
}

function exisCusId(cusId) {
  console.log(cusId);
  for (let i = 0; i < userDB.length; i++) {
    console.log(userDB[i].customerId);
    if (userDB[i].customerId == cusId) {
      return true;
    }
  }
  return false;
}
