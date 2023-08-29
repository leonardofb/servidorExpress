import React, { useState } from 'react';
import { ChakraProvider,Center,Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log("llegue punto 1");
  
const handleLogin = async () => {
    try {
      console.log("llegue punto 2");
      const response = await fetch('http://localhost:8080/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: email, password })
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Aquí puedes manejar la respuesta del backend, como guardar el token de acceso
      } else {
        console.error('Error de autenticación');
      }
    } catch (error) {
      console.error('Error de conexión:', error);
    }
  };

  return (
    <ChakraProvider>
   <Box h="100vh" display="flex" alignItems="center" justifyContent="center">
        <Center>
      <form>
        <Stack spacing="4">
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button colorScheme="blue" type="button" onClick={handleLogin}>Iniciar sesión</Button>
        </Stack>
      </form>
      </Center>
    </Box>
    </ChakraProvider>
  );
}

export default LoginForm;
