let preLoading = false;

const showTheMen = () => {
  let preloader = document.getElementById("preloader");
  preloader.style.display = "block";
};

const hideTheMen = () => {
  let preloader = document.getElementById("preloader");
  preloader.style.display = "none";
  preLoading = false;
};

const getData = () => {
  if (!preLoading) {
    preLoading = true;
    fetch("https://akademia108.pl/api/ajax/get-users.php")
      .then((resp) => resp.json())
      .then((data) => {
        let hr = document.createElement("hr");
        document.body.appendChild(hr);

        for (let user of data) {
          let pId = document.createElement("p");
          let pName = document.createElement("p");
          let pWeb = document.createElement("p");

          pId.innerText = "User Id: " + user.id;
          pName.innerText = "User Name: " + user.name;
          pWeb.innerHTML = "User Web: " + user.website + "<br/>-------- ";

          document.body.appendChild(pId);
          document.body.appendChild(pName);
          document.body.appendChild(pWeb);
        }

        hideTheMen();
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const scrollToEndOfPage = () => {
  let doc = document.documentElement;
  let scrollHeight = doc.scrollHeight;
  let scrollTop = doc.scrollTop;
  let clientHeight = doc.clientHeight;

  let sumScroll = scrollTop + clientHeight;

  // console.log(scrollHeight);
  // console.log(scrollTop);
  // console.log(clientHeight);

  if (sumScroll >= scrollHeight) {
    showTheMen();
    getData();
  }
};

window.addEventListener("scroll", scrollToEndOfPage);
