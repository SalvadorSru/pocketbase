/**
 * Enum defining available theme options.
 * @readonly
 * @enum {string}
 */
export const THEMES = {
    dark: 'dark', // Dark theme option.
    light: 'light', // Light theme option.
}

/**
 * Applies the saved theme on page load, or sets a default theme if none is saved.
 */
export function applyThemeOnMount() {

    // Retrieve the saved theme from local storage.
    const savedTheme = getTheme()

    // If a theme is saved, apply it.
    if (savedTheme) {
        setTheme(savedTheme)
        return
    } else {
        // If no theme is saved, check for user's system preference for dark mode.
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
        if (isDarkMode) {
            setTheme(THEMES.dark) // Apply dark theme if user prefers dark mode.
        }
    }
}

/**
 * Toggles between light and dark themes.
 */
export function toggleTheme() {
    // Get the current theme.
    const currentTheme = getTheme();
    // Toggle between light and dark themes.
    setTheme(currentTheme === THEMES.dark ? THEMES.light : THEMES.dark);
}

/**
 * Sets the theme for the entire application.
 * @param {string} theme - The theme to be applied (either 'dark' or 'light').
 */
export function setTheme(theme) {
    // Apply the theme to the body's data attribute.
    document.body.setAttribute('data-theme', theme);
    // Save the theme to local storage for persistence.
    window.localStorage.setItem('theme', theme);
}

/**
 * Retrieves the saved theme from local storage.
 * @returns {string|null} - The saved theme, or null if none is saved.
 */
export function getTheme() {
    // Retrieve the saved theme from local storage.
    return window.localStorage.getItem('theme');
}
