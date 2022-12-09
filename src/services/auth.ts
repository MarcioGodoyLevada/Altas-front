import { api } from './api';

type TokenResponse = {
  name: string;
  email: string;
  token: string;
};

export class AuthService {
  static async signIn(email: string, password: string): Promise<TokenResponse> {
    const { data } = await api.post<TokenResponse>(`/login`, {
      username: email,
      password,
    });

    return data;
  }
}
