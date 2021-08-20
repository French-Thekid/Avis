import React, { useState } from 'react'
import styled from 'styled-components'
import 'styled-components/macro'
import { useSpring, animated } from 'react-spring'
import BurgerMenu from './BurgerMenu'
import { CollapseMenu } from './CollapseMenu'
import { Core } from '..'
import { useLocation } from 'react-router-dom'
import Colours from '../Colours'

const NavigationBar = (props) => {
  const { pathname } = useLocation()
  const [navbarOpen, setNavBarOpen] = useState(false)
  const handleNavbar = () => {
    setNavBarOpen(!navbarOpen)
  }

  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  })

  return (
    <div
      css={`
        width: max-content;
        height: max-content;
        display: grid;
        justify-items: center;
        z-index: 1;
      `}
    >
      <div
        css={`
          display: grid;
          grid-template-columns: repeat(2, max-content);
          grid-gap: 20px;
          align-items: center;
        `}
      >
        <NavBar style={barAnimation}>
          <NavContainer>
            <BurgerWrapper>
              <BurgerMenu
                navbarState={navbarOpen}
                handleNavbar={handleNavbar}
              />
            </BurgerWrapper>
          </NavContainer>
        </NavBar>
        <Core.Text color={Colours.blue}>
          {pathname.includes('new-report')
            ? 'New Report'
            : pathname.includes('customer-review')
            ? 'Vehicle Inspection Slip'
            : 'Change Password'}
        </Core.Text>
      </div>
      <CollapseMenu navbarState={navbarOpen} handleNavbar={handleNavbar} />
    </div>
  )
}

export default NavigationBar

const NavBar = styled(animated.nav)`
  width: 100%;
  z-index: 1;
  display: grid;
  justify-items: center;
  background: rgb(139, 73, 241);
  box-shadow: 10px 0px 26px -6px rgba(189, 187, 189, 1);
  background: linear-gradient(
    180deg,
    rgba(120, 143, 255, 1) 0%,
    rgba(53, 84, 238, 1) 100%
  );
  border-radius: 5px;
`

const NavContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  width: calc(100% - 20px);
  height: 100%;
`

const BurgerWrapper = styled.div`
  @media only screen and (min-width: 1025px) {
    @media only screen and (min-height: 769px) {
      @media (orientation: landscape) {
        display: none;
      }
    }
  }
  /* Ipod pro */
  @media (width: 1024px) {
    @media (height: 1366px) {
      @media (orientation: portrait) {
        display: visible;
      }
    }
  }
`
