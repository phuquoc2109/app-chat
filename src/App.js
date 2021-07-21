import './App.css';
import Login from './component/Login/Index';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ChatRoom from './component/ChatRoom/ChatRoom';
import AuthProvider from './Context/AuthProvider';
import AppProvider from './Context/AppProvider';
import AddRoomModals from './component/Modals/AddRoomModals';

function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
          <AppProvider>
            <Switch>
              <Route component={Login} path="/login" />
              <Route component={ChatRoom} path="/" />
            </Switch>
            <AddRoomModals />
          </AppProvider>
        </AuthProvider>
    </BrowserRouter>
    
  );
}

export default App;
