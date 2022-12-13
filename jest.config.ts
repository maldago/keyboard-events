import type { Config } from "jest";
import { defaults } from "jest-config";

const config: Config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "mts"],
  verbose: true,
  preset: "@stencil/core/testing",
  testRunner: "jest-jasmine2",
  testRegex: "(/__tests__/.*|(\\.|/)(e2e|test|spec))\\.[jt]sx?$"
};

export default config;
