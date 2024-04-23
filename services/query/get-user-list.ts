import { userApi } from '@/services';
import { useQuery } from '@tanstack/react-query';

export const getUserList = (params?: object) =>
  useQuery({
    queryKey: ['users', params],
    queryFn: () => userApi.getUserList(params),
  });
