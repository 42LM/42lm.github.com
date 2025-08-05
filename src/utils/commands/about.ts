export const about = (
  commandHistorySection: HTMLElement, 
  cmd: string,
) => {
  const startTime = performance.now();

  const helpTextElements = [
    "<span>Hey &#xf1821;, I'm Lukas aka <strong>Luke</strong>,</span>",
    "<span>senior software engineer who is surfing the waves &#xf1746; of the vast IT ocean.</span>",
  ];

  const container = document.createElement('row');
  container.setAttribute('is-', 'column');
  container.classList.add('command-content')
  container.style = "border-bottom: 1px solid var(--background1);"

  const command = document.createElement('span');
  command.style = "padding: 0 0 10px 0; color: var(--background3);"
  container.appendChild(command)

  helpTextElements.forEach((element) => {
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
