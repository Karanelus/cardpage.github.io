// Variables

const cardHolderName = document.querySelector("#CardholderName");
const cardNumber = document.querySelector("#CardNumber");
const cardDataExpireMounth = document.querySelector("#CardExpMounth");
const cardDataExpireYear = document.querySelector("#CardExpYear");
const cardHolderCVC = document.querySelector("#CVC");
const cardHolderNameRender = document.querySelector(".cardHolderInfo--Name");
const cardNumberRender = document.querySelector(".cardFrontNumber");
const cardMounthRender = document.querySelector("#CardMounthRender");
const cardYearRender = document.querySelector("#CardYearRender");
const cardHolderCVCRender = document.querySelector(".cardHolderInfo--CVC");
const cardButtonConfirm = document.querySelector("#confirm");
const cardButtonContinue = document.querySelector("#continue");
const cardHolderNameErrorText = document.querySelector("[data-CardnameSet]");
const cardNumberErrorText = document.querySelector("[data-CardnumberSet]");
const cardExpireDataErrorText = document.querySelector(
  "[data-CardexpiredataSet]"
);
const cardHolderCVCErrorText = document.querySelector("[data-CardCVCSet]");
let cardNumberSpacing;

//Triggers

cardHolderName.addEventListener("input", (e) => {
  cardHolderNameRender.innerText = e.target.value.toUpperCase();
  if (e.target.value.match(/[^A-Za-z ]/gi)) {
    cardHolderNameErrorText.setAttribute(
      "data-CardnameSet",
      "wrong symbol, latins only".toUpperCase()
    );
  } else {
    cardHolderNameRender.innerText = e.target.value.toUpperCase();
    let emptyText = "";
    cardHolderNameErrorText.setAttribute("data-CardnameSet", emptyText);
  }
  if (e.target.value === "") {
    cardHolderNameRender.innerText = "Jane Appleseed".toUpperCase();
    let emptyText = "";
    cardHolderNameErrorText.setAttribute("data-CardnameSet", emptyText);
  }
});

cardNumber.addEventListener("input", (e) => {
  cardNumberRender.innerText = e.target.value;
  if (e.target.value.match(/[^0-9 ]/gi)) {
    cardNumberErrorText.setAttribute(
      "data-CardnumberSet",
      "wrong symbols, only numbers".toUpperCase()
    );
  } else {
    cardNumberRender.innerText = e.target.value.toUpperCase();
    let emptyText = "";
    cardNumberErrorText.setAttribute("data-CardnumberSet", emptyText);
  }
  if (e.target.value.length > 16) {
    e.target.value = e.target.value.substr(1, 16);
    cardNumberRender.innerText = e.target.value;
  }
  if (e.target.value === "") {
    cardNumberRender.innerText = "0000 0000 0000 0000";
  }
});

cardDataExpireMounth.addEventListener("input", (e) => {
  cardMounthRender.innerText = e.target.value;
  cardExpireDataErrorText.setAttribute("data-CardexpiredataSet", "");
  if (e.target.value.length > 2) {
    e.target.value = e.target.value.substr(1, 3);
    cardMounthRender.innerText = e.target.value;
    cardExpireDataErrorText.setAttribute("data-CardexpiredataSet", "");
  }
  if (e.target.value === "") {
    cardMounthRender.innerText = "01";
    cardExpireDataErrorText.setAttribute("data-CardexpiredataSet", "");
  }
});

cardDataExpireYear.addEventListener("input", (e) => {
  cardYearRender.innerText = e.target.value;
  cardExpireDataErrorText.setAttribute("data-CardexpiredataSet", "");
  if (e.target.value.length > 2) {
    e.target.value = e.target.value.substr(1, 3);
    cardYearRender.innerText = e.target.value;
    cardExpireDataErrorText.setAttribute("data-CardexpiredataSet", "");
  }
  if (e.target.value === "") {
    cardYearRender.innerText = "22";
    cardExpireDataErrorText.setAttribute("data-CardexpiredataSet", "");
  }
});

cardHolderCVC.addEventListener("input", (e) => {
  cardHolderCVCRender.innerText = e.target.value;
  cardHolderCVCErrorText.setAttribute("data-CardCVCSet", "");
  if (e.target.value.length > 3) {
    e.target.value = e.target.value.substr(1, 4);
    cardHolderCVCRender.innerText = e.target.value;
    cardHolderCVCErrorText.setAttribute("data-CardCVCSet", "");
  } else {
    cardHolderCVCRender.innerText = e.target.value;
    cardHolderCVCErrorText.setAttribute("data-CardCVCSet", "");
  }
  if (e.target.value === "") {
    cardHolderCVCRender.innerText = "000";
    cardHolderCVCErrorText.setAttribute("data-CardCVCSet", "");
  }
});

cardButtonConfirm.addEventListener("click", () => {
  if (
    cardHolderName.value.length <= 0 ||
    cardHolderName.value.match(/[^A-Za-z ]/gi) ||
    cardNumber.value.length <= 0 ||
    cardNumber.value.length < 16 ||
    cardNumber.value.match(/[^0-9 ]/gi) ||
    cardDataExpireMounth.value.length <= 0 ||
    cardDataExpireMounth.value < 1 ||
    cardDataExpireMounth.value > 12 ||
    cardDataExpireYear.value.length <= 0 ||
    cardDataExpireYear.value < 22 ||
    cardDataExpireYear.value > 35 ||
    cardHolderCVC.value.length <= 0 ||
    cardHolderCVC.value.length < 3
  ) {
    // Error text Card holder name
    if (cardHolderName.value.length <= 0) {
      cardHolderNameErrorText.setAttribute(
        "data-CardnameSet",
        "Can't be blank".toUpperCase()
      );
    }
    // Error text Card number
    if (cardNumber.value.length <= 0) {
      cardNumberErrorText.setAttribute(
        "data-CardnumberSet",
        "Can't be blank".toUpperCase()
      );
    }
    if (cardNumber.value.length > 0 && cardNumber.value.length < 16) {
      cardNumberErrorText.setAttribute(
        "data-CardnumberSet",
        "Need to be 16 numbers".toUpperCase()
      );
    }
    // Error text Mounth and Year
    if (
      (cardDataExpireMounth.value.length || cardDataExpireYear.value.length) <=
      0
    ) {
      cardExpireDataErrorText.setAttribute(
        "data-CardexpiredataSet",
        "Can't be blank".toUpperCase()
      );
    }
    if (
      (cardDataExpireMounth.value.length || cardDataExpireYear.value.length) >
        0 &&
      (cardDataExpireMounth.value < 1 ||
        cardDataExpireMounth.value > 12 ||
        cardDataExpireYear.value < 22 ||
        cardDataExpireYear.value > 35)
    ) {
      cardExpireDataErrorText.setAttribute(
        "data-CardexpiredataSet",
        "wrong data, please check".toUpperCase()
      );
    }
    //Error text CVC
    if (cardHolderCVC.value.length <= 0) {
      cardHolderCVCErrorText.setAttribute("data-CardCVCSet", "Can't be blank");
    }
    if (cardHolderCVC.value.length > 0 && cardHolderCVC.value.length < 3) {
      cardHolderCVCErrorText.setAttribute("data-CardCVCSet", "3 numbers need");
    }
  } else {
    document.querySelector(".CardOperationAccepted").classList.remove("hidden");
    document.querySelector(".CardData").classList.add("hidden");
  }
});

cardButtonContinue.addEventListener("click", () => {
  document.querySelector(".CardData").classList.remove("hidden");
  document.querySelector(".CardOperationAccepted").classList.add("hidden");
  cardHolderName.value = "";
  cardNumber.value = "";
  cardDataExpireMounth.value = "";
  cardDataExpireYear.value = "";
  cardHolderCVC.value = "";
  cardHolderNameRender.innerText = "Jane Appleseed".toUpperCase();
  cardNumberRender.innerText = "0000 0000 0000 0000";
  cardMounthRender.innerText = "01";
  cardYearRender.innerText = "22";
  cardHolderCVCRender.innerText = "000";
});
