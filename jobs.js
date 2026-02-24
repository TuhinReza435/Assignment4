// সব card select
document.querySelectorAll(".job-describtion").forEach((card) => {
  card.addEventListener("click", function (e) {
    if (e.target.classList.contains("interview-in-jd")) {
      // btn-container dhora
      // console.log("HI");
      const copyCardStatus = e.target
        .closest(".job-describtion")
        .querySelector("div > .not-applied-in-jd").parentElement;
      if (e.target.innerText === copyCardStatus.innerText) return;

      //console.log('Hwllo')
      // clone the INTERVIEW button & replace NOT APPLIED button
      const copyst = e.target.cloneNode(true);
      copyCardStatus.appendChild(copyst);
      copyCardStatus.firstElementChild.remove();

      const newInterview = e.target.closest(".job-describtion");
      const newinterviewList = document.getElementById("contain-interview");
      const copyCard = newInterview.cloneNode(true);
      newinterviewList.appendChild(copyCard);

      const totinterview = document.getElementById(
        "tot-interview-sjdfnsdkfsdf",
      );
      let totValue = parseInt(totinterview.innerText);
      totValue = totValue + 1;
      // console.log( totValue)
      totinterview.innerText = totValue;
    }
  });
});

document.querySelectorAll(".job-describtion").forEach((card) => {
  card.addEventListener("click", function (e) {
    if (e.target.classList.contains("rejected-in-jd")) {
      const targetBtn = e.target;
      const cardContainer = targetBtn.closest(".job-describtion");

      const copyCardStatus = cardContainer.querySelector(
        "div > .not-applied-in-jd",
      ).parentElement;

      // INTERVIEW button click
      if (targetBtn.classList.contains("interview-in-jd")) {
        // clone INTERVIEW button & replace NOT APPLIED
        const copyst = targetBtn.cloneNode(true);
        copyCardStatus.appendChild(copyst);
        copyCardStatus.firstElementChild.remove();

        // copy entire card to interview section
        const newinterviewList = document.getElementById("contain-interview");
        const copyCard = cardContainer.cloneNode(true);
        newinterviewList.appendChild(copyCard);
      }

      // REJECTED button click
      if (
        targetBtn.classList.contains("rejected-in-jd") ||
        targetBtn.classList.contains("rejected-in-je")
      ) {
        // clone REJECTED button & replace NOT APPLIED
        const copyst = targetBtn.cloneNode(true);
        copyCardStatus.appendChild(copyst);
        copyCardStatus.firstElementChild.remove();

        // copy entire card to rejected section
        const rejectedList = document.getElementById("contain-rejected");
        const copyCard = cardContainer.cloneNode(true);
        rejectedList.appendChild(copyCard);
      }

      const totinterview = document.getElementById("rejected-number");
      let totValue = parseInt(totinterview.innerText);
      totValue = totValue + 1;

      console.log(totValue);
      totinterview.innerText = totValue;
    }
  });
});

document.querySelectorAll(".delete-btn").forEach((card) => {
  card.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("delete-btn") ||
      e.target.closest(".delete-btn")
    ) {
      const cardContainer = e.target.closest(".job-describtion");
      if (cardContainer) {
        cardContainer.remove(); 
        console.log("Card removed:", cardContainer);
        let total= document.getElementById("total");
        let totvalue =parseInt(total.innerText);
        totvalue--;
        total.innerHTML=totvalue;
      }
    }
  });
});