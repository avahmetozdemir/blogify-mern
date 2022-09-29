import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const Container = styled.div`
  height: 60px;
  background-color: #ff6347;
  margin-bottom: 10px;
  text-align: center;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  const { user, setUser, handleOpen } = useGlobalContext();

  const handleLogout = (e) => {
    e.preventDefault();
    setUser(null);
  };

  return (
    <Container>
      <Wrapper>
        <Left></Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <MenuItem>HOME</MenuItem>
          </Link>
          <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
            <MenuItem>ABOUT</MenuItem>
          </Link>
          <MenuItem onClick={handleOpen}>CREATE BLOG</MenuItem>
        </Center>
        <Right>
          {user ? (
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>{" "}
            </Link>
          ) : (
            <>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
