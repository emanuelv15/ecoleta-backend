import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("items").insert([
    { title: "Lampadas", image: "lampadas.svg" },
    { title: "Pilhas e Baterias", image: "baterias.svg" },
    { title: "Papeis", image: "papeis-papelao.svg" },
    { title: "Eletronicos", image: "eletronicos.svg" },
    { title: "Organicos", image: "organicos.svg" },
    { title: "Oleo de Cozinha", image: "oleo.svg" },
  ]);
}
