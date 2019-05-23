import { DataSetLinks } from './data-set-links.interface';
import { DataObject } from './data-object.interface';

export interface Dataset<T>{
    Count: number;
    Dataobject: DataObject<T>[];
    Links: DataSetLinks;
	Took: number;                           // długość trwania zapytania w milisekundach
}