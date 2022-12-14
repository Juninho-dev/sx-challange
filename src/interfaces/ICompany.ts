import { IColaborator } from "./IColaborators";

export interface ICompany {
  id: number;
  name: string;
  code: string;
  cnpj: string;
  email: string;
  phone: string;
  colaborators: IColaborator[];
  address: string;
  createdAt: string;
  updatedAt: string;
}