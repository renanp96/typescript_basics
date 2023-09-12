import { View } from "./view.js";
export class MessageView extends View {
    /**
     * Genetartes an HTML template base on the provided model string.
     *
     * @param {string} model - The string to be included in the template.
     * @returns {string} - The HTML template as a string.
     * @protected
     */
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
