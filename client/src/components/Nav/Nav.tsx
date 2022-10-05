import { Navbar, NavItem, NavLink } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context";
import styled from "styled-components";

const LeftNavContainer = styled.div`
margin-left: auto;
`;

const Nav = () => {
    const [state, setState] = useContext(UserContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        setState({ data: null, loading: false, error: null });
        localStorage.removeItem("token")
        navigate("/");
    };

    return (
        <Navbar>
            <NavItem style={{margin: "1.5rem 1.5rem"}}>
                <Link to="/" className="nav-link">HOME</Link>
            </NavItem>
            {state.data && (
                <LeftNavContainer>
                    < NavItem style={{margin: "1.5rem 1.5rem"}}>
                        <NavLink onClick={handleLogout}>LOGOUT</NavLink>
                    </NavItem>
                </LeftNavContainer>
            )}
        </Navbar >
    );
};

export default Nav;