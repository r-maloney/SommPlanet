"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Regions",
      [
        {
          name: "Mosel",
          description: "Most famous for riesling, sekt, pinot noir",
          imgUrl: "/images/regions/mosel.jpg",
          countryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rheingau",
          description: "Most famous for riesling, pinot noir",
          imgUrl: "/images/regions/rheingau.jpg",
          countryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rheinhessen",
          description: "Most famous for silvaner, dornfelder",
          imgUrl: "/images/regions/rheinhessen.jpg",
          countryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Franken",
          description: "Most famous for muller-thurgau, silvaner",
          imgUrl: "/images/regions/franken.jpg",
          countryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ahr",
          description: "Most famous for portugieser, fruhburgunder",
          imgUrl: "/images/regions/ahr.jpg",
          countryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Baden",
          description: "Most famous for pinot gris, chasselas, pinot noir",
          imgUrl: "/images/regions/baden.jpg",
          countryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "La Rioja",
          description: "Most famous for tempranillo, garnacha, viura",
          imgUrl: "/images/regions/la-rioja.jpg",
          countryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Aragon",
          description: "Most famous for garnacha, tempranillo, carignan",
          imgUrl: "/images/regions/aragon.jpg",
          countryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Murcia",
          description: "Most famous for monastrell, syrah",
          imgUrl: "/images/regions/murcia.jpg",
          countryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Valencia",
          description: "Most famous for monastrell, airen",
          imgUrl: "/images/regions/valencia.jpg",
          countryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Extremadura",
          description: "Most famous for cabernet sauvignon, syrah",
          imgUrl: "/images/regions/extremadura.jpg",
          countryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Navarra",
          description: "Most famous for garnacha, rosado",
          imgUrl: "/images/regions/navarra.jpg",
          countryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Catalunya",
          description: "Most famous for cava, syrah",
          imgUrl: "/images/regions/catalunya.jpg",
          countryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tuscany",
          description:
            "Most famous for sangiovese, merlot, cabernet sauvingon, cabernet franc",
          imgUrl: "/images/regions/tuscany.jpg",
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Piedmont",
          description: "Most famous for nebbiolo, barbera, moscato, arneis",
          imgUrl: "/images/regions/piedmont.jpg",
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lazio",
          description: "Most famous for sangiovese, merlot",
          imgUrl: "/images/regions/lazio.jpg",
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Puglia",
          description: "Most famous for primitivo, chardonnay",
          imgUrl: "/images/regions/puglia.jpg",
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Veneto",
          description: "Most famous for prosecco, merlot",
          imgUrl: "/images/regions/veneto.jpg",
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sicily",
          description: "Most famous for nero d'avola, catarratto",
          imgUrl: "/images/regions/sicily.jpg",
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lombardy",
          description: "Most famous for pinot noir, chardonnay, pinto bianco",
          imgUrl: "/images/regions/lombardy.jpg",
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mendoza",
          description: "Most famous for malbec, syrah, tempranillo",
          imgUrl: "/images/regions/mendoza.jpg",
          countryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Patagonia",
          description: "Most famous for cabernet franc, malbec",
          imgUrl: "/images/regions/patagonia.jpg",
          countryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "San Juan",
          description: "Most famous for malbec, conarda, cabernet sauvignon",
          imgUrl: "/images/regions/san-juan.jpg",
          countryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tucuman",
          description: "Most famous for torrontes, syrah, tannat",
          imgUrl: "/images/regions/tucuman.jpg",
          countryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Catamarca",
          description: "Most famous for malbec, torrontes",
          imgUrl: "/images/regions/catamarca.jpg",
          countryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "La Rioja",
          description: "Most famous for malbec, cabernet sauvignon, torrontes",
          imgUrl: "/images/regions/la-rioja-argentina.jpg",
          countryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Regions", null, {});
  },
};