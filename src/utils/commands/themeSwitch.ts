export const themeSwitch = () => {
  const theme = document.getElementById("theme") as HTMLInputElement;
  const currentTheme = theme.getAttribute('data-webtui-theme');

  if (currentTheme === "catppuccin") {
    theme.setAttribute("data-webtui-theme", "catppuccin-latte")
  } else {
    theme.setAttribute("data-webtui-theme", "catppuccin")
  }
}
