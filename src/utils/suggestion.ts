import { commands, convertUiToName } from "@/utils/command";
import { selectBox, selectLatestBox } from "@/utils/select";

import { help } from "@/utils/commands/help";
import { themeSwitcher } from "@/utils/commands/themeSwitcher";
import { whoami } from "@/utils/commands/whoami";
import { error } from "@/utils/commands/error";
import { ls } from "@/utils/commands/ls";
import { pwd } from "@/utils/commands/pwd";
import { rm } from "@/utils/commands/rm";
import { echo } from "@/utils/commands/echo";
import { cd } from "@/utils/commands/cd";
import { social } from "@/utils/commands/social";
import { about } from "@/utils/commands/about";

const suggestionsList = document.getElementById('suggestions-list') as HTMLInputElement;
const input = document.getElementById('cmdline') as HTMLInputElement;

let selectedSuggestionIndex = -1;

export const updateSelectedSuggestion = (items: HTMLElement[]) => {
  items.forEach((item, index) => {
    if (index === selectedSuggestionIndex) {
      item.classList.add('selected-item');
      item.scrollIntoView({ block: 'nearest' }); // Scroll to the selected item
    } else {
      item.classList.remove('selected-item');
    }
  });
};

// Simulate enter (used to insert suggestions from the suggestions list)
export const simulateEnter = () => {
  const enterEvent = new KeyboardEvent('keydown', {
    key: 'Enter',
    code: 'Enter',
    keyCode: 13,
    which: 13,
    bubbles: true,
  });

  input.dispatchEvent(enterEvent);
}

// Handle updating of the suggestions
export const updateSuggestions = () => {
  const query = input.value.toLowerCase();
  suggestionsList.innerHTML = ''; // Clear old suggestions
  selectedSuggestionIndex = -1; // Reset selected index

  const filteredOptions = commands.filter(option =>
    option.name.toLowerCase().includes(query)
  );

  if (filteredOptions.length > 0) {
    filteredOptions.forEach(option => {
      const item = document.createElement('div');
      item.classList.add('suggestion-item');
      item.textContent = option.ui;
      suggestionsList.appendChild(item);
    });
    suggestionsList.classList.add('show');
  } else {
    suggestionsList.classList.remove('show');
  }

  window.scrollTo(0, document.body.scrollHeight);
};
// Show suggestions when the user clicks/focuses on the input
input.addEventListener('focus', updateSuggestions);
// Show suggestions as the user types
input.addEventListener('input', updateSuggestions);


// Handle clicking on a suggestion
suggestionsList.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;
  if (target && target.classList.contains('suggestion-item')) {
    input.value = convertUiToName(target.textContent, commands);
    suggestionsList.classList.remove('show');
    simulateEnter();
    selectedSuggestionIndex = -1; // Reset selected index after selection
    window.scrollTo(0, document.body.scrollHeight);
  }
});

// Hide the list when clicking elsewhere on the page
document.addEventListener('click', (event) => {
  if (!event.target.closest('.custom-dropdown-container')) {
    // suggestionsList.classList.remove('show');
    selectedSuggestionIndex = -1; // Reset selected index when clicking outside
  }
});

// Check if the user is typing and focus the input
window.addEventListener("keydown", (e) => {
  if (e.key != "Enter" && e.key != "ArrowUp" && e.key != "ArrowDown") {
    input.focus();
  }
});

// Check for terminal shortcuts to remove content
// * Ctrl+l
// * Ctrl+u
window.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === 'l') {
    location.reload();
  }
  if (e.ctrlKey && e.key === 'u') {
    input.value = ''
  }
  if (e.key === "Escape") {
    // clear the input input field
    input.value = ''
    // deselect (remove focus)
    input.blur();
    // clear old suggestions
    suggestionsList.innerHTML = '';
    suggestionsList.classList.remove('show'); // Hide the list on escape
    selectedSuggestionIndex = -1; // Reset selected index
  }
});

// Handle keyboard navigation for suggestions
input.addEventListener("keydown", (e) => {
  const suggestionItems = Array.from(suggestionsList.children) as HTMLElement[];
  const value = input.value.toLowerCase();

  if (e.key === "ArrowDown") {
    e.preventDefault();
    if (suggestionItems.length > 0) {
      if (selectedSuggestionIndex < suggestionItems.length - 1) {
        selectedSuggestionIndex++;
      } else {
        selectedSuggestionIndex = 0; // Loop to the first item
      }
      updateSelectedSuggestion(suggestionItems);
    }
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    if (suggestionItems.length > 0) {
      if (selectedSuggestionIndex > 0) {
        selectedSuggestionIndex--;
      } else {
        selectedSuggestionIndex = suggestionItems.length - 1; // Loop to the last item
      }
      updateSelectedSuggestion(suggestionItems);
    }
  } else if (e.key === "Enter") {
    if (
      selectedSuggestionIndex > -1 && suggestionItems[selectedSuggestionIndex] &&
        !value.startsWith("help") &&
        !value.startsWith("switch") &&
        !value.startsWith("clear") &&
        !value.startsWith("social") &&
        !value.startsWith("about")
    ) {
      e.preventDefault();
      input.value = convertUiToName(suggestionItems[selectedSuggestionIndex].textContent, commands);
      suggestionsList.classList.remove('show');
      simulateEnter();
      selectedSuggestionIndex = -1;
    } else {
      const commandHistorySection = document.getElementById("command-history") as HTMLInputElement;

      // COMMANDS
      if (value.startsWith("help")) {
        help(commandHistorySection, value)
      } else if (value.startsWith("about")) {
        about(commandHistorySection, value)
      } else if (value.startsWith("social")) {
        social(commandHistorySection, value)
      } else if (value.startsWith("switch")) {
        themeSwitcher()
      } else if (value.startsWith("clear")) {
        location.reload();
      // HIDDEN COMMANDS
      } else if (value.startsWith("cd")) {
        cd(commandHistorySection, value)
      } else if (value.startsWith("echo")) {
        echo(commandHistorySection, value)
      } else if (value.startsWith("ls") || value.startsWith("dir")) {
        ls(commandHistorySection, value)
      } else if (value.startsWith("pwd")) {
        pwd(commandHistorySection, value)
      } else if (value.startsWith("rm")) {
        rm(commandHistorySection, value)
      } else if (value.startsWith("whoami")) {
        whoami(commandHistorySection, value)
      } else {
        error(commandHistorySection, value)
      }

      // make new command history content selectable
      selectBox();
      selectLatestBox();
      // clear the input input field
      input.value = ''
      // deselect (remove focus)
      input.blur();
      // clear suggestion list (hide suggestion list)
      suggestionsList.innerHTML = ''; // Clear old suggestions
      suggestionsList.classList.remove('show'); // Hide the list
      selectedSuggestionIndex = -1; // Reset selected index
      window.scrollTo(0, document.body.scrollHeight);
    }
  }
});
