import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; //module css needed (directly importing css will have global impact!!!)
// https://reactjsexample.com/react-side-nav-component/ 

const Layout = () => {


  return (
<SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home" >
        <NavItem eventKey="search">
            <NavIcon>
                <i className="fa fa-fw fa-search" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Search
            </NavText>
        </NavItem>
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="trending">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Trending
            </NavText>
        </NavItem>
        <NavItem eventKey="webseries">
            <NavIcon>
                <i className="fa fa-video-camera" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Web Series
            </NavText>
        </NavItem>
        <NavItem eventKey="movies">
            <NavIcon>
                <i className="fa fa-fw fa-film" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Movies
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>
  )
}

export default Layout