import { api } from './api';

export type Geo = {
  lat: string;
  lng: string;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

export type Friend = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
};



export class FriendService {
  static async getFriend(): Promise<Friend[]> {
    const { data } = await api.get<Friend[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
    return data;
  }
}
