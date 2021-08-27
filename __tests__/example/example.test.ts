import { hello } from "../../example/hello"

const mockLog = jest.fn(console.log)
const globalAny: any = global
globalAny.Logger = { log: mockLog }

test("hello world", () => {
  hello()
  expect(mockLog).toHaveBeenCalled()
})
