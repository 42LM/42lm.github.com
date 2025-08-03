export const ls = (
  commandHistorySection: HTMLElement, 
  cmd: string,
) => {
  const startTime = performance.now();

  const listInfos = [
    // "<span>&#xf07b; Blog</span>",
    "<span> ls</span>",
    "<span> whoami</span>",
  ];

  const container = document.createElement('row');
  container.setAttribute('is-', 'column');
  container.classList.add('command-content')
  container.style = "border-bottom: 1px solid var(--background1);"

  const command = document.createElement('span');
  command.style = "padding: 0 0 10px 0; color: var(--background3);"
  container.appendChild(command)

  const grid = document.createElement('div');
  grid.classList.add('grid')
  container.appendChild(grid)

  listInfos.forEach((bookTitle) => {
    const spanElement = document.createElement('span');
    spanElement.innerHTML = bookTitle;
    spanElement.style = "color: var(--green);"
    grid.appendChild(spanElement);
  });

  commandHistorySection.append(container);

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;
  command.innerHTML = '<span>~ '+
    cmd+
    ' ('+elapsedTime.toFixed(3)+'s) <span style="color: var(--green)">&#xf42e;</span></span>';
}
