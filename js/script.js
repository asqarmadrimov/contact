let $ = function(selector, fother = document) {
  return fother.querySelector(selector);
}

let elForm = $(".form-contact");
let elName = $(".input-username", elForm);
let elSurName = $(".input-usersurname", elForm);
let elNumber = $(".input-usernumber", elForm);
let elResulList = $(".list-content"); 

let arrey = [];

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  elResulList.innerHTML = "";

  let object = {
    name: elName.value,
    surName: elSurName.value,
    numbers: elNumber.value,
  };

  elName.value = "";
  elSurName.value = "";
  elNumber.value = "";

  arrey.push(object);

  arrey.forEach(function(result) {
    let elSavedText = document.createElement("li");
    let elSavedName = document.createElement("strong");
    let elSavedSurName = document.createElement("strong");
    let elSavedNamber = document.createElement("a");

    elSavedText.setAttribute("class", "d-flex justify-content-aroud align-items-center w-100");
    elSavedName.setAttribute("class", "fs-5");
    elSavedSurName.setAttribute("class", "fs-5 ms-1");
    elSavedNamber.setAttribute("class", "namber-tel fs-6 ms-3");
    elSavedNamber.href =  "tel: +998911231212";
    
    elSavedName.textContent = `"${result.name}`;
    elSavedSurName.textContent = `${result.surName}"`;
    elSavedNamber.textContent =`${result.numbers}`;

    elSavedText.append(elSavedName, elSavedSurName, elSavedNamber);
    elResulList.appendChild(elSavedText);
  })

  console.log(arrey);
  console.log(object);
})
