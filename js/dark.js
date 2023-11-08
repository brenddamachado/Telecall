document.addEventListener('DOMContentLoaded', () => {
  // Verifique a preferência do modo escuro no Local Storage
  const darkModePreference = localStorage.getItem('darkMode');

  // Verifique se a preferência é "enabled"
  if (darkModePreference === 'enabled') {
    document.body.classList.add('dark');
    const chk = document.getElementById("chk");
    chk.checked = true;
  }

  // Adicione o evento de mudança para alternar o modo escuro na página atual
  const chk = document.getElementById("chk");

  chk.addEventListener('change', () => {
    if (chk.checked) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'disabled');
    }
  });
});
