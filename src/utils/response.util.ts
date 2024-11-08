export function createResponse(
  success: boolean,
  code: number,
  data: any = null,
  error: any = null,
  meta: any = null,
) {
  return {
    success,
    code,
    data,
    error,
    meta,
  };
}
