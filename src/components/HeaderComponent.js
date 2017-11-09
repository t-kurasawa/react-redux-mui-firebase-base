import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import FilterLinkContainer from '../containers/FilterLinkContainer'

console.log("+++++ HeaderComponent")

const HeaderIcon = () => (
  <IconMenu
    iconButtonElement={<IconButton><MenuIcon color={'white'} /></IconButton>}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
  >
    <MenuItem>
      <FilterLinkContainer filter="SHOW_ALL">
        All
      </FilterLinkContainer>
    </MenuItem>
    <MenuItem>
      <FilterLinkContainer filter="SHOW_ACTIVE">
        Active
      </FilterLinkContainer>
    </MenuItem>
    <MenuItem>
      <FilterLinkContainer filter="SHOW_COMPLETED">
        Completed
      </FilterLinkContainer>
    </MenuItem>
  </IconMenu>
);

class HeaderComponent extends React.Component{
  render(){
    console.log("+++++ HeaderComponent render")
    return(
      <AppBar
        title="Todo"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        iconElementLeft={<HeaderIcon />}
      />
    )
  }
}

export default HeaderComponent;