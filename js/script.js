// CURRENT DATE
var today = new Date();
var ajkerDate = today.toDateString();
document.getElementById("date").innerText = ajkerDate;

// COMPLETE BUTTON
document.getElementById("complete-btn1").addEventListener("click", function () {
  alert("Board updated Successfully");
  const assignedValue = document.getElementById("task-assigned").innerText;
  const convertedAssignedValue = parseInt(assignedValue);
  const abstract = convertedAssignedValue - 1;
  document.getElementById("task-assigned").innerText = abstract;

  const navNumberValue = document.getElementById("navNumber").innerText;
  const convertedNavNumber = parseInt(navNumberValue);
  const sum = convertedNavNumber + 1;
  document.getElementById("navNumber").innerText = sum;

  let time = new Date();
  let ajkerTime = time.toLocaleTimeString();

  const cardTitle = document.getElementById("card1-title").innerText;
  const history = document.getElementById("all-history");
  const p = document.createElement("p");
  p.innerHTML = `
   <p class="bg-[#F4F7FF] text-start rounded-lg p-2 m-5">
              You have completed the task ${cardTitle} at ${ajkerTime}.
            </p>
  `;
  history.appendChild(p);

  this.disabled = "true";
  document.getElementById("complete-btn1").style.backgroundColor = "gray";
});
document.getElementById("complete-btn2").addEventListener("click", function () {
  alert("Board updated Successfully");

  const assignedValue = document.getElementById("task-assigned").innerText;
  const convertedAssignedValue = parseInt(assignedValue);
  const abstract = convertedAssignedValue - 1;
  document.getElementById("task-assigned").innerText = abstract;

  const navNumberValue = document.getElementById("navNumber").innerText;
  const convertedNavNumber = parseInt(navNumberValue);
  const sum = convertedNavNumber + 1;
  document.getElementById("navNumber").innerText = sum;

  let time = new Date();
  let ajkerTime = time.toLocaleTimeString();

  const cardTitle = document.getElementById("card2-title").innerText;
  const history = document.getElementById("all-history");
  const p = document.createElement("p");
  p.innerHTML = `
   <p class="bg-[#F4F7FF] text-start rounded-lg p-2 m-5">
              You have completed the task ${cardTitle} at ${ajkerTime}.
            </p>
  `;
  history.appendChild(p);

  this.disabled = "true";
  document.getElementById("complete-btn2").style.backgroundColor = "gray";
});
document.getElementById("complete-btn3").addEventListener("click", function () {
  alert("Board updated Successfully");

  const assignedValue = document.getElementById("task-assigned").innerText;
  const convertedAssignedValue = parseInt(assignedValue);
  const abstract = convertedAssignedValue - 1;
  document.getElementById("task-assigned").innerText = abstract;

  const navNumberValue = document.getElementById("navNumber").innerText;
  const convertedNavNumber = parseInt(navNumberValue);
  const sum = convertedNavNumber + 1;
  document.getElementById("navNumber").innerText = sum;

  let time = new Date();
  let ajkerTime = time.toLocaleTimeString();

  const cardTitle = document.getElementById("card3-title").innerText;
  const history = document.getElementById("all-history");
  const p = document.createElement("p");
  p.innerHTML = `
   <p class="bg-[#F4F7FF] text-start rounded-lg p-2 m-5">
              You have completed the task ${cardTitle} at ${ajkerTime}.
            </p>
  `;
  history.appendChild(p);

  this.disabled = "true";
  document.getElementById("complete-btn3").style.backgroundColor = "gray";
});
document.getElementById("complete-btn4").addEventListener("click", function () {
  alert("Board updated Successfully");

  const assignedValue = document.getElementById("task-assigned").innerText;
  const convertedAssignedValue = parseInt(assignedValue);
  const abstract = convertedAssignedValue - 1;
  document.getElementById("task-assigned").innerText = abstract;

  const navNumberValue = document.getElementById("navNumber").innerText;
  const convertedNavNumber = parseInt(navNumberValue);
  const sum = convertedNavNumber + 1;
  document.getElementById("navNumber").innerText = sum;

  let time = new Date();
  let ajkerTime = time.toLocaleTimeString();

  const cardTitle = document.getElementById("card4-title").innerText;
  const history = document.getElementById("all-history");
  const p = document.createElement("p");
  p.innerHTML = `
   <p class="bg-[#F4F7FF] text-start rounded-lg p-2 m-5">
              You have completed the task ${cardTitle} at ${ajkerTime}.
            </p>
  `;
  history.appendChild(p);

  this.disabled = "true";
  document.getElementById("complete-btn4").style.backgroundColor = "gray";
});
document.getElementById("complete-btn5").addEventListener("click", function () {
  alert("Board updated Successfully");

  const assignedValue = document.getElementById("task-assigned").innerText;
  const convertedAssignedValue = parseInt(assignedValue);
  const abstract = convertedAssignedValue - 1;
  document.getElementById("task-assigned").innerText = abstract;

  const navNumberValue = document.getElementById("navNumber").innerText;
  const convertedNavNumber = parseInt(navNumberValue);
  const sum = convertedNavNumber + 1;
  document.getElementById("navNumber").innerText = sum;

  let time = new Date();
  let ajkerTime = time.toLocaleTimeString();

  const cardTitle = document.getElementById("card5-title").innerText;
  const history = document.getElementById("all-history");
  const p = document.createElement("p");
  p.innerHTML = `
   <p class="bg-[#F4F7FF] text-start rounded-lg p-2 m-5">
              You have completed the task ${cardTitle} at ${ajkerTime}.
            </p>
  `;
  history.appendChild(p);

  this.disabled = "true";
  document.getElementById("complete-btn5").style.backgroundColor = "gray";
});
document.getElementById("complete-btn6").addEventListener("click", function () {
  alert("Board updated Successfully");

  const assignedValue = document.getElementById("task-assigned").innerText;
  const convertedAssignedValue = parseInt(assignedValue);
  const abstract = convertedAssignedValue - 1;
  document.getElementById("task-assigned").innerText = abstract;

  const navNumberValue = document.getElementById("navNumber").innerText;
  const convertedNavNumber = parseInt(navNumberValue);
  const sum = convertedNavNumber + 1;
  document.getElementById("navNumber").innerText = sum;

  let time = new Date();
  let ajkerTime = time.toLocaleTimeString();

  const cardTitle = document.getElementById("card6-title").innerText;
  const history = document.getElementById("all-history");
  const p = document.createElement("p");
  p.innerHTML = `
   <p class="bg-[#F4F7FF] text-start rounded-lg p-2 m-5">
              You have completed the task ${cardTitle} at ${ajkerTime}.
            </p>
  `;
  history.appendChild(p);

  this.disabled = "true";
  document.getElementById("complete-btn6").style.backgroundColor = "gray";
});

// CONGRATULATION ALERT
// const observer = new MutationObserver(function (mutationsList, observer) {
//   const navNumberElement = document.getElementById("navNumber");

//   if (navNumberElement) {
//     const navNumberValue = navNumberElement.innerText.trim();
//     const convertedNavNumber = parseInt(navNumberValue, 10);

//     if (convertedNavNumber === 29) {
//       alert("Congratulations! You have completed all task.");
//       observer.disconnect();
//     }
//   }
// });

// observer.observe(document.body, { childList: true, subtree: true });

// CLEAR HISTORY
document
  .getElementById("clear-history-btn")
  .addEventListener("click", function () {
    document.getElementById("all-history").innerHTML = "";
  });

// GOING TO Q&A PAGE
document.getElementById("discover").addEventListener("click", function () {
  window.location.href = "qna.html";
});

// THEME CHANGE
document.getElementById("theme-btn").addEventListener("click", function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});
