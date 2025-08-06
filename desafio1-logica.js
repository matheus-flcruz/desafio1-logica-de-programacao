let nomeDoHeroi = 'mattflc';
let nivelDeExperiencia = 10500;

if (nivelDeExperiencia <= 1000) {
    console.log(`O Herói de nome ${nomeDoHeroi} está no nivel de Ferro.`);
} else if (nivelDeExperiencia > 1000 && nivelDeExperiencia <= 2000) {
    console.log(`O Herói de nome ${nomeDoHeroi} está no nivel de Bronze.`);
} else if (nivelDeExperiencia > 2000 && nivelDeExperiencia <= 5000) {
    console.log(`O Herói de nome ${nomeDoHeroi} está no nivel de Prata.`);
} else if (nivelDeExperiencia > 5000 && nivelDeExperiencia <= 7000) {
    console.log(`O Herói de nome ${nomeDoHeroi} está no nivel de Ouro.`);
} else if (nivelDeExperiencia > 7000 && nivelDeExperiencia <= 8000) {
    console.log(`O Herói de nome ${nomeDoHeroi} está no nivel de Platina Diamante.`);
} else if (nivelDeExperiencia > 8000 && nivelDeExperiencia <= 9000) {
    console.log(`O Herói de nome ${nomeDoHeroi} está no nivel de Ascendente.`);
} else if (nivelDeExperiencia > 9000 && nivelDeExperiencia <= 10000) {
    console.log(`O Herói de nome ${nomeDoHeroi} está no nivel de Imortal.`);
} else {
    console.log(`O Herói de nome ${nomeDoHeroi} está no nivel de Radiante.`);
}