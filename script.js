let a = "si";
let e = "enter";
let i = "imes";
let o = "ober";
let u = "ufat";

let txtSrc = document.querySelector("#txt-src");
let txtResult = document.querySelector("#txt-result");

let buttonEncrypt = document.querySelector("#encrypt");
let buttonDencrypt = document.querySelector("#dencrypt");

txtSrc.addEventListener("change", function () {

  buttonDencrypt.addEventListener("click", function () {
    txtResult.textContent = txtSrc.value;
    let text = "";
    for (let i = 0; i < txtSrc.value.length; i++) {
      switch (txtSrc.value[i]) {
        case a:
          text += "a";
          break;
        case e:
          text += "e";
          break;
        case i:
          text += "i";
          break;
        case o:
          text += "o";
          break;
        case u:
          text += "u";
          break;
        default:
          text += txtSrc.value[i];
          break;
      }
    }
    txtResult.textContent = text;
  });
  buttonEncrypt.addEventListener("click", function () {
    let text = "";
      for (let i = 0; i < txtSrc.value.length; i++) {
        switch (txtSrc.value[i]) {
        case "a":
          text += a;
          break;
        case "e":
          text += e;
          break;
        case "i":
          text += i;
          break;
        case "o":
          text += o;
          break;
        case "u":
          text += u;
          break;
        default:
          text += txtSrc.value[i];
          break;
      }
    }
    txtResult.textContent = text;
  });
});

let copy = document.querySelector("#copy-button");
copy.addEventListener("click", function () {
  navigator.clipboard.writeText(txtResult.value);
  copy.textContent = "Copiado";

  setInterval(function () {
    copy.textContent = "Copiar";
  }, 4000);
});
