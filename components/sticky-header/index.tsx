import { createPolymorphicComponent, Flex, FlexProps } from '@mantine/core';
import { forwardRef } from 'react';

interface Props extends FlexProps {
  children: React.ReactNode;
}

const _StickyHeader = forwardRef<FlexProps, Props>(({ children, ...others }, ref) => (
  <Flex
    {...others}
    pt="md"
    pb="md"
    style={{
      position: 'sticky',
      top: 0,
      backgroundColor: 'white',
      borderBottomWidth: '0.0625rem',
      borderBottomStyle: 'solid',
      borderBottomColor: '#dee2e6',
      zIndex: 99,
    }}
  >
    {children}
  </Flex>
));

export const StickyHeader = createPolymorphicComponent<'div', Props>(_StickyHeader);
