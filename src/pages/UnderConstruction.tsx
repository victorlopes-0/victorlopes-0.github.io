import { ThemeProvider } from '@emotion/react';
import { lightTheme } from '../theme';

const ConstructionPageWrapper = styled.main`
  background: #000000,
`;

export default function UnderConstruction() {
  return (
    <ThemeProvider theme={lightTheme}>
      <ConstructionPageWrapper>
        <h1>Under Construction</h1>
      </ConstructionPageWrapper>
    </ThemeProvider>
  );
};
