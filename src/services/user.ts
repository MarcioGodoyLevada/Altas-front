import { api } from './api';

export type User = {
  id: string;
  email: string;
  name: string;
};

type UserResponse = {
  name: string;
  email: string;
};

export class UserService {
  static async getOwner(): Promise<User> {
    const { data } = await api.get<User>('/profile');

    return data;
  }

  static async postUser(
    name: string,
    email: string,
    password: string
  ): Promise<UserResponse> {
    const { data } = await api.post<UserResponse>('/user', {
      name,
      email,
      password,
    });

    return data;
  }
}
