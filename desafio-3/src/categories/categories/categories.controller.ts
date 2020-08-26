import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { CategoriesService } from './categories.service';
import { Category } from './category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  index(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Post()
  async create(@Body() categoryData: Category): Promise<any> {
    return this.categoriesService.create(categoryData);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() categoryData: Category,
  ): Promise<any> {
    categoryData.id = Number(id);
    return this.categoriesService.update(categoryData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    return this.categoriesService.delete(id);
  }
}
