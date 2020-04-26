/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from 'react'
import './App.css'
import SearchBarContainer from './components/SearchBar/SearchBarContainer'
import PostsPage from './components/PostsContainer/PostsPage'

const App = () => {
  return (
    <div className='App'>
      <SearchBarContainer />
      <PostsPage />
    </div>
  )
}

export default App
