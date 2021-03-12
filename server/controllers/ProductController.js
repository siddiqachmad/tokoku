const { Product } = require('../models');
const product = require('../models/product');
class ProductController {

    static async getAll(req, res, next) {
        try {
            const products = await Product.findAll();
            return res.status(200).json(products);
        } catch (error) {
            return next(error);
        }
    }

    static async getOne(req, res, next) {
        try {
            const { id } = req.params;
            const products = await Product.findByPk(id);
            if (!products) return next({ name: 'not found' });

            return res.status(200).json(products);
        } catch (error) {
            return next(error);
        }
    }

    static async store(req, res, next) {
        try {
            const { name, price, stock, image_url, description } = req.body;
            const input = { name, price, stock, image_url, description };

            const createProduct = await Product.create(input);

            return res.status(201).json(createProduct);

        } catch (error) {
            return next(error);
        }
    }

    static async update(req, res, next) {
        try {
            const { id } = req.params;
            const { name, price, stock, image_url, description } = req.body;
            const input = { name, price, stock, image_url, description };

            const products = await Product.findByPk(id);
            if (!products) return next({ name: "not found" });

            await products.update(input, { where: id });
            await products.reload();

            return res.status(200).json(products);

        } catch (error) {
            return next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.params;
            const products = await Product.findByPk(id);
            if (!products) return next({ name: "not found" });

            products.destroy()
            return res.status(200).json(products);
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = ProductController;