import { useState } from 'react';
import { Navigate, Outlet, replace, useNavigate } from 'react-router';
import { AuthProvider, useAuth } from './contexts/AuthProvider';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import CreatePostForm from './components/CreatePostForm';
import { createPostService } from './api/apiPostServices';

// TODO creating posts and comments should be done using modal

function App() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const [content, setContent] = useState('');
  const [refreshPosts, setRefreshPosts] = useState(false);

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  // Creates a new post for the current user
  async function createNewPost(userId, content) {
    try {
      const response = await createPostService(userId, content);

      const responseData = await response.json();

      if (response.status === 200) {
        setRefreshPosts(refreshPosts === false ? true : false);
        setIsCreatePostOpen(false);
        setContent('');
        navigate('/', { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  }

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
    if (isCreatePostOpen === true) {
      return;
    } else {
      document.body.classList.add('overflow-hidden');
      setIsCreatePostOpen(true);
    }
  }

  function handleClosePostForm() {
    if (isCreatePostOpen === false) {
      return;
    } else {
      document.body.classList.remove('overflow-hidden');
      setIsCreatePostOpen(false);
      setContent('');
    }
  }

  // Handles text area change
  function handleChange(e) {
    setContent(e.target.value);
  }

  // Handles form submission
  function handleFormClick(e) {
    e.preventDefault();
    if (content === '') {
      return;
    } else {
      createNewPost(user.id, content);
    }
  }

  return (
    <div className='relative grid-rows-[auto_1fr]'>
      <MobileMenu
        isOpen={isOpen}
        handleClose={handleClose}
        avatar={user.avatar}
      />
      <CreatePostForm
        isOpen={isCreatePostOpen}
        handleClose={handleClosePostForm}
        avatar={user.avatar}
        username={user.username}
        email={user.email}
        content={content}
        handleChange={handleChange}
        handleClick={handleFormClick}
      />
      <Header handleOpen={handleOpen} handleOpenPostForm={handleOpenPostForm} />
      <div className='h-lvh'>
        <Outlet
          context={{
            refreshPosts,
          }}
        />
      </div>
    </div>
  );
}

export default App;
