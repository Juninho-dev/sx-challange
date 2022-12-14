import { api } from "./api";

interface ColaboratorData {
  id: number;
  code: string;
  name: string;
  cpf: string;
  email: string;
  phone: string;
  address: string;
  companyId: number;
}

export const getColaborators = async () => {
  const { data } = await api.get("/api/colaborators");

  return data;
};

export const createColaborator = async (company: Omit<ColaboratorData, "id">) => {
  const { data } = await api.post("/api/colaborators/create", company);

  return data;
};

export const showColaborator = async (id: number) => {
  const { data } = await api.get(`/api/colaborators/edit/${id}`);

  return data;
}

export const updateColaborator = async (company: ColaboratorData) => {
  const { data } = await api.put(`/api/colaborators/edit/${company.id}`, company);

  return data;
}

export const deleteColaborator = async (id: number) => {
  const { data } = await api.delete(`/api/colaborators/delete/${id}`);

  return data;
}