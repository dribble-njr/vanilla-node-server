import { ServerResponse } from 'node:http';
import { BaseController } from './base-controller';
import { getRequestBody } from '../util';
import { CategoryService } from '../service';
import { CustomIncomingMessage } from '../types';
import { Category } from '../types';

export default class CategoryController extends BaseController {
  private categoryService: CategoryService;

  constructor() {
    super();
    this.categoryService = new CategoryService();
  }

  async list(req: CustomIncomingMessage, res: ServerResponse) {
    const categories = await this.categoryService.getAllCategories();
    CategoryController.sendResponse(200, categories, res);
  }

  async create(req: CustomIncomingMessage, res: ServerResponse) {
    const { name } = await getRequestBody<Category>(req);
    const id = await this.categoryService.createCategory(name as string);
    CategoryController.sendResponse(200, id, res);
  }

  async delete(req: CustomIncomingMessage, res: ServerResponse) {
    if (!req.params.id) {
      return CategoryController.sendResponse(400, 'id is required', res);
    }
    const isDeleted = await this.categoryService.deleteCategory(Number(req.params.id));
    CategoryController.sendResponse(200, isDeleted, res);
  }
}
