import { IRouteContext, IRouterAdapter } from '@donnyroufs/browter';
import { Router, Request, Response, NextFunction } from 'express-serve-static-core';
export declare type ExpressRouterFactory = () => Router;
export declare class ExpressToBrowterAdapter implements IRouterAdapter {
    adaptee: ExpressRouterFactory;
    router: Router;
    logExceptions: boolean;
    /**
     *
     * @param adaptee router that has to be adapted to Browters API
     */
    constructor(adaptee: () => Router, logExceptions?: boolean);
    /**
     * @description
     * Browter will use this to map the handlers to the desired endpoints
     */
    route({ verb, endpoint, middleware, routeHandler, }: IRouteContext): void;
    /**
     * @description
     * Tells the web framework to use the given router(middleware)
     */
    use(namespace: string, router: Router): void;
    catchExceptionsWrapper(routeHandler: any): (req: Request, res: Response, next: NextFunction) => Promise<any>;
    /**
     * @description
     * Creates a new instance of the adapter which is required
     * within browter for grouping.
     */
    create(): ExpressToBrowterAdapter;
    /**
     * @description
     * Returns the correct format in order to initialize
     * your router within your framework.
     */
    build(): Router;
}
