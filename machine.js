function showOnly(id) {
  const buttonClick = document
    .getElementById(id)
    .innerText.toLowerCase()
    .trim();

  const all = document.getElementById("job-post");
  const interview = document.getElementById("interview");
  const rejected = document.getElementById("rejected-sections");
 
  all.classList.add("hidden");
  interview.classList.add("hidden");
  rejected.classList.add("hidden");


  if (buttonClick === "all") {
    all.classList.remove("hidden");
  }

  if (buttonClick === "interview") {
    interview.classList.remove("hidden");
    const interviewEmpty = document.getElementById("interview-checking");
    const interviewContain = document.getElementById("contain-interview");

    if (interviewContain.children.length > 0) {
      interviewEmpty.classList.add("hidden");
      interviewContain.classList.remove("hidden");
    } else {
      interviewEmpty.classList.remove("hidden");
      interviewContain.classList.add("hidden");
    }
  }


  if (buttonClick === "rejected") {
    rejected.classList.remove("hidden");
    const rejectedEmpty = document.getElementById("empty-rejected");
    const rejectedContain = document.getElementById("contain-rejected");

    if (rejectedContain.children.length > 0) {
      rejectedEmpty.classList.add("hidden");
      rejectedContain.classList.remove("hidden");
    } else {
      rejectedEmpty.classList.remove("hidden");
      rejectedContain.classList.add("hidden");
    }
  }
}
