import React from 'react'
import FilterLinkContainer from '../containers/FilterLinkContainer'

console.log("+++++ FooterComponent")
class FooterComponent extends React.Component{
  render(){
    console.log("+++++ FooterComponent render")
    return(
      <p>
      Show:
      {' '}
      <FilterLinkContainer filter="SHOW_ALL">
        All
      </FilterLinkContainer>
      {', '}
      <FilterLinkContainer filter="SHOW_ACTIVE">
        Active
      </FilterLinkContainer>
      {', '}
      <FilterLinkContainer filter="SHOW_COMPLETED">
        Completed
      </FilterLinkContainer>
      </p>
    )
  }
}

export default FooterComponent