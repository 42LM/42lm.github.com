export const whoami = (
  commandHistorySection: HTMLElement, 
  cmd: string,
) => {
  const startTime = performance.now();

  const aboutElements = [
    "<span>Hey &#xf1821;, I'm Lukas aka <strong>Luke</strong>,</span>",
    "<span>senior software engineer who is surfing the waves &#xf1746; of the vast IT ocean.</span>",
  ];

  const container = document.createElement('row');
  container.setAttribute('is-', 'column');
  container.classList.add('command-content')

  const command = document.createElement('span');
  command.classList.add('command')
  container.appendChild(command)

  aboutElements.forEach((element) => {
    const template = document.createElement('template');
    template.innerHTML = element;
    template.content.childNodes.forEach((node) => {
      container.appendChild(node);
    });
  });

  commandHistorySection.append(container);

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;
  command.innerHTML = '~ '+
    cmd+
    ' ('+elapsedTime.toFixed(3)+'s) <span class="command-successful">&#xf42e;</span>';
}
