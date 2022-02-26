import { TypesThemeResult } from "./ResultContextTypes";

export type ThemeStateContextTypes = {
    colorText: string;
    backgroundInterface: string;
    backgroundInputs: string;
    colorPlaceholderInputs: string;
    colorIconInputs: string;
}

export type ThemeProviderProps = {
    children: JSX.Element | JSX.Element[];
}

export type ThemeProviderValuesTypes = {
    theme: ThemeStateContextTypes;
    setTheme: setThemeTypes;
    applyThemeResult: (result: TypesThemeResult) => void;
}

type setThemeTypes = React.Dispatch<React.SetStateAction<ThemeStateContextTypes>>;