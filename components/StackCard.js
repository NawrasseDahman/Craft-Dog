import React from 'react';
import { LinkBox, IconButton, LinkOverlay, Text, useColorModeValue, Flex } from '@chakra-ui/react';
import { MotionBox } from '../lib/motion';

const StackCard = ({ stack }) => {
    return (
        <MotionBox whileHover={{ y: -5 }}>
            <LinkBox
                as="article"
                w="100%"
                p={4}
                borderColor={useColorModeValue("purple.500", "orange.200")}
                borderRadius={5}
                borderWidth="1px"
                transition=".5s"
                cursor="pointer"
                display="flex"
                role="group"
                _hover={{ 
                       borderColor: "teal.200",
                }}
            >

                <Flex alignItems="center" justifyContent="space-between">
                    <IconButton
                        as="a"
                        aria-label={stack?.name}
                        mr={3}
                        _groupHover={{ color: "teal.200" }}
                        icon={stack?.icon}
                    />
                    <LinkOverlay href={stack?.url} rel="noopener" isExternal>
                        <Flex>
                            <Text
                                size="sm"
                                _hover={{ color: "teal.200" }}
                            >{stack?.name}</Text>
                        </Flex>
                    </LinkOverlay>
                </Flex>
            </LinkBox>
        </MotionBox>

    )
}

export default StackCard
