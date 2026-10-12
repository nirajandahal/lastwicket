import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useKeepAwake } from 'expo-keep-awake';
import { WebView } from 'react-native-webview';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { GAME_HTML } from './gameHtml';

const BG = '#0c1810';

function Game() {
  useKeepAwake(); // keep the screen on while playing
  const insets = useSafeAreaInsets();
  const [key, setKey] = useState(0);

  return (
    <View
      style={[
        styles.root,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <StatusBar hidden style="light" />
      <WebView
        key={key}
        style={styles.web}
        source={{ html: GAME_HTML, baseUrl: 'https://lastwicket.local/' }}
        originWhitelist={['*']}
        javaScriptEnabled
        domStorageEnabled
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback
        scrollEnabled={false}
        bounces={false}
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        setBuiltInZoomControls={false}
        setDisplayZoomControls={false}
        textZoom={100}
        androidLayerType="hardware"
        setSupportMultipleWindows={false}
        onRenderProcessGone={() => setKey((k) => k + 1)}
      />
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <Game />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: BG },
  web: { flex: 1, backgroundColor: BG },
});
