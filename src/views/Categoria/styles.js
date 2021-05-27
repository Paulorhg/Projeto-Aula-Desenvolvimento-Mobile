import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
    },

    header: {
        alignSelf: "stretch",
        paddingVertical: 45,
        backgroundColor: "#EF7676",
        alignItems: "center",
    },
    
    returnButton:{
        alignSelf: "stretch",
        justifyContent: "flex-start",
        marginLeft: 15,
        marginTop: -15,
        marginBottom: 10
    },

    textHeader: {
        fontSize: 30,
        fontWeight: "bold"
    },

    categoria:{
        width: 120,
        height: 120,
        backgroundColor: "#C4C4C4",
        margin: 25,

        justifyContent: "center",
        alignItems: "center",
    }
});