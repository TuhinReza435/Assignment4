document.addEventListener("click", function (e) {
  if (e.target.classList.contains("interview-in-jd")) {
     const cardContainer = e.target;
     
     const statusBtn =e.target.parentElement.parentElement.children[1].innerText;
     if (statusBtn === "interview" || statusBtn === "All") return;
     e.target.parentElement.parentElement.children[5].innerHTML = `
        <div class="flex gap-4">
            <button class="btn btn-soft border-green-400 text-green-500 interview-in-jd">
              INTERVIEW
            </button>
        </div>`;
      e.target.parentElement.parentElement.children[1].innerHTML = "interview";
      const originalCard = e.target.parentElement.parentElement;
      const clonedCard = originalCard.cloneNode(true);
      const interviewContainer = document.getElementById("contain-interview");
      interviewContainer.appendChild(clonedCard);
     e.target.parentElement.parentElement.remove();
      let interviewNumber =
        parseInt(
          document.getElementById("tot-interview-sjdfnsdkfsdf").innerText,
        ) + 1;
      document.getElementById("tot-interview-sjdfnsdkfsdf").innerHTML =interviewNumber;
       


      let interviewNumberd =
        parseInt(document.getElementById("rejected-number").innerText) - 1;
      document.getElementById("rejected-number").innerHTML = interviewNumberd;
    }
  
  
});
