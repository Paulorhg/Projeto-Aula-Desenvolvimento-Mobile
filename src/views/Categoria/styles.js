import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
    },

    header: {
        alignSelf: "stretch",
        paddingVertical: 60,
        backgroundColor: "#EF7676",
        alignItems: "center",
    },

    textHeader: {
        fontSize: 30,
        fontWeight: "bold"
    },

    // categorias: {
    //     flexDirection: "row",
    //     flexWrap: 'wrap',        
    // },

    categoria:{
        width: 120,
        height: 120,
        backgroundColor: "#C4C4C4",
        margin: 25,

        justifyContent: "center",
        alignItems: "center",
    }
});