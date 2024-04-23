import { Text, Title } from '@mantine/core';
import { modals } from '@mantine/modals';

export const openModal = (callbackFn: Function) =>
  modals.openConfirmModal({
    title: <Title order={5}>Please, confirm your action</Title>,
    children: (
      <Text size="sm">
        This action is so important that you need to confirm it with a modal window. Please click
        one of these buttons to continue.
      </Text>
    ),
    centered: true,
    labels: { confirm: 'Confirm', cancel: 'Cancel' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => callbackFn(),
  });
