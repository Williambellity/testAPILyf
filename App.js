import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class App extends React.Component {
  requestLyfTest = async () => {
    console.log("hello");
    var requestData = {
      additionalData: {
        location: "Row 3, East Entrance",
      },
      amount: 1000,
      creditor: {
        name: "6a594a8f-7b0a-46a1-aa5c-aa67a3fc9972",
        uuid: "1253d38c-5576-4966-a83b-f46e80af83f7",
      },
      currency: "EUR",
      debtor: {
        identificationType: "CONSUMER_PHONE",
        identificationValue: "00000010",
      },
      externalReference: "a3a91874-fdd3-4fcf-9257-9031e2c529a8",
      technicalData: {
        message: {
          fromCreditor:
            "Merci de votre confiance. A bientôt dans nos magasins.",
        },
        externalLoyalty: {
          name: "ProgramName",
          type: "ProgramType",
          value: "123456789458767",
        },
      },
    };
    try {
      console.log("this happen");
      const response = await fetch(
        "https://sandbox-acceptance.lyf.eu/acceptance/api/paymentRequests",
        {
          method: "POST",
          headers: {
            Host: "sandbox-acceptance.lyf.eu",
            "User-Agent": "Apache-HttpClient",
            Accept: "application/vnd.com.fivory+json;version=5",
            "Content-Length": 867,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );
      let json = await response.json();
      let data = await json;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // authRequest = async () => {
  //   var requestData = {
  //     grant_type: "authorization_code",
  //     code: "ABCD123456789",
  //   };

  //   try {
  //     console.log("request token");
  //     const response = await fetch(
  //       "https://sandbox-acceptance.lyf.eu/acceptance/api/oauth2/token",
  //       {
  //         method: "POST",
  //         headers: {
  //           Host: "sandbox-acceptance.lyf.eu",
  //           "User-Agent": "test",
  //           Accept: "application/vnd.com.fivory+json;version=5",
  //           "Content-Length": 867,
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(requestData),
  //       }
  //     );
  //     let json = await response.json();
  //     let data = await json;
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button title="request test" onPress={this.requestLyfTest} />
        {/* <Button title="token request test" onPress={this.authRequest} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
