import { useState } from 'react';
import { Navigate, Outlet } from 'react-router';
import { AuthProvider, useAuth } from './contexts/AuthProvider';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import CreatePostForm from './components/CreatePostForm';

// TODO creating posts and comments should be using with modal

function App() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  const [isOpen, setIsOpen] = useState(false);
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  function handleOpen() {
    if (isOpen === true) {
      return;
    } else {
      document.body.classList.add('overflow-hidden');
      setIsOpen(true);
    }
  }

  function handleClose() {
    if (isOpen === false) {
      return;
    } else {
      document.body.classList.remove('overflow-hidden');
      setIsOpen(false);
    }
  }

  function handleOpenPostForm() {
    document.body.classList.add('overflow-hidden');
    setIsCreatePostOpen(true);
  }

  function handleClosePostForm() {
    document.body.classList.remove('overflow-hidden');
    setIsCreatePostOpen(false);
  }

  return (
    <div className='relative grid-rows-[auto_1fr]'>
      <MobileMenu isOpen={isOpen} handleClose={handleClose} />
      <CreatePostForm
        isOpen={isCreatePostOpen}
        handleClose={handleClosePostForm}
      />
      <Header handleOpen={handleOpen} handleOpenPostForm={handleOpenPostForm} />
      <div className='h-lvh'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
