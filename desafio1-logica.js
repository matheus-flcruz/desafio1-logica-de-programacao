function classificarHeroi() {
  const nome = document.getElementById('nome').value.trim();
  const xp = parseInt(document.getElementById('xp').value);

  if (!nome || isNaN(xp)) {
    document.getElementById('resultado').textContent = 'Preencha os dois campos corretamente.';
    return;
  }

  let nivel = '';

  if (xp <= 1000) {
    nivel = 'Ferro';
  } else if (xp <= 2000) {
    nivel = 'Bronze';
  } else if (xp <= 5000) {
    nivel = 'Prata';
  } else if (xp <= 7000) {
    nivel = 'Ouro';
  } else if (xp <= 8000) {
    nivel = 'Platina Diamante';
  } else if (xp <= 9000) {
    nivel = 'Ascendente';
  } else if (xp <= 10000) {
    nivel = 'Imortal';
  } else {
    nivel = 'Radiante';
  }

  document.getElementById('resultado').textContent =
    `O Herói de nome ${nome} está no nível de ${nivel}.`;

  document.getElementById('resultado').style.animation = 'fadeIn 0.5s ease-in-out';

}