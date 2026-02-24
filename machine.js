function showOnly(id) {
  const buttonClick = document.getElementById(id).innerText.toLowerCase();

  const all = document.getElementById("job-post");
  const interview = document.getElementById("interview");
  const rejected = document.getElementById("rejected");


  all.classList.add("hidden");
  interview.classList.add("hidden");
  rejected.classList.add("hidden");
  const interviewEmpty = interview.children[0]; 
  const interviewContain = interview.children[1];
  interviewEmpty.classList.add('hidden');
  interviewContain.classList.add('hidden'); 

  const rejectedEmpty = rejected.children[0]; 
  const rejectedContain = rejected.children[1]; 

  if (buttonClick === "all") {
    all.classList.remove("hidden");
  }

  if (buttonClick === "interview") {
    interview.classList.remove("hidden"); 


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
    if (rejectedContain.children.length > 0) {
      rejectedEmpty.classList.add("hidden");
      rejectedContain.classList.remove("hidden");
    } else {
      rejectedEmpty.classList.remove("hidden");
      rejectedContain.classList.add("hidden");
    }
  }
}
