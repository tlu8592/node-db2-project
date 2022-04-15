// STRETCH
const cars = [
    {
        vin: "KM8JUCAG0FU963659",
        make: "toyota",
        model: "prius",
        mileage: 215000,
        title: "clean",
        transmission: "manual"
    },
    {
        vin: "1G1PE5SB9E7261923",
        make: "toyota",
        model: "corolla",
        mileage: 115000,
        title: "salvage"
    },{
        vin: "1FAHP2F84DG296795",
        make: "ford",
        model: "focus",
        mileage: 15000
    },
]

// exports.seed = function(knex) {
//     return knex('cars')
//         .truncate().then(() => {
//             return knex('cars').insert(cars);
//         })
// }

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}