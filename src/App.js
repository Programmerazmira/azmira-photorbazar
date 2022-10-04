
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Home/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Checkout from './components/Home/Checkout/Checkout';
import Blogs from './components/Home/Blogs/Blogs';
import About from './components/Home/About/About';
import NotFound from './components/Home/NotFound/NotFound';
// import useFirebase from './hooks/useFirebase';
import RequireAuth from './components/Home/RequireAuth/RequireAuth';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from './firebase.init';
import { getAuth, signOut } from 'firebase/auth';



const auth =getAuth(app);

function App() {
  const[user]= useAuthState(auth);
  // const { user, handleSignout } = useFirebase();
  return (
    <div className="App">

      <nav>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand ><h4>Azmira Photor Bazar</h4></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto  ">
                <Nav.Link >
                  <Link className='p-3' to="/">Home</Link>
                  <Link className='p-3' to="/checkout">Checkout</Link>
                  <Link className='p-3' to="/blogs">Blogs</Link>
                  <Link className='p-3' to="/about">About Me</Link>
                  {
                    user?.uid
                      ?
                      <button className='btn btn-primary text-white' onClick={() => signOut(auth)}>sign out</button>
                      :
                      <Link className='p-3' to="/login">Login</Link>
                  }
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>




      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>

        } />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='*' element={<NotFound></NotFound>} />

      </Routes>
    </div>
  );
}

export default App;
