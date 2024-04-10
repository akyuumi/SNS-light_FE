import { HttpInterceptorFn } from "@angular/common/http";

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  // ローカルホストへのリクエストの場合はURLを変更しない
  if (req.url.startsWith("http://localhost")) {
    return next(req);
  }
  const apiReq = req.clone({ url: `https://api.realworld.io/api${req.url}` });
  return next(apiReq);
};
