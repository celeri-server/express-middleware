
export const convertMiddleware = (middleware) => {
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
