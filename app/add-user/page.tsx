'use client';

import { UserForm } from '@/components';
import { useUserActions } from '@/services/mutation';
import { IUserForm } from '@/types';
import React from 'react';

export default function AddUser() {
  const { addUser } = useUserActions();

  const handleCreate = async (values: IUserForm) => {
    try {
      await addUser.mutateAsync(values);
    } catch (error) {
      console.log(error);
    }
  };

  return <UserForm title="Add new user" loading={addUser.isLoading} onSubmit={handleCreate} />;
}
