import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { QueryParams } from '../types/global';

const DEFAULT_RESULTS_LIMIT = '1000';
const DEFAULT_RESULTS_OFFSET = '0';
export const GetQueryParams = createParamDecorator(
  (data, ctx: ExecutionContext): QueryParams => {
    const req: Request = ctx.switchToHttp().getRequest();

    // If we have these query params, use them, otherwise use default values
    const queryParams: QueryParams = {
      $limit: req.query?.limit
        ? req.query.limit.toString()
        : DEFAULT_RESULTS_LIMIT,
      $offset: req.query?.skip
        ? req.query.skip.toString()
        : DEFAULT_RESULTS_OFFSET,
      $order: 'objectid', // For now we'll use this just to keep consistency on any possible pagination
    };

    return queryParams;
  },
);
