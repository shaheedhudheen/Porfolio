import image from "@rollup/plugin-image";
import svg from "rollup-plugin-svg";

export default {
  // ...
  plugins: [
    // ...
    image(),
    svg(),
  ],
};
