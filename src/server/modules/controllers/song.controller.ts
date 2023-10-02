/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

export const getSongs = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ message: 'test' });
};
