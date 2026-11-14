import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewsService {
  private reviews = [
    { id: 1, name: 'Ayesha', comment: 'Simple website and easy checkout.', rating: 5 },
    { id: 2, name: 'Hira', comment: 'The product layout is clean and useful.', rating: 4 },
  ];

  private nextId = 3;

  findAll() { return this.reviews; }

  create(body: any) {
    const review = {
      id: this.nextId++,
      name: body.name,
      comment: body.comment,
      rating: body.rating,
    };
    this.reviews.push(review);
    return review;
  }

  remove(id: number) {
    const index = this.reviews.findIndex((review) => review.id === id);
    if (index === -1) return { message: 'Review not found' };
    const deletedReview = this.reviews.splice(index, 1);
    return { message: 'Review deleted', review: deletedReview[0] };
  }
}
