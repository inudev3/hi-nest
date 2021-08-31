import { Module } from '@nestjs/common';

import { MoviesModule } from './movies/movies.module';

import { MoviesService } from './movies/movies.service';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
