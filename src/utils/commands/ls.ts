export const ls = (
  commandHistorySection: HTMLElement, 
  cmd: string,
) => {
  const startTime = performance.now();

  const listInfoElements = [
    // "<span>&#xf07b; Blog</span>",
    `<span is-="text" variant-="green"> cd</span>`,
    `<span is-="text" variant-="green"> echo</span>`,
    `<span is-="text" variant-="green"> ls</span>`,
    `<span is-="text" variant-="green"> pwd</span>`,
    `<span is-="text" variant-="green"> rm</span>`,
    `<span is-="text" variant-="green"> switch</span>`,
  ];

  const container = document.createElement('row');
  container.setAttribute('is-', 'column');
  container.classList.add('command-content')

  const command = document.createElement('span');
  command.classList.add('command')
  container.appendChild(command)

  const grid = document.createElement('div');
  grid.classList.add('grid')
  container.appendChild(grid)

  listInfoElements.forEach((element) => {
    const template = document.createElement('template');
    template.innerHTML = element;
    template.content.childNodes.forEach((node) => {
      grid.appendChild(node);
    });
  });

  commandHistorySection.append(container);

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;
  command.innerHTML = '~ '+
    cmd+
    ' ('+elapsedTime.toFixed(3)+'s) <span class="command-successful">&#xf42e;</span>';
}
