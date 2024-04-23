import { IUser, IUserForm } from '@/types';
import { api } from './base';

class UserApi {
  async getUserList(params?: object) {
    const response: any = await api.get('users', { params });

    return response as IUser[];
  }

  async getUser(id: string) {
    const response: any = await api.get(`users/${id}`);

    return response as IUser;
  }

  async addUser(values: IUserForm) {
    'use server';
    const response = await api.post('users', values);

    return response;
  }

  async editUser({ userId, values }: { userId: string; values: IUserForm }) {
    'use server';
    const response = await api.put(`users/${userId}`, values);

    return response;
  }

  async deleteUser(userId: string) {
    'use server';
    const response = await api.delete(`users/${userId}`);

    return response;
  }
}

export const userApi = new UserApi();
