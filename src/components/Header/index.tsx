import { 
    View, 
    Switch 
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { useTheme } from "../../contexts/ThemeContext/theme";
import styles from "./styles";

const Header = () => {
    const {
        modeDark,
        toggleModeDark,
        theme
    } = useTheme();

    return (
        <View style={styles.header}>
            {
                modeDark
                ?
                <Feather
                    name="moon"
                    color={theme.colorIconHeader}
                    size={27}
                />
                :
                <Feather
                    name="sun"
                    color={theme.colorIconHeader}
                    size={27}
                />

            }
            <Switch
                style={styles.switch}
                value={ modeDark }
                onValueChange={ toggleModeDark }
                trackColor={{
                    false: theme.colorBackgroundSwitch,
                    true: theme.colorBackgroundSwitch
                }}
                thumbColor={theme.colorCircleSwitch}
            />
        </View>
    )
}

export default Header;