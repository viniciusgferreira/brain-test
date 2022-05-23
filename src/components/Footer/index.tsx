import React from 'react';
import { Container, Content } from './styles';

export default function Footer() {
  return (
    <Container>
      <Content>
        <span>
          Copyright © -
          <a
            href="https://brain.agr.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brain Agriculture.
          </a>
        </span>
      </Content>
    </Container>
  );
}
