import { TextField } from 'components/TextField';
import * as S from './styles';
import { Button } from 'components/Button';

export function Login() {
  return (
    <S.Container>
      <S.Form>
        <TextField
          type="text"
          placeholder="Digite seu e-mail"
          fullWidth={true}
        />
        <TextField
          type="password"
          placeholder="Digite sua senha"
          fullWidth={true}
        />
        <Button
          type="submit"
          onClick={() => {}}
          fullWidth={true}
          variant="primary"
        >
          Entrar
        </Button>
      </S.Form>
    </S.Container>
  );
}
