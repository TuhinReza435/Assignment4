document.addEventListener("click", function (e) {
  if (e.target.closest(".delete-btn")) {
    const card = e.target.closest(".job-describtion");
    const jobId = card.querySelector(".id").innerText.trim();
    const parentContainerId = card.parentElement.id;

   
    if (parentContainerId === "job-list") {

      removeCardFromSection(
        "contain-interview",
        jobId,
        "tot-interview-sjdfnsdkfsdf",
      );
      removeCardFromSection("contain-rejected", jobId, "rejected-number");


      updateCounter("total", -1);

     
      updateAvailableJobsCount();

      card.remove();
    }
   
    else {
      if (parentContainerId === "contain-interview") {
        updateCounter("tot-interview-sjdfnsdkfsdf", -1);
      } else if (parentContainerId === "contain-rejected") {
        updateCounter("rejected-number", -1);
      }
      card.remove();
    }
  }
});


function updateAvailableJobsCount() {

  const availableJobsElem = document.querySelector("section h1 + p");
  if (availableJobsElem) {
  
    let currentCount = parseInt(availableJobsElem.innerText);
    if (currentCount > 0) {
      availableJobsElem.innerText = `${currentCount - 1} jobs`;
    }
  }
}

function removeCardFromSection(sectionId, jobId, counterId) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const cards = section.querySelectorAll(".job-describtion");
  cards.forEach((card) => {
    const currentId = card.querySelector(".id").innerText.trim();
    if (currentId === jobId) {
      card.remove();
      updateCounter(counterId, -1);
    }
  });
}

function updateCounter(id, amount) {
  const counterElem = document.getElementById(id);
  if (counterElem) {
    let currentVal = parseInt(counterElem.innerText) || 0;
    counterElem.innerText = Math.max(0, currentVal + amount);
  }
}
 