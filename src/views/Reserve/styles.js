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

    infos:{
        alignSelf: "stretch",
        margin: 20,
        justifyContent: "flex-start"
    },

    titleText:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 5
    },

    text:{
        marginBottom: 20,
    }
});