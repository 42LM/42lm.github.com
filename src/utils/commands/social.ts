export const social = (
  commandHistorySection: HTMLElement, 
  cmd: string,
) => {
  const startTime = performance.now();

  const socialTextElements = [
    '<span>󰖟 Find me on the web:</span>',
    '<span>┣ <span style="color: white">&#xf02a4; <a href="https://github.com/42LM" target="_blank">https://github.com/42LM</a></span>',
    '<span>┗ <span style="color: #0B65C2">&#xf033b;</span> <a href="https://linkedin.com/in/42lm" target="_blank">https://linkedin.com/in/42lm</a></span>',
  ];

  const container = document.createElement('row');
  container.setAttribute('is-', 'column');
  container.classList.add('command-content')
  container.style = "border-bottom: 1px solid var(--background1);"

  const command = document.createElement('span');
  command.style = "padding: 0 0 10px 0; color: var(--background3);"
  container.appendChild(command)

  socialTextElements.forEach((element) => {
    const spanElement = document.createElement('span');
    spanElement.innerHTML = element;
    container.appendChild(spanElement);
  });

  commandHistorySection.append(container);

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;
  command.innerHTML = '<span>~ '+
    cmd+
    ' ('+elapsedTime.toFixed(3)+'s) <span style="color: var(--green)">&#xf42e;</span></span>';
}
