'use client';

import { IUser, IUserForm } from '@/types';
import { navigate } from '@/utils/actions';
import { Box, Button, Container, Grid, Group, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';
import React, { useEffect } from 'react';

type Props = {
  title: string;
  loading: boolean;
  initialValues?: IUser;
  onSubmit: (values: IUserForm) => Promise<void>;
};

const UserForm: React.FC<Props> = ({ loading, title, initialValues, onSubmit }) => {
  const form = useForm<IUserForm>();

  const handleSubmit = (values: typeof form.values) => {
    onSubmit(values).finally(() => navigate('/'));
  };

  useEffect(() => {
    if (initialValues)
      form.setValues({
        firstName: initialValues?.firstName,
        lastName: initialValues?.lastName,
        country: initialValues?.country,
        phoneNumber: initialValues?.phoneNumber,
      });
  }, [initialValues]);

  return (
    <Container pt={15} pb={15}>
      <Group justify="flex-start" mb={24}>
        <Button variant="outline" component={Link} href="/">
          <IconArrowLeft />
        </Button>
      </Group>
      <Title order={2} mb={15}>
        {title}
      </Title>
      <Box component="form" onSubmit={form.onSubmit(handleSubmit)}>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <TextInput
              required
              label="First name"
              placeholder="First name"
              {...form.getInputProps('firstName')}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <TextInput
              label="Last name"
              placeholder="Last name"
              {...form.getInputProps('lastName')}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <TextInput label="Country" placeholder="Country" {...form.getInputProps('country')} />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <TextInput
              label="Phone number"
              placeholder="Phone number"
              {...form.getInputProps('phoneNumber')}
            />
          </Grid.Col>
        </Grid>
        <Group mt="md" justify={'flex-end'}>
          <Button type="submit" loading={loading}>
            Save
          </Button>
        </Group>
      </Box>
    </Container>
  );
};

export default UserForm;
