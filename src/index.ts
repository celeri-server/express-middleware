
import { MiddlewareInput } from '@celeri/http-server';
import { ErrorMiddlewareFunction } from '@celeri/middleware-pipeline';

export const convertMiddleware = (middleware) : ErrorMiddlewareFunction<MiddlewareInput> => {
	return ({ req, res, error }) => new Promise((resolve, reject) => {
		const next = (error) => {
			if (error) {
				reject(error);
			}
			else {
				resolve();
			}
		};

		if (error) {
			if (middleware.length === 4) {
				middleware(error, req, res, next);
			}
		}
		else {
			middleware(req, res, next);
		}
	});
};
