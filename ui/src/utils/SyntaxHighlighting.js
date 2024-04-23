import { tags } from "@lezer/highlight"; // Importing 'tags' from the '@lezer/highlight' module for syntax highlighting.
import { syntaxHighlighting, HighlightStyle } from "@codemirror/language"; // Importing necessary functions and objects from '@codemirror/language' for syntax highlighting.

/**
 * Defines the configuration for syntax highlighting.
 * 
 * This configuration specifies colors and styles for different syntactic elements.
 * 
 * @type {HighlightStyle}
 */
const SyntaxHighlightingConfig = HighlightStyle.define([
    { tag: tags.keyword, color: "var(--successColor)" }, // Highlights keywords with a success color.
]);

/**
 * Sets up syntax highlighting for a CodeMirror editor using the specified configuration.
 * 
 * @returns {Function} A function to apply the syntax highlighting configuration.
 */
export default function SetPockeTBaseSyntaxHighlighting() {
    return syntaxHighlighting(SyntaxHighlightingConfig, { fallback: true }); // Applies the syntax highlighting configuration to the editor, with fallback enabled.
}