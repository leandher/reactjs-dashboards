import React, { Component } from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav } from 'reactstrap';
import { AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/logo.svg';
import user from '../../assets/img/user.png'

class HeaderBar extends Component {

    render() {

        return (
            <React.Fragment>
                <AppSidebarToggler className="d-lg-none" display="md" mobile />
                <AppNavbarBrand
                    full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
                />
                <AppSidebarToggler className="d-md-down-none" display="lg" />

                <Nav className="ml-auto" navbar>
                    <AppHeaderDropdown direction="down">
                        <DropdownToggle nav>
                            <img src={user} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        </DropdownToggle>
                        <DropdownMenu right style={{ right: 'auto' }}>
                            <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
                            <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
                            <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem><i className="fa fa-lock"></i> Logout</DropdownItem>
                        </DropdownMenu>
                    </AppHeaderDropdown>
                </Nav>
            </React.Fragment>
        );
    }
}

export default HeaderBar;
