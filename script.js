const followBtn = document.querySelector('.follow-btn');

followBtn.addEventListener('click', () => {
  followBtn.classList.toggle('following');
  followBtn.textContent = followBtn.classList.contains('following') 
    ? 'Following' 
    : 'Follow';
});