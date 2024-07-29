import { ROLES } from "src/constants/roles";

export interface IUser {
    nombre: string;
    email: string;
    password: string;
    rol: ROLES;
}