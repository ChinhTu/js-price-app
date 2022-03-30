const $ = (value) => {
  return document.getElementById(value);
};

// Name input validate
const fullNameValidate = (nameValue) => {
  // Name input with format "Abc xyz"
  let regExpName = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;
  let nameMsg = $("nameMsg");
  let isNameValid = true;
  // If you forgot enter name
  if (nameValue === "") {
    nameMsg.innerHTML =
      "<span class ='text-danger'>This field is required.</span>";
    isNameValid = false;
  }
  // If your name format is invalid
  else if (!regExpName.test(nameValue)) {
    nameMsg.innerHTML =
      "<span class ='text-danger'>Your full name is invalid.</span>";
    isNameValid = false;
  } else {
    nameMsg.innerHTML = "<span class ='text-success'>Good job!</span>";
  }
  return isNameValid;
};

// Validate for phone
const phoneValidate = (phoneValue) => {
  const regExpPhone = /^([0-9]{4})-([0-9]{3})-([0-9]{3})$/;
  let isPhoneValid = true;
  if (!regExpPhone.test(phoneValue)) {
    $("phoneMsg").innerHTML =
      "<span class ='text-danger'>Your phone number is invalid!</span>";
    isPhoneValid = false;
  } else {
    $("phoneMsg").innerHTML = "<span class ='text-success'>Good job!!</span>";
  }
  return isPhoneValid;
};

let inputPrice = $("inputPrice").value;
// Calculate discount
const calculateDiscount = () => {
  const inputDiscount = $("inputDiscount");
  const discountValue = inputDiscount.value;
  const inputDiscountSelect = $("inputDiscountSelect");
  const discountSelected = inputDiscountSelect.value;
  if (discountSelected == "percent") {
    inputPrice =
      $("inputPrice").value - ($("inputPrice").value * discountValue) / 100;
  }
  if (discountSelected == "vnd") {
    inputPrice = $("inputPrice").value - discountValue;
  }
  return inputPrice;
};

// For calculate button
const calculateTotal = () => {
  if (inputPrice) {
    $("totalValue").innerHTML = `${parseFloat(inputPrice).toFixed(2)} VND`;
    $("thankyouPara").innerHTML = "Thanks for coming! See you again ^^";
  } else {
    $("totalValue").innerHTML = "";
  }
};
