import { CategoryController, CommodityController } from '../controller';
import { Router } from '../types';
import { userRouter } from './user-router';

/**
 * Distribute controller for different route.
 */
const Router: Router = {
  'GET/': {
    controller: (req, res) => {
      res.setHeader('content-type', 'text/html');
      res.write('Hello World!');
      res.end();
    }
  },
  ...userRouter,
  'GET/category/list': {
    controller: (req, res) => {
      const categoryController = new CategoryController();
      categoryController.list(req, res);
    }
  },
  'POST/category/create': {
    controller: (req, res) => {
      const categoryController = new CategoryController();
      categoryController.create(req, res);
    }
  },
  'DELETE/category/delete/:id': {
    controller: (req, res) => {
      const categoryController = new CategoryController();
      categoryController.delete(req, res);
    }
  },
  'POST/commodity/create': {
    controller: (req, res) => {
      const commodityController = new CommodityController();
      commodityController.create(req, res);
    }
  },
  'PUT/commodity/update': {
    controller: (req, res) => {
      const commodityController = new CommodityController();
      commodityController.update(req, res);
    }
  },
  'DELETE/commodity/delete/:id': {
    controller: (req, res) => {
      const commodityController = new CommodityController();
      commodityController.delete(req, res);
    }
  }
};

export default Router;
