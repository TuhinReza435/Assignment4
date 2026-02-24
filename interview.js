document.addEventListener("click", function (e) {
  if (e.target.classList.contains("interview-in-jd")) {
         return;
    }
  if (e.target.classList.contains("rejected-in-jd")) {
      const cardContainer = e.target;
      const statusBtn =e.target.parentElement.parentElement.children[1].innerText;
    
     if(statusBtn === "rejected")return;
     
        e.target.parentElement.parentElement.children[5].innerHTML = ` <button
              class="btn btn-soft border-red-400 text-red-700 rejected-in-jd"
            >
              REJECTED
            </button>`;
        e.target.parentElement.parentElement.children[1].innerHTML = "rejected";
        const originalCard = e.target.parentElement.parentElement;
        const clonedCard = originalCard.cloneNode(true);
        const interviewContainer = document.getElementById("contain-rejected");
        interviewContainer.appendChild(clonedCard);
        let interviewNumber =
          parseInt(document.getElementById("rejected-number").innerHTML) + 1;

      document.getElementById("rejected-number").innerHTML = interviewNumber;
      e.target.parentElement.parentElement.remove();



      let interviewNumberd =
        parseInt(
          document.getElementById("tot-interview-sjdfnsdkfsdf").innerHTML,
        ) - 1;

      document.getElementById("tot-interview-sjdfnsdkfsdf").innerHTML =
        interviewNumberd;
      
    }
});
