import { allColors, type ColorContrast, type ColorScheme } from "../../shared";
import DarkModern from "./json/dark_modern.json";
import DarkPlus from "./json/dark_plus.json";
import DarkVS from "./json/dark_vs.json";
import { merge } from "es-toolkit";
export const getVSCodeColors = (
	scheme: ColorScheme,
	contrast: ColorContrast,
) => {
	const colors = allColors[scheme];

	const result = merge(DarkVS, merge(DarkPlus, DarkModern));
	result.colors = merge(result.colors, {
		"editorBracketHighlight.foreground1": colors.yellow2,
		"editorBracketHighlight.foreground2": colors.purple2,
		"editorBracketHighlight.foreground3": colors.blue2,
		"editorBracketHighlight.foreground4": colors.orange2,
		"editorBracketHighlight.foreground5": colors.green2,
		"editorBracketHighlight.foreground6": colors.aqua2,
	});
	return result.colors;
};
