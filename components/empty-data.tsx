import { Flex, Image, Title } from '@mantine/core';
import React from 'react';

type Props = {
  visible?: boolean;
};

const EmptyData: React.FC<Props> = ({ visible }) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      style={{ paddingTop: '15vh', opacity: visible ? 1 : 0 }}
    >
      <Image src={'/empty-folder.png'} w={300} alt="not found" />
      <Title>No results found</Title>
    </Flex>
  );
};

export default EmptyData;
