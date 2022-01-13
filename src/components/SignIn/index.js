import React from 'react';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormButton,
  Text
} from './SigninElements';

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>NFTicket</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Connect your wallet.</FormH1>
              <FormButton type='submit'>Connect</FormButton>
              <Text>NFTicket</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
