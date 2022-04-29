import {Provider} from 'react-redux'
import store  from './store/store';
import Counter from './counter';
import { ThemeProvider } from 'styled-components'
import theme from './theme'
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Provider store={store}>
     <Counter />
     </Provider>
     </ThemeProvider>
  );
}

export default App;
