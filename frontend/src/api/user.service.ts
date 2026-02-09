import api from "./axios";

export interface User {
  id: string;
  email: string;
  name: string;
}

export const userService = {
  getAll: () => api.get<User[]>("/users"),

  getById: (id: string) => api.get<User>(`/users/${id}`),

  create: (payload: Omit<User, "id">) => api.post<User>("/users", payload),

  update: (id: string, payload: Partial<Omit<User, "id">>) =>
    api.patch<User>(`/users/${id}`, payload),

  delete: (id: string) => api.delete(`/users/${id}`),
};
