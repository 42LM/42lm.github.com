export interface CommandMapping {
  ui: string;
  name: string;
}

export const commands: CommandMapping[] = [
  { ui: '┏ 󰋗  help', name: 'help' },
  { ui: '┣   whoami', name: 'whoami' },
  { ui: '┣   social links', name: 'social' },
  // { ui: '┣ 󰔎  switch theme', name: 'switch' },
  { ui: '┗   clear screen', name: 'clear' },
];

export const convertUiToName = (uiCommand: string, commandList: CommandMapping[]): string => {
  const foundCommand = commandList.find(command => command.ui === uiCommand);
  return foundCommand ? foundCommand.name : '';
}
