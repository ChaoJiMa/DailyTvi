import { Group, Button, Box, Flex, Text } from '@mantine/core';
import { IconBrandFoursquare, IconBrightnessDownFilled, IconMoon } from '@tabler/icons-react';
export default function Navbar() {
  return (
    <Group justify="space-between" className='fixed left-0 right-0 top-0 z-10'>
      <Flex
        className=' rounded-full'
        flex={1}
        mx={200}
        my={20}
        px={20}
        justify="space-between"
        align="center"
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderRadius: '25px',
          boxShadow: 'rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.16) 0px 2px 8px 0px',
        }}
      >
        <Box className='cursor-pointer'>
          <IconBrandFoursquare size={24} />
        </Box>
        <Flex className='cursor-pointer' >
          <Text>Home</Text>
          <Text>Home1</Text>
          <Text>Home2</Text>
          <Text>Home3</Text>
          <Text>Home4</Text>
        </Flex>
        <Box className='cursor-pointer'>
          <IconBrightnessDownFilled size={24} />
          <IconMoon size={22} />
        </Box>
      </Flex>
    </Group>
  );
}