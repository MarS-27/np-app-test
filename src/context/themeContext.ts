import { createContext } from "react";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ColorModeProvider = ColorModeContext.Provider;

export default ColorModeContext;
