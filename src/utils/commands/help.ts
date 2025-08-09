export const help = (
  commandHistorySection: HTMLElement, 
  cmd: string,
) => {
  const startTime = performance.now();

  const helpElements = [
    `<span>&#xf059f; 42LM - Homepage</span><br><br>`,
    `<span is-="text" variant-="green" weight-="bold">Available Commands:</span><br>`,
    // `<span>&nbsp;&nbsp;<span is-="text" variant-="teal" weight-="bold">help</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Help about any command</span><br>`, // TODO: implement help for every command e.g. `help switch` ...
    `<span>&nbsp;&nbsp;<span is-="text" variant-="teal" weight-="bold">about</span>&nbsp;&nbsp;&nbsp;&nbsp;Short text about me</span><br>`,
    `<span>&nbsp;&nbsp;<span is-="text" variant-="teal" weight-="bold">social</span>&nbsp;&nbsp;&nbsp;Social media links</span><br>`,
    `<span>&nbsp;&nbsp;<span is-="text" variant-="teal" weight-="bold">switch</span>&nbsp;&nbsp;&nbsp;Switch dark/light theme</span><br>`,
    `<span>&nbsp;&nbsp;<span is-="text" variant-="teal" weight-="bold">clear</span>&nbsp;&nbsp;&nbsp;&nbsp;Clear the screen</span><br><br>`,
    `<span is-="text" variant-="green" weight-="bold">Keyboard Shortcuts:</span><br>`,
    `<span>&nbsp;&nbsp;<span is-="text" variant-="teal" weight-="bold">Ctrl+l</span>&nbsp;&nbsp;&nbsp;Clear the screen</span>`,
    `<span>&nbsp;&nbsp;<span is-="text" variant-="teal" weight-="bold">Ctrl+u</span>&nbsp;&nbsp;&nbsp;Cut all text from the current cursor position to the beginning of the line</span>`,
    `<span>&nbsp;&nbsp;<span is-="text" variant-="teal" weigth-="bold">Escape</span>&nbsp;&nbsp;&nbsp;Deselect the input field</span>`
    // "<span>Use &quot;[command] help&quot; for more information about a command</span>",
  ];

  const container = document.createElement('row');
  container.setAttribute('is-', 'column');
  container.classList.add('command-content')

  const command = document.createElement('span');
  command.classList.add('command')
  container.appendChild(command)

  helpElements.forEach((element) => {
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
    ' ('+elapsedTime.toFixed(3)+'s) <span class="command-successful"">&#xf42e;</span>';
}
