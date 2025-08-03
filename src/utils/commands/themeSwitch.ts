export const themeSwitch = () => {
  const theme = document.getElementById("theme") as HTMLInputElement;
// <html id="theme" lang="en" data-webtui-theme="catppuccin">
  //
  const currentTheme = theme.getAttribute('data-webtui-theme');

  if (currentTheme === "catppuccin") {
    theme.setAttribute("data-webtui-theme", "catppuccin-latte")
  } else {
    theme.setAttribute("data-webtui-theme", "catppuccin")
  }
}
