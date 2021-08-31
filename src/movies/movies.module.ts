import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Module({
  controllers: [MoviesModule],
  providers: [MoviesService],
})
export class MoviesModule {}
