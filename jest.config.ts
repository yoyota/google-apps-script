// jest.config.ts
import type { Config } from "@jest/types"

// Sync object
const config: Config.InitialOptions = {
  preset: "ts-jest",
  verbose: true,
  testEnvironment: "node",
  setupFiles: ["<rootDir>/jest.setup.ts"]
}
export default config
