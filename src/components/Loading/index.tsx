import { FaSpinner } from 'react-icons/fa';
import { Container } from './styles';

export function Loading() {
  return (
    <Container>
      <FaSpinner size={64} />
    </Container>
  );
}
