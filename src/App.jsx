import { Outlet } from 'react-router'

function App() {

  return (
    <div className='bg-odinbook-denim font-logo'>
      <section id="center">
        <h1 className='font-body'>Odin Book - Layout</h1>
        <Outlet />
      </section>
    </div>
  )
}

export default App
