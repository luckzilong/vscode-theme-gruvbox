import { allColors } from "../../shared";
import darkModern from "./dark_modern.json";
import darkPlus from "./dark_plus.json";
import darkVs from "./dark_vs.json";
import { merge } from "es-toolkit";
export const getVscodeModernColors = () => {
	const { red2, orange2, yellow2, green2, blue2, purple2 } = allColors.dark;
	const colors = merge(darkVs, merge(darkPlus, darkModern)).colors;
	colors["editor.lineHighlightBackground"] = "#1b1b1b";
	colors["editor.lineHighlightBorder"] = "#191919";
	[blue2, yellow2, orange2, green2, purple2, red2].map((value, index) => {
		colors[`editorBracketHighlight.foreground${index}`] = value;
	});
	return colors;
};
