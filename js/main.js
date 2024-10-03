// store input in vars

var siteNameInput = document.getElementById("siteNameInput");
var siteUrlInput = document.getElementById("siteUrlInput");

//check
console.log(siteNameInput, siteUrlInput);

var websiteList = []; //  Array Contains all Obj
// Function to validate the URL
function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}

function addWebsite() {
  var website = {
    name: siteNameInput.value,
    webUrl: siteUrlInput.value,
  };

  // to check Name != " " && Validate the URL
  if (!website.name && !isValidUrl(website.webUrl)) {
    alert("Please enter name and a valid URL.");
    return; // Exit the function if the URL is not valid
  } else {
    websiteList.push(website);

    clearList();
  }
  displayList();
  console.log(website);

  console.log(websiteList);
}

// function to clear input

function clearList() {
  siteNameInput.value = "";
  siteUrlInput.value = "";
}

// how to delete item from data

function displayList() {
  console.log("Displaying list...");
  var table = "";

  for (var i = 0; i < websiteList.length; i++) {
    console.log(
      `Adding item ${i}: ${websiteList[i].name}, ${websiteList[i].webUrl}`
    );
    table += `<tr>
                    <td>${i}</td>
                    <td>${websiteList[i].name}</td>
                    <td><button class='btn btn-visit btn-sm ' onclick="window.location.href='${websiteList[i].webUrl}'"><span><i class="fa-solid fa-eye"></i></span> Visit </button> </td>
                    <td><button onclick="deleteItem(${i})" class='btn btn-delet btn-sm'><span><i class="fa-solid fa-trash-can" ></i></span> delete </button> </td>
                    
                </tr>`;
  }

  document.getElementById("tableBody").innerHTML = table;
  console.log("List displayed.");
}

// delet item
function deleteItem(index) {
  websiteList.splice(index, 1);
  displayList();
  console.log(websiteList);
}
