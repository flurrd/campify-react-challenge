import { breakpoints, colors, spacings } from "@/styled/tokens";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  z-index: 9999;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: ${spacings("6")};
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${breakpoints("LG")};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MenuItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: ${spacings("2")};
  padding-right: ${spacings("BASE")};
  font-weight: 500;
  cursor: pointer;
`;

const MenuItem = styled.p`
  font-size: 1rem;
`;

export default function Navbar() {
  return (
    <Container>
      <Content>
        <Image
          src="/logo--blue.svg"
          alt="Camplify Logo"
          width="130"
          height="100%"
        />
        <MenuItems>
          <MenuItem>Discover</MenuItem>
          <MenuItem>Owners</MenuItem>
          <MenuItem>Help</MenuItem>
          <MenuItem>Sign up</MenuItem>
          <MenuItem>Login</MenuItem>
        </MenuItems>
      </Content>
    </Container>
  );
}
