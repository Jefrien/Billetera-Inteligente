"use client";

import {
  ThemeProvider,
  Button,
  Navbar,
  IconButton,
  Card,
  Typography,
  CardBody,
  Tooltip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import {useThemeStore} from "../store/theme";

const ThemedButton = ({ children, colors, ...props }) => {

  const { currentTheme } = useThemeStore()
  const [colorButton, setColorButton] = useState('')

    const setThemedColor = () => {
      const defaults = {
        light: 'black',
        dark: 'white',
      }

        if (colors) {
            setColorButton(colors[currentTheme])
            return
        }

        setColorButton(defaults[currentTheme])
    }

  useEffect(() => {
    setThemedColor()
  }, [currentTheme]);

    return (
        <Button color={colorButton.toString()} {...props}>{children}</Button>
    );
}

export {
  ThemeProvider,
  Button,
  Navbar,
  IconButton,
  Card,
  Typography,
  CardBody,
  Tooltip,
  ThemedButton,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Popover,
  PopoverHandler,
  PopoverContent,
};
