<script>
    import Field from "@/components/base/Field.svelte";
    import { toggleTheme, getTheme, THEMES } from "@/components/hooks/ToogleDarkmode";

    function toggleDarkMode() {
        toggleTheme();
    }

    const isDarkMode = getTheme() === THEMES.dark;
</script>

<div class="wrapper">
    <Field class="form-field form-field-toggle" name="meta.toggleDarkMode" let:uniqueId>
        <input checked={isDarkMode} on:click={toggleDarkMode} type="checkbox" id={uniqueId} aria-hidden />
        <label for={uniqueId}>
            <span class="txt">Toggle dark mode</span>
        </label>
    </Field>
</div>
