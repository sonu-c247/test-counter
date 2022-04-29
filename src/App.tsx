import {Provider} from 'react-redux'
import store  from './store/store';
import Counter from './counter';
function App() {
  return (
    <Provider store={store}>
     <Counter />
     </Provider>
  );
}

export default App;
