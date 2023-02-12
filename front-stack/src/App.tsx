import './App.css'
import AuthProvider from './context/LoginContext'
import GlobalStyle from './styles/GlobalStyle'
import MainRoutes from './routes'
import SignUpProvider from './context/SignUpContext';
import ContactProvider from './context/ContactContext';

function App() {

  return (
   <div className='App'>
        <SignUpProvider>
          <AuthProvider>
            <ContactProvider>
              <GlobalStyle />
              <MainRoutes />
            </ContactProvider>
          </AuthProvider>
        </SignUpProvider>
     
   </div>
  );
}

export default App
