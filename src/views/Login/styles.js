import { StyleSheet } from "react-native";



export default StyleSheet.create({

    container: {
        flex: 1,
    },

    header: {
        alignSelf: "stretch",
        paddingVertical: 60,
        backgroundColor: "#EF7676",
        alignItems: "center",
    },

    textHeader: {
        fontSize: 30,
        marginTop: 20,
        fontWeight: "bold"
    },

    content:{
        flex: 1,
        marginTop: 90,
        alignItems: "center",
        flexDirection : "column",
        justifyContent: "flex-start"

    },

    title: {
        fontSize: 24,
        fontWeight: "bold"
    },
    

    input: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#DCDCDC"
      },

      cad: {
        flex: 1,
        padding: 50,
        fontSize: 18,
        marginTop: -40,
        color: "#2f86e6"        

    },


    button: {
        flex: 1,
        padding: 50,
        fontSize: 18,
        marginTop: -40,
        color: "#2f86e6"        

    }
});