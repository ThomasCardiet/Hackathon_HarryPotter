import {House} from "@/model/HouseModel";

export interface User {
    name: string;
    id: number;
    point: number;
    house: House;
    house_id: number;
}