import { HttpException, Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { QueryParams } from '../../types/global';
import * as querystring from 'node:querystring';
import { ApiResponseDto } from '../../common/dto/api-response.dto';

/**
 * Basic service that handles all requests with San Francisco's food truck open dataset API
 */
@Injectable()
export class TrucksService {
  constructor(
    private configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  private readonly logger = new Logger(TrucksService.name);

  /**
   * Fetches all food trucks from the API
   */
  async fetchAll(queryParams: QueryParams): Promise<ApiResponseDto> {
    // Since queryParams is an array of objects and the key's contain a special charter
    // I use the below method to form a valid URL that works and is not URL encoded.
    const params = querystring.unescape(querystring.stringify(queryParams));
    const url = new URL(
      `${this.configService.get<string>(
        'TRUCK_API_URI',
        'https://data.sfgov.org/resource/rqzj-sfat.json',
      )}?${params}`,
    );

    // Fetch our data with our query params from the API
    const { data } = await firstValueFrom(
      this.httpService.get(url.toString()).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          // Throw an http exception on error, and bubble up the error
          throw new HttpException(error.response.statusText, error.status);
        }),
      ),
    );

    return { data, meta: { results: data.length } };
  }
}
