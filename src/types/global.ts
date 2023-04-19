type StringIndex<T> = { [key: string]: T };

export type QueryParams = {
  $limit?: string;
  $offset?: string;
  $order?: string;
};
