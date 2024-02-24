import React from 'react'
import NavComponent from '../../header/NavComponent'
function Nav() {
  return (
    <div>
        <NavComponent to={'/home/Overview'} text={'Overview'}/>
        <NavComponent to={'/home/projects'} text={'Projects'}/>
        <NavComponent to={'/home/github'} text={'Github'}/>
        <NavComponent to={'/home/leetcode'} text={'leetCode'}/>
        <NavComponent to={'/home/Skills'} text={'Skills'}/>

    </div>
  )
}

export default Nav