'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Products', [{
                name: 'ASUS ROG',
                price: 15000000,
                stock: 100,
                image_url: "https://gadgetren.com/wp-content/uploads/2017/02/ASUS-ROG-Strix-GL553VE-Featured.jpg",
                description: "Ini adalah ASUS ROG",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Macbook',
                price: 20000000,
                stock: 100,
                image_url: "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/Apple_MacBook_Air_13_M1_2020/Apple_MacBook_Air_13_M1_2020_L_1.jpg",
                description: "Macbook 2020",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Products', null, {});
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};