import React, { useEffect } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import AppHeader from "../components/AppHeader";
import AppText from "../components/AppText";
import colors from "../config/colors";
import storage from "../storage/storage";
import Content from "./Content";
import Screen from "./Screen";

function VersionScreen() {
  const isFocused = useIsFocused();

  // useEffect(() => {
  //   if (isFocused) {
  //     storage.deleteAllStorage();
  //   }
  // }, [isFocused]);

  return (
    <Screen>
      <AppHeader />
      <Content>
        <ScrollView style={styles.view}>
          <AppText style={styles.noBooks}>X Stories V1.0.0</AppText>
          <AppText />
          <AppText style={styles.noBooks}>
            We create original IP in Taiwan from good stories.
          </AppText>
          <AppText style={styles.noBooks}>
            We take advantage of having many years’ experiences in novels and
            scriptwriting.
          </AppText>
          <AppText style={styles.noBooks}>
            We have various different genres of stories, such as thriller,
            sci-fi, horror, love cliché, etc.
          </AppText>
          <AppText />
          <AppText style={styles.noBooks}>Story: Monica {"&"} Shaballe</AppText>
          <AppText style={styles.noBooks}>Screenplay: Shaballe</AppText>
          <AppText style={styles.noBooks}>Director: Monica</AppText>
          <AppText style={styles.noBooks}>Photography: Danny Wang</AppText>
          <AppText style={styles.noBooks}>Programmer: Ruei</AppText>
          <AppText style={styles.noBooks}>Art: Monica</AppText>
          <AppText style={styles.noBooks}>Editor: Monica</AppText>
          <AppText style={styles.noBooks}>Cast: Abbie</AppText>
          <AppText style={styles.noBooks}>{"          "}Danny Wang</AppText>

          <AppText />
          <View style={styles.rowPicture}>
            <AppText style={styles.noBooks}>Sponsor:</AppText>
            <Image
              style={styles.sponsorImg}
              source={require("../../assets/version/TPClogo.png")}
            />
          </View>

          <AppText />
          <AppText style={styles.noBooks}>Thanks to:</AppText>
          <AppText style={styles.noBooks}>Jenny</AppText>
          <AppText style={styles.noBooks}>Claire</AppText>
          <AppText style={styles.noBooks}>Vanja</AppText>
          <AppText style={styles.noBooks}>LuLu</AppText>
          <AppText style={styles.noBooks}>Johnson</AppText>
          <AppText style={styles.noBooks}>Encty</AppText>
          <AppText style={styles.noBooks}>Alan</AppText>
          <AppText style={styles.noBooks}>Shaballe</AppText>
          <AppText style={styles.noBooks}>Smile</AppText>
          <AppText />
          <AppText style={styles.noBooks}>
            We sincerely hope you can join us, such as cast, photography, art,
            translator, etc.
          </AppText>
          <AppText style={styles.noBooks}>
            If you would like to sponsor or invest in us, please contact us. We
            will be glad to hear from you.
          </AppText>
          <AppText />

          <View style={styles.rowPicture}>
            <AppText style={styles.noBooks}>Email: </AppText>
            <AppText style={[styles.noBooks, styles.greenText]} selectable>
              xmc@xstudio-mclub.url.tw
            </AppText>
          </View>

          <AppText />
          <AppText style={styles.noBooks}>Home tap in Line:</AppText>
          <Image
            style={styles.qrcode}
            source={require("../../assets/version/502049.jpg")}
          />
          <AppText />
          <AppText />

          <View style={styles.rowPicture}>
            <AppText style={styles.noBooks}>Copyright @</AppText>
            <Image
              style={styles.logo}
              source={require("../../assets/version/logo.png")}
            />
          </View>

          <AppText />
          <AppText style={styles.noBooks}>All Rights Reserved.</AppText>
        </ScrollView>
      </Content>
    </Screen>
  );
}

const styles = StyleSheet.create({
  view: {
    marginBottom: 30,
  },
  noBooks: {
    color: colors.leftChatBackground,
    fontSize: 15,
    fontWeight: "bold",
  },
  rowPicture: {
    flexDirection: "row",
  },
  sponsorImg: {
    marginLeft: 7,
    marginTop: -2,
    width: 120,
    height: 24,
  },
  qrcode: {
    marginTop: 10,
    width: 150,
    height: 150,
  },
  logo: {
    marginTop: -4,
    marginLeft: 5,
    width: 222,
    height: 27,
  },
  greenText: {
    color: colors.versionText,
  },
});

export default VersionScreen;
