const chk = document.getElementById("chk");

chk.addEventListener('change', () => {
  if (chk.checked) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});
