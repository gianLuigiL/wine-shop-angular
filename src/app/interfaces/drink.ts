import { Category } from './category';
import { Country } from './country';
import { Grape } from './grape';
import { Producer } from './producer';
import { Region } from './region';
import { Type } from './type';

export interface Drink {
    id: number;
    name: string;
    category: Category;
    country: Country;
    region: Region;
    type: Type;
    vegan: boolean;
    abv: number;
    producers: Producer[];
    grapes: Grape[];
    reviews: number[];
    year: string;
    price: number;
    description: string;
}
