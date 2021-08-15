import React, { useContext, useRef } from 'react'
import styled from 'styled-components'
import 'styled-components/macro'
import { useSpring, animated } from 'react-spring'
import { useHistory, useLocation } from 'react-router-dom'
import { useOnClickOutside } from '../../hooks'
import { Colours, Icons, Core } from '../../components'
import { FirebaseContext } from '../../pages/firebase'

export function CollapseMenu(props) {
  const { pathname } = useLocation()
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 })

  const ref = useRef()
  useOnClickOutside(ref, () => props.handleNavbar())

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        ref={ref}
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <div
          css={`
            min-width: 200px;
            height: max-content;
            display: grid;
            place-items: center;
          `}
        >
          <Core.Text
            shadow="0px 8px 6px #E2E2E2"
            size="50px"
            color="#FF205D"
            weight="600"
          >
            AVIS
          </Core.Text>
        </div>
        <NavLinks>
          <NavItem
            props={props}
            to="/main/new-report"
            active={pathname.includes('/main/new-report')}
            title="New Report"
            Icon={Icons.DescriptionRoundedIcon}
          >
            <Icons.DescriptionRoundedIcon style={{ color: 'inherit' }} />
          </NavItem>
          <NavItem
            props={props}
            to="/main/change-password"
            active={pathname.includes('/main/change-password')}
            title="Change Password"
            Icon={Icons.LockRoundedIcon}
          >
            <Icons.LockRoundedIcon style={{ color: 'inherit' }} />
          </NavItem>
          <NavItem
            props={props}
            active={false}
            to="/"
            title="Logout"
            Icon={Icons.PowerSettingsNewRoundedIcon}
            logout
          >
            <Icons.PowerSettingsNewRoundedIcon style={{ color: Colours.red }} />
          </NavItem>
        </NavLinks>
        <div
          css={`
            border-top: 0.5px solid ${Colours.border};
            padding: 10px;
            display: grid;
            grid-template-columns: max-content max-content 1fr;
            align-items: center;
            grid-gap: 15px;
          `}
        >
          <Icons.AccountCircleRoundedIcon style={{ color: Colours.blue }} />
          <div
            css={`
              border-left: 1px solid ${Colours.border};
              height: 15px;
            `}
          />
          <Core.Text size="15px" color={Colours.blue}>
            {localStorage.getItem('LoggedInUser')}
          </Core.Text>
        </div>
      </CollapseWrapper>
    )
  }

  return null
}

const CollapseWrapper = styled(animated.div)`
  background: #fff;
  position: fixed;
  top: 4.5rem;
  left: 0;
  -webkit-box-shadow: 21px 22px 15px -13px rgba(232, 232, 232, 1);
  -moz-box-shadow: 21px 22px 15px -13px rgba(232, 232, 232, 1);
  box-shadow: 21px 22px 15px -13px rgba(232, 232, 232, 1);
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  padding: 10px;
  z-index: 10;
  width: 250px;
  display: grid;
  grid-template-rows: 1fr max-content;
`

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 10px;
  margin-top: 10;
  & div {
    transition: all 300ms linear 0s;
  }
`
function NavItem({
  props,
  children,
  colour,
  to,
  active,
  title,
  logout,
  ...rest
}) {
  const history = useHistory()
  const firebase = useContext(FirebaseContext)

  return (
    <div
      css={`
        margin-top: 5px;
        margin-bottom: 5px;
        width: calc(100% - 20px);
        font-size: 0.8rem;
        line-height: 2;
        color: ${logout
          ? Colours.red
          : active
          ? Colours.foreground
          : Colours.text};
        text-transform: uppercase;
        padding: 5px 0px 5px 20px;
        text-decoration: none;
        display: grid;
        justify-items: center;
        border-radius: 10px;
        background: ${active ? Colours.blue : 'none'};
        display: grid;
        grid-template-columns: 30px 1fr;
        grid-column-gap: 10px;
        align-items: center;
        justify-items: start;
        &:hover {
          cursor: pointer;
          color: #fff;
          background: ${active ? Colours.blue : '#6e43cb'};
        }
      `}
      {...rest}
      onClick={() => {
        if (logout) {
          firebase
            .doSignOut()
            .then((authUser) => {
              // setLoading(false)
              console.log('Logout Successful')

              localStorage.clear()
              history.push(to)
            })
            .catch((error) => {
              console.log(error)
            })
        } else {
          history.push(to)
        }
        props.handleNavbar()
      }}
    >
      {children}
      {title}
    </div>
  )
}
