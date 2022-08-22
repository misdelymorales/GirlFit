// const singin= document.getElementById("container-sing-in");
// const singup= document.getElementById("container-sign-up");
const btnLogin = document
  .getElementById("btn-login")
  .addEventListener("click", next);

export function next() {
  const idSend = this.getAttribute("data-id");
  const nextPage = item.getAttribute("id");
  if (id !== idSend) {
    item.classList.add("hidden");
  } else {
    item.classList.remove("hidden");
  }
}
