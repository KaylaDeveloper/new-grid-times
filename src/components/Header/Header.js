import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES, COLORS, FAMILIES, WEIGHTS } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroupLeftSide>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroupLeftSide>
        <Logo />
        <DesktopActionGroupRightSide>
          <SubscribeButton>SUBSCRIBE</SubscribeButton>
          <UserButton>Already a subscriber?</UserButton>
        </DesktopActionGroupRightSide>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    justify-content: space-between;
    padding-left: 81px;
    padding-right: 81px;
  }
`;

const DesktopActionGroupLeftSide = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    gap: 32px;
  }
`;

const DesktopActionGroupRightSide = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

const SubscribeButton = styled.button`
  padding: 11px 24px;
  background-color: ${COLORS.primary};
  border-radius: 4px;
  color: ${COLORS.white};
  font-family: ${FAMILIES.sansSerif};
  font-size: 16px;
  font-weight: ${WEIGHTS.bold};
`;

const UserButton = styled.button`
  text-decoration: underline;
  font-family: ${FAMILIES.serif};
  font-size: 14px;
  font-weight: ${WEIGHTS.normal};
  font-style: italic;
  text-align: center;
`;
export default Header;
