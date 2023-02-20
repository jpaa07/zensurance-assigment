import { RequestError } from 'got/dist/source';
import { ResponseObject } from '../../types/responses';

export default interface ResponseData extends RequestError {
    data?: ResponseObject;
    statusCode?: number
    time?: number
}