import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TrucksService } from './trucks.service';
import { TrucksController } from './trucks.controller';

@Module({
  imports: [HttpModule],
  providers: [TrucksService],
  controllers: [TrucksController],
  exports: [TrucksService],
})
export class TrucksModule {}
