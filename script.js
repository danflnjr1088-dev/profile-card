const followBtn = document.querySelector('.follow-btn');

followBtn.addEventListener('click', () => {
  followBtn.classList.toggle('following');
  followBtn.textContent = followBtn.classList.contains('following') 
    ? 'Following' 
    : 'Follow';
});

const messageBtn = document.getElementById("message-btn");
message.addEventListener("click", () =>{
  const myEmail = "danflnjr1088@gmail.com";
  const subject = encodeURIComponent("Inquery from your profile card");

   window.location.href = `mailto:${myEmail}?subject=${subject}`;
});
