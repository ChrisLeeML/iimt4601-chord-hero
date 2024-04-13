"use client";
import React, { useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import ChordHeroWhiteLogo from "../assets/Chord Hero White Logo.png";
import MetamaskLogo from "../assets/metamask.png";

import { MetaMaskProvider, useMetaMask } from "metamask-react";
import { Divider, Modal, TextField } from "@mui/material";

const pages = [
  { title: "Analytics", href: "analytics" },
  { title: "Exclusive Content", href: "content" },
  { title: "Ukuleles", href: "ukulele" },
  { title: "Creators", href: "creator" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSignInLoading, setIsSignInLoading] = useState<boolean>(false);
  const [isMetamask, setIsMetamask] = useState<boolean>(false);

  const MetaMaskStatus = () => {
    const { status, connect, account, chainId, ethereum } = useMetaMask();

    if (status === "initializing")
      return <Typography>MetaMask getting ready...</Typography>;

    if (status === "unavailable")
      return <Typography>MetaMask Unavailable</Typography>;

    if (status === "notConnected") {
      setIsSignedIn(false);
      setIsMetamask(false);
      return (
        <Button
          variant="outlined"
          style={{ color: "black", borderColor: "black", marginBottom: 10 }}
          onClick={connect}
        >
          <Image src={MetamaskLogo} alt="" width={20} height={20} />
          <Typography style={{ marginLeft: 10 }}>
            Log in with Metamask
          </Typography>
        </Button>
      );
    }

    if (status === "connecting") return <Typography>Connecting...</Typography>;

    if (status === "connected") {
      setIsModalOpen(false);
      setIsSignedIn(true);
      setIsMetamask(true);
      return (
        <Button variant="outlined" style={{ borderColor: "white" }}>
          <Typography
            noWrap
            style={{ color: "white", textOverflow: "ellipsis", width: "100px" }}
          >
            {account}
          </Typography>
        </Button>
      );
    }

    return null;
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    //
  };

  const handleSignIn = () => {
    setIsSignInLoading(true);
  };

  return (
    <MetaMaskProvider>
      <AppBar position="static" style={{ background: "black" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href="/">
              <Image
                src={ChordHeroWhiteLogo}
                width={100}
                alt="Chord Hero White Logo"
                style={{ marginRight: 10 }}
              />
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <Link key={page.title} href={`/${page.href}`}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page.title}
                    </Button>
                  </Link>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link key={page.title} href={`/${page.href}`}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.title}
                  </Button>
                </Link>
              ))}
            </Box>
            {isSignedIn ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {isMetamask ? (
                      <MetaMaskStatus />
                    ) : (
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    )}
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <Link href="/profile">
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Profile</Typography>
                    </MenuItem>
                  </Link>
                  {isMetamask ? null : (
                    <MenuItem onClick={handleLogOut}>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  )}
                </Menu>
              </Box>
            ) : (
              <Button
                variant="outlined"
                style={{ color: "white", borderColor: "white" }}
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                Sign in
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Modal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 500,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 5,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Sign In
          </Typography>
          <Box
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              style={{ width: "100%", marginBottom: 10 }}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              style={{ width: "100%", marginBottom: 10 }}
            />

            <Button
              variant="outlined"
              style={{ color: "black", borderColor: "black", marginBottom: 10 }}
              disabled={isSignInLoading}
              onClick={handleSignIn}
            >
              Sign In
            </Button>
            <Divider style={{ margin: 30 }}>OR</Divider>

            <MetaMaskStatus />
          </Box>
        </Box>
      </Modal>
    </MetaMaskProvider>
  );
}
export default NavBar;
