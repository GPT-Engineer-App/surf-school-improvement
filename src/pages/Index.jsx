import React, { useState } from "react";
import { Box, Button, Container, Flex, Heading, IconButton, Image, Link, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaGlobe } from "react-icons/fa";

const Index = () => {
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "ES" : "EN"));
  };

  return (
    <Container maxW="container.xl">
      <Flex justify="space-between" align="center" py={4}>
        <Heading as="h1" size="xl">
          {language === "EN" ? "Ecuadorian Surf School" : "Escuela de Surf Ecuatoriana"}
        </Heading>
        <IconButton aria-label="Toggle Language" icon={<FaGlobe />} onClick={toggleLanguage} size="sm" variant="ghost" />
      </Flex>
      <VStack spacing={8}>
        <Box as="section" pt={10} pb={6}>
          <Heading as="h2" size="lg" mb={4}>
            {language === "EN" ? "Experience the Best Waves!" : "¡Experimenta las Mejores Olas!"}
          </Heading>
          <Text fontSize="lg">{language === "EN" ? "Join us for an unforgettable surf experience at the beautiful coasts of Ecuador." : "Únete a nosotros para una experiencia de surf inolvidable en las hermosas costas de Ecuador."}</Text>
          <Image src="https://images.unsplash.com/photo-1701478008206-f84130836a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlY3VhZG9yaWFuJTIwY29hc3R8ZW58MHx8fHwxNzA4NTM2MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080" my={4} borderRadius="md" />
        </Box>
        <Box as="section">
          <Heading as="h3" size="md" mb={3}>
            {language === "EN" ? "Contact Us" : "Contáctanos"}
          </Heading>
          <Link href="https://wa.me/1234567890" isExternal>
            <Button leftIcon={<FaWhatsapp />} colorScheme="whatsapp">
              {language === "EN" ? "Chat on WhatsApp" : "Chatea en WhatsApp"}
            </Button>
          </Link>
        </Box>
      </VStack>
      <Flex as="footer" py={6} justify="center" align="center">
        <Stack direction="row" spacing={4}>
          <IconButton as="a" href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} isRound size="lg" colorScheme="facebook" target="_blank" rel="noopener noreferrer" />
          <IconButton as="a" href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} isRound size="lg" colorScheme="pink" target="_blank" rel="noopener noreferrer" />
          <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} isRound size="lg" colorScheme="twitter" target="_blank" rel="noopener noreferrer" />
        </Stack>
      </Flex>
    </Container>
  );
};

export default Index;
