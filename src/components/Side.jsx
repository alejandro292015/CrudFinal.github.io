import React, { Component } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {Switch , Route, Link ,} from 'react-router-dom'



class Side extends Component{
    render() {
        return (
          <div>
           <div>
        <nav class="navbar navbar-expand-lg navbar-danger bg-danger">
          
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              
            </ul>
          </div>
        <h4>CRUD REACT JS</h4>
        </nav>

      </div>

              <SideNav>  
              <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                <Link className="btn btn" to="/">home</Link>
            </NavText>
        </NavItem>
        
    </SideNav.Nav>
</SideNav>
          </div>
        );
    }
}

export default Side