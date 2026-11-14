import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get()
  getReviews() { return this.reviewsService.findAll(); }

  @Post()
  addReview(@Body() body: any) { return this.reviewsService.create(body); }

  @Delete(':id')
  deleteReview(@Param('id') id: string) {
    return this.reviewsService.remove(Number(id));
  }
}
