import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components/native';

interface IUser {
  id: string;
  name: string;
}

export const App: FC = () => {
  const [user, setUser] = useState<{ name: string }>();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1',
      );

      const data = (await response.json()) as IUser;

      setUser(data);
    })();
  }, []);

  return (
    <SContainer>
      <SText>Hello world, {user?.name}!</SText>
    </SContainer>
  );
};

const SContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  height: 100%;
`;

const SText = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;
