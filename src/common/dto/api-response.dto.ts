import { TruckDto } from '../../modules/trucks/dto/truck.dto';
import { ApiResponseMetaDto } from './api-response-meta.dto';

// Class responsible for the API response object shape
export class ApiResponseDto {
  data: TruckDto[];

  meta: ApiResponseMetaDto;
}
