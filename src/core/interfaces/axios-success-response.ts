export interface IAxiosSuccessResponse<T> {
  result: T;
  totalPages?: number;
  message: string;
}
