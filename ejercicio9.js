let frase = prompt("ingrese una frase 5 caracteres");

console.log(frase.length);
console.log(frase.substring(0, 2));

if (
  frase.substring(0, 1) === "a" ||
  frase.substring(0, 1) === "e" ||
  frase.substring(0, 1) === "i" ||
  frase.substring(0, 1) === "o" ||
  frase.substring(0, 1) === "u"
) {
  document.write(frase.substring(0, 1));
}
if (
  frase.substring(1, 1) === "a" ||
  frase.substring(1, 1) === "e" ||
  frase.substring(1, 1) === "i" ||
  frase.substring(1, 1) === "o" ||
  frase.substring(1, 1) === "u"
) {
  document.write(frase.substring(1, 1));
}
if (
  frase.substring(2, 1) === "a" ||
  frase.substring(2, 1) === "e" ||
  frase.substring(2, 1) === "i" ||
  frase.substring(2, 1) === "o" ||
  frase.substring(2, 1) === "u"
) {
  document.write(frase.substring(2, 1));
}
