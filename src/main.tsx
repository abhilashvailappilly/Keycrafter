import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Store/Store.ts'
// import { DarkModeProvider } from './Context/DarkModeProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store} >

  {/* // <DarkModeProvider> */}
    <App />
  {/* // </DarkModeProvider> */}
  </Provider>
)
