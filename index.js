let sendPutRequestBtnElement = document.getElementById("sendPutRequestBtn");
let userInputElement = document.getElementById("userInput");
let requestBodyElement = document.getElementById("requestBody");
let requestStatusElement = document.getElementById("requestStatus");
let httpResponseElement = document.getElementById("httpResponse");
let loadingElement = document.getElementById("loading");

function sendHTTPRequest() {
  let userInputId = userInputElement.value;

  let url = "https://gorest.co.in/public-api/users/" + userInputId;
  let requestBody = requestBodyElement.value;

  let options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer 18166b5722323f8914c755b37c68d3dff27ac9ddc65a953f3326e5061f777381",
    },
    body: requestBody,
  };
  loadingElement.classList.remove("d-none");
  requestStatusElement.classList.add("d-none");

  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      requestStatusElement.classList.remove("d-none");
      loadingElement.classList.add("d-none");

      let requestStatus = jsonData.code;
      let httpResponse = JSON.stringify(jsonData);
      requestStatusElement.textContent = requestStatus;
      httpResponseElement.textContent = httpResponse;
    });
}

sendPutRequestBtnElement.addEventListener("click", sendHTTPRequest);
