import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoriesService } from './categories/categories.service';
import { CategoriesController } from './categories/categories.controller';
import { Category } from './categories/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoriesService],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
