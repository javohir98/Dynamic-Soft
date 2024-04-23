'use client';

import { LoaderWithOverlay, UserForm } from '@/components';
import { useUserActions } from '@/services/mutation';
import { getUser } from '@/services/query';
import { IUserForm } from '@/types';

export default function EditUser({ params }: { params: { slug: string } }) {
  const { data, isLoading } = getUser(params?.slug);
  const { editUser } = useUserActions();

  const handleEdit = async (values: IUserForm) => {
    try {
      await editUser.mutateAsync({ userId: params?.slug, values });
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <LoaderWithOverlay />;
  }

  return (
    <UserForm
      title="Edit user"
      loading={editUser.isLoading}
      initialValues={data}
      onSubmit={handleEdit}
    />
  );
}
