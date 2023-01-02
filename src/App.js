import styled from 'styled-components';
import Foreground from './Foreground';
import Background from './Background';

const Root = styled.div`
  font-family: 'Gotham Medium';
  font-weight: 500;
`;

function App() {
  return (
    <Root>
      <div>
        <Background />
        <Foreground />
      </div>
    </Root>
  );
}

export default App;
