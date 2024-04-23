import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userApi } from '../user';

export const useUserActions = () => {
  const queryClient = useQueryClient();

  const addUser = useMutation({
    mutationFn: userApi.addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const editUser = useMutation({
    mutationFn: userApi.editUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const deleteUser = useMutation({
    mutationFn: userApi.deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  return {
    addUser,
    editUser,
    deleteUser,
  };
};
