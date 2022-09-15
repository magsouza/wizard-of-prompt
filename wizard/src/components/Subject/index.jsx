import React from "react";
import { Container } from '@chakra-ui/react'

const Subject = () => {
  const desc = `
    É o elemento base do seu prompt e é o único componente obrigatório.
    Esse elemento corresponderá ao ponto principal que será construído pelo modelo.
    Os próximos elementos (opcionais) ajudarão a modificar o subject.
  `

  return (
    <div>
      <Container>
        {desc}
      </Container>
    </div>
  );
};

export default Subject;