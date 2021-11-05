export default function addDropdownEvents(dropdown, button) {
  document.addEventListener('click', (e) => {
    const isDropdownButton = e.target.matches(`[${button}]`);

    if (!isDropdownButton && e.target.closest(`[${dropdown}]`)) return;

    let currentDropdown;
    if (isDropdownButton) {
      currentDropdown = e.target.closest(`[${dropdown}]`);
      currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll(`[${dropdown}]`).forEach((dropdown) => {
      if (dropdown !== currentDropdown) {
        dropdown.classList.remove('active');
      }
    });
  });
}

addDropdownEvents('data-dropdown', 'data-dropdown-button');
