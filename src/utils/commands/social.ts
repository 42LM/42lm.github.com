export const social = (
  commandHistorySection: HTMLElement, 
  cmd: string,
) => {
  const startTime = performance.now();

  const socialElements = [
    '<span>┏ <a href="https://github.com/42LM" target="_blank">GitHub &#xf005c;</a></span>',
    '<span>┗ <a href="https://linkedin.com/in/42lm" target="_blank">LinkedIn &#xf005c;</a></span>',
  ];

  const container = document.createElement('row');
  container.setAttribute('is-', 'column');
  container.classList.add('command-content')

  const command = document.createElement('span');
  command.classList.add('command')
  container.appendChild(command)

  socialElements.forEach((element) => {
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
