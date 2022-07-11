import { useState } from "react";

/**
 * Dark theme
 */
export default function useThemeToggler(
  initialState = window.matchMedia("(prefers-color-scheme: dark)").matches ||
    false
) {
  /**
   * darkThemeEnabled stores the current system color scheme by default (true: dark, false: light).
   */
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(initialState);

  /**
   * Utility to get the theme enabled by the user from localStorage.
   */
  function getChosenTheme() {
    return JSON.parse(window.localStorage.getItem("darkThemeEnabled"));
  }

  /**
   * Utility to set the theme enabled by the user from localStorage.
   */
  function setChosenTheme(themeChosen) {
    window.localStorage.setItem(
      "darkThemeEnabled",
      JSON.stringify(themeChosen)
    );
  }

  /**
   * Utility to add or remove the 'dark-theme' class on body element to change the theme.
   */
  function applyClasses(newTheme) {
    const bodyElement = document.querySelector("body");

    // Since we don't know what the system preference of the user is, use .add or .remove depending of the value of wantDark. Neither method does anything if its call doesn't change anything.

    if (newTheme) {
      bodyElement.classList.add("dark-theme");
    } else {
      bodyElement.classList.remove("dark-theme");
    }
  }

  /**
   * useEffect function to match the app theme with the theme set by the user.
   */
  function applyTheme() {
    // Get the darkThemeEnabled value from local storage
    const chosenTheme = getChosenTheme();
    if (chosenTheme === null) {
      // If there is no value in localStorage we use the value from the state, which will be the user's system theme.
      applyClasses(darkThemeEnabled);
    } else if (chosenTheme === true || chosenTheme === false) {
      // Otherwise darkThemeEnabled in localStorage is either true or false. We use that value to apply the correct class to the body and set the theme.
      applyClasses(chosenTheme);
    }
  }

  /**
   * Click event handler to toggle the theme.
   */
  function handleThemeToggle() {
    setDarkThemeEnabled(!darkThemeEnabled);
    setChosenTheme(!darkThemeEnabled);
    applyClasses(!darkThemeEnabled);
  }

  return {
    darkThemeEnabled,
    applyTheme,
    handleThemeToggle,
  };
}
