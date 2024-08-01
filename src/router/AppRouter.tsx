
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage.tsx'
import MessagesPage from '../pages/MessagesPage.tsx'

const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/messages" element={<MessagesPage />} />
        </Routes>
      </Router>
     
  
    );
  };



export default AppRouter