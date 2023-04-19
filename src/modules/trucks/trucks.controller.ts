import { Controller, Get } from '@nestjs/common';
import { TrucksService } from './trucks.service';
import { QueryParams } from '../../types/global';
import { GetQueryParams } from '../../decorators/queryParams';
import { ApiResponseDto } from '../../common/dto/api-response.dto';

/**
 * This class is the REST API point of access, all service routes for the 'trucks' endpoint are here
 */
@Controller('trucks')
export class TrucksController {
  constructor(private readonly truckService: TrucksService) {}

  // this is the base endpoint of this route, and all traffic to /trucks endpoint goes here and fetches all of the food trucks
  @Get()
  async getAll(
    @GetQueryParams() queryParams: QueryParams,
  ): Promise<ApiResponseDto> {
    return this.truckService.fetchAll(queryParams);
  }
}
