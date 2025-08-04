export const cd = (
  commandHistorySection: HTMLElement, 
  cmd: string,
) => {
  const startTime = performance.now();

  const cdParts = cmd.split('cd ', 2).slice(1);

  const container = document.createElement('row');
  container.setAttribute('is-', 'column');
  container.classList.add('command-content')
  container.style = "border-bottom: 1px solid var(--background1);"

  const command = document.createElement('span');
  command.style = "padding: 0 0 10px 0; color: var(--background3);"
  container.appendChild(command)

  cdParts.forEach((element) => {
    const path = localStorage.getItem('cd');
    const tmp = path+'/'+element;
    const final = removeConsecutiveSlashesButKeepOneDouble(tmp)
    localStorage.setItem('cd', final);
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

const removeConsecutiveSlashesButKeepOneDouble = (str: string) => {
    const firstDoubleSlashIndex = str.indexOf('//');
    let tempStr = str.replace(/\/+/g, '/');

    const protocolMatch = str.match(/^(https?):\/\//);
    if (protocolMatch) {
        return tempStr.replace(/^(https?):\/+/, '$1://');
    }

    if (firstDoubleSlashIndex !== -1) {
        const regex = /\/\/+/; // Match two or more slashes
        const match = str.match(regex);

        if (match) {
            const firstSequenceIndex = match.index;
            const firstSequenceLength = match[0].length;

            const partBefore = str.substring(0, firstSequenceIndex);
            const partAfter = str.substring(firstSequenceIndex + firstSequenceLength);

            const normalizedPartAfter = partAfter.replace(/\/+/g, '/');
            return partBefore + '//' + normalizedPartAfter;
        }
    }

    return str;
}
