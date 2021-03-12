'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Product.init({
        name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: 'Field Name is required'
                }
            }
        },
        price: {
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: {
                    msg: 'Field price is required'
                }
            }
        },
        stock: {
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: {
                    msg: 'Field stock is required'
                }
            }
        },
        image_url: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: 'Field image_url is required'
                }
            }
        },
        description: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: 'Field description is required'
                }
            }
        }
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};