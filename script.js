const loadingScreen = document.getElementById("loadingScreen");
const formLogin = document.getElementById("formLogin");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const erroEmail = document.getElementById("erroEmail");
const erroSenha = document.getElementById("erroSenha");
const botaoLogin = document.getElementById("botaoLogin");
const toggleSenha = document.getElementById("toggleSenha");
const toast = document.getElementById("toast");

window.addEventListener("load", () => {
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
  }, 800);
});

toggleSenha.addEventListener("click", () => {
  const icone = toggleSenha.querySelector("i");

  if (senha.type === "password") {
    senha.type = "text";
    icone.classList.remove("fa-eye");
    icone.classList.add("fa-eye-slash");
  } else {
    senha.type = "password";
    icone.classList.remove("fa-eye-slash");
    icone.classList.add("fa-eye");
  }
});

function validarEmail(valor) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
}

function limparErros() {
  erroEmail.textContent = "";
  erroSenha.textContent = "";
}

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  limparErros();

  const valorEmail = email.value.trim();
  const valorSenha = senha.value.trim();

  let valido = true;

  if (!valorEmail) {
    erroEmail.textContent = "Digite seu e-mail.";
    valido = false;
  } else if (!validarEmail(valorEmail)) {
    erroEmail.textContent = "Informe um e-mail válido.";
    valido = false;
  }

  if (!valorSenha) {
    erroSenha.textContent = "Digite sua senha.";
    valido = false;
  } else if (valorSenha.length < 6) {
    erroSenha.textContent = "A senha precisa ter no mínimo 6 caracteres.";
    valido = false;
  }

  if (!valido) return;

  botaoLogin.classList.add("loading");
  botaoLogin.disabled = true;

  setTimeout(() => {
    botaoLogin.classList.remove("loading");
    botaoLogin.disabled = false;
    toast.classList.add("show");
    formLogin.reset();

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }, 1600);
});