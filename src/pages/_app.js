import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/overpass";
import "@fontsource/overpass-mono";
const theme = extendTheme({
  fonts: {
    heading: "Overpass mono",
    body: "Overpass",
  },
  colors: {
    brand: {
      brown: "#3D3522",
      white: "#FEF9FF",
      orange: "#BA2D0B",
      yellow: "#FFAB5C",
      sand: "#E4C3AD",
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
