import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            actionName:''
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleSignUp=this.handleSignUp.bind(this)
     
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }



    toggleModal(action) {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
            actionName:action
        });
    }

    handleLogin(event) {
        this.toggleModal();
        this.props.loginUser({username: this.username.value, password: this.password.value});
        event.preventDefault();

    }

    handleSignUp(event){
        this.toggleModal();
        this.props.signUpUser({username:this.username.value,password:this.password.value,
        firstname:this.firstname.value,lastname:this.lastname.value});
        event.preventDefault();
    }

    handleLogout() {
        this.props.logoutUser();
    }

    render(){
        return(
            <React.Fragment>
                <Navbar style={{backgroundColor:'black'}} expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} className='navbar-dark bg-dark' />

                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/smallLogo.png" height="auto" width='50'
                            alt='Ristorente Confusion' />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home' style={{color:'lightgray'}}>
                                        <span className="fa fa-home fa-lg" ></span>
                                         Home
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus" style={{color:'lightgray'}}>
                                        <span className="fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/menu" style={{color:'lightgray'}}>
                                        <span className="fa fa-list fa-lg"></span> Menu
                                    </NavLink>
                                </NavItem>

                                <NavItem >
                                {!this.props.auth.isAuthenticated ? null:<NavLink className="nav-link" to="/favorites" style={{color:'lightgray'}}>
                                        <span className="fa fa-heart fa-lg"></span> My favorites
                                    </NavLink>}
                                    
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus" style={{color:'lightgray'}}>
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                    </NavLink>
                                </NavItem>

                            </Nav>

                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    { !this.props.auth.isAuthenticated ?
                                    <span>
                                        <Button outline  onClick={()=>this.toggleModal('login')} >
                                            <span className="fa fa-sign-in fa-lg"></span> Login
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        
                                        <Button outline className='ml-3' onClick={()=>this.toggleModal('signUp')}>
                                        <span className='fa fa-user-plus fa-lg'></span> SignUp</Button>
                                        </span>
                                       
                                        :
                                        <div>
                                        <div className="navbar-text mr-3" style={{color:'lightgray'}}>{this.props.auth.user.username}</div>
                                        <Button outline onClick={this.handleLogout}>
                                            <span className="fa fa-sign-out fa-lg"></span> Logout
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        </div>
                                    }

                                </NavItem>
                            </Nav>

                            
                        </Collapse>
                    </div>
                </Navbar>

               
                {
                    this.state.actionName==='login'
                    ?
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                :this.state.actionName==='signUp'?
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>SignUp</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSignUp}>
                        <FormGroup>
                                <Label htmlFor="firstname">First Name</Label>
                                <Input type="text" id="firstname" name="firstname"
                                    innerRef={(input) => this.firstname = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="lastname">Last Name</Label>
                                <Input type="text" id="lastname" name="lastname"
                                    innerRef={(input) => this.lastname = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            
                            <Button outline type="submit" value="submit"  className='btn btn-outline-success'>Register</Button>
                        </Form>
                    </ModalBody>
                </Modal>:null
                
                
                }

                

                      
            </React.Fragment>
        )
    }

}

export default Header;