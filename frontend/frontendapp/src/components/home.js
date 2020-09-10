import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Home = () => {

    const [token, setToken, deleteToken] = useCookies(['mr-token']);

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        console.log(token);
        if (!token['mr-token']) window.location.href = '/';
    }, [token])

    const logoutClicked = () => {
        deleteToken(['mr-token']);
    }

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="#">PickBins</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Dashboard</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Pickup Record</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
              </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Support
                </DropdownItem>
                                    <DropdownItem>
                                        Account
                </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <NavbarText onClick={logoutClicked}>Logout</NavbarText>
                    </Collapse>
                </Navbar>
            </div>
            <div>
                <Card>
                    <CardImg top width="100%" src="/assets/pickbins.png" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}

export default Home;