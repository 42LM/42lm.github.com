export const error = (
  commandHistorySection: HTMLElement, 
  cmd: string,
) => {
  const startTime = performance.now();

  const errorTextElements = [
    '<span>Unknown command</span>',
    // '<span is-="badge" style="--badge-color: var(--red); --badge-text: var(--crust);">ERROR</span><span> Unknown command</span>',
  ];

  const container = document.createElement('row');
  container.setAttribute('is-', 'column');
  container.classList.add('command-content')

  const command = document.createElement('span');
  command.classList.add('command')
  container.appendChild(command)

  errorTextElements.forEach((element) => {
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
    ' ('+elapsedTime.toFixed(3)+'s) <span class="command-failed">&#xf467;</span>';
}
