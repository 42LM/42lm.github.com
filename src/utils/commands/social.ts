export const social = (
  commandHistorySection: HTMLElement, 
  cmd: string,
) => {
  const startTime = performance.now();

  const socialSpanElements = [
    "┣ ",
    "┗ ",
  ]

  const socialTextElements = [
    '<a href="https://github.com/42LM" target="_blank">GitHub &#xf005c;</a>',
    '<a href="https://linkedin.com/in/42lm" target="_blank">LinkedIn &#xf005c;</a>',
  ];

  const container = document.createElement('row');
  container.setAttribute('is-', 'column');
  container.classList.add('command-content')
  container.style = "border-bottom: 1px solid var(--background1);"

  const command = document.createElement('span');
  command.style = "padding: 0 0 10px 0; color: var(--background3);"
  container.appendChild(command)

  const header = document.createElement('span');
  header.textContent = "󰖟 Find me on the web:"
  container.appendChild(command)

  socialTextElements.forEach((element, i) => {
    const spanElement = document.createElement('span');
    spanElement.innerHTML = socialSpanElements[i]+element;
    container.appendChild(spanElement)
  });


  commandHistorySection.append(container);

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;
  command.innerHTML = '<span>~ '+
    cmd+
    ' ('+elapsedTime.toFixed(3)+'s) <span style="color: var(--green)">&#xf42e;</span></span>';
}
