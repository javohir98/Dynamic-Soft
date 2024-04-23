import { userApi } from '@/services';
import { useQuery } from '@tanstack/react-query';

export const getUser = (userId: string) =>
  useQuery({
    queryKey: ['user', userId],
    queryFn: () => userApi.getUser(userId),
  });
