document.addEventListener("click", function (e) {
  if (e.target.classList.contains("interview-in-jd")) {
    const cardContainer = e.target;
    const statusBtn =
      e.target.parentElement.parentElement.children[1].innerText;
    if (cardContainer.innerText === statusBtn) return;

    if (statusBtn === "All") {
      e.target.parentElement.parentElement.children[5].innerHTML = `
        <div class="flex gap-4">
            <button class="btn btn-soft border-green-400 text-green-500 interview-in-jd">
              INTERVIEW
            </button>
        </div>`;
      e.target.parentElement.parentElement.children[1].innerHTML = "interview";
      const originalCard = e.target.parentElement.parentElement;
      const clonedCard = originalCard.cloneNode(true);
      console.log(clonedCard);
      const interviewContainer = document.getElementById("contain-interview");
      interviewContainer.appendChild(clonedCard);

      let interviewNumber =
        parseInt(
          document.getElementById("tot-interview-sjdfnsdkfsdf").innerText,
        ) + 1;
      document.getElementById("tot-interview-sjdfnsdkfsdf").innerHTML =
        interviewNumber;
    }
  }

  if (e.target.classList.contains("rejected-in-jd")) {
      const cardContainer = e.target;
      const statusBtn =e.target.parentElement.parentElement.children[1].innerText;
      if(cardContainer.innerText===statusBtn)return;

      if (statusBtn === "All") {
        e.target.parentElement.parentElement.children[5].innerHTML = ` <button
              class="btn btn-soft border-red-400 text-red-700 rejected-in-jd"
            >
              REJECTED
            </button>`;
            e.target.parentElement.parentElement.children[1].innerHTML =
              "rejected";
               const originalCard = e.target.parentElement.parentElement;
               const clonedCard = originalCard.cloneNode(true);
               const interviewContainer = document.getElementById("contain-rejected");
               interviewContainer.appendChild(clonedCard);
               console.log(interviewContainer);


               let interviewNumber = parseInt(document.getElementById("rejected-number").innerHTML)+1;
              
          
        
          document.getElementById("rejected-number").innerHTML = interviewNumber;
    

      }
  }

});

