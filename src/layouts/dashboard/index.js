import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Nav_Buttons } from "../../data/index";
import Logo from "../../assets/Images/logo.ico";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings";

const DashboardLayout = () => {
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 40,
    height: 20,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(20px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 16,
      height: 16,
      borderRadius: 8,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 20 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));
  // custom hook
  const { onToggleMode } = useSettings();

  // it returs the themes object which will define in our code =
  const theme = useTheme();

  const [selected, setSelected] = useState(0);

  return (
    <>
      <Stack direction={"row"}>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          height: "100vh",
          width: 100,
        }}
      >
        <Stack
          direction={"column"}
          alignItems="center"
          spacing={3}
          justifyContent="space-between"
          sx={{
            height: "100%",
          }}
        >
          {/* top part  */}
          <Stack alignItems={"center"} spacing={4}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 1.5,
              }}
            >
              <img src={Logo} alt="chat app logo" />
            </Box>
            <Stack
              spacing={3}
              sx={{
                width: "max-content",
              }}
              direction="column"
              alignItems="center"
            >
              {Nav_Buttons.map((button) =>
                button.index === selected ? (
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                  >
                    <IconButton
                      sx={{
                        width: "max-content",
                        color: "white",
                      }}
                      key={button.index}
                    >
                      {button.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    onClick={() => setSelected(button.index)}
                    sx={{
                      width: "max-content",
                      color: theme.palette.mode === "light" ? "black" : "white",
                    }}
                    key={button.index}
                  >
                    {button.icon}
                  </IconButton>
                )
              )}
              <Divider sx={{ width: "48px" }} />
              {selected === 3 ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                  p={1}
                >
                  <IconButton
                    sx={{
                      width: "max-content",
                      color: "white",
                    }}
                  >
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  sx={{
                    width: "max-content",
                    color: theme.palette.mode === "light" ? "black" : "white",
                  }}
                  onClick={() => setSelected(3)}
                >
                  <Gear />
                </IconButton>
              )}
            </Stack>
          </Stack>
          {/* bottom part  */}
          <Stack spacing={4} alignItems={"center"}>
          <AntSwitch
            defaultChecked={theme.palette.mode === "dark"}
            onChange={onToggleMode}
          />
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>
      <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
