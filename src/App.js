import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Auth from './view/Auth';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Landing />}
          />
          <Route
            exact
            path="/login"
            element={<Auth authRoute="login" />}
          />
          <Route
            exact
            path="/profile"
            element={<Auth authRoute="profile" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
