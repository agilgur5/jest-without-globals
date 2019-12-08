const jestWG = jest
const expectWG = expect
// Jest's list of globals: https://jestjs.io/docs/en/api
const afterAllWG = afterAll
const afterEachWG = afterEach
const beforeAllWG = beforeAll
const beforeEachWG = beforeEach
const describeWG = describe
const fdescribeWG = fdescribe // alias for describe.only
const xdescribeWG = xdescribe // alias for describe.skip
const testWG = test
const itWG = it // alias for test
const fitWG = fit // alias for it.only
const xtestWG = xtest // alias for test.skip
const xitWG = xit // alias for it.skip

// all this renaming is a workaround for the TS2661 error: "Cannot re-export name that is not defined in the module"
export { jestWG as jest }
export { expectWG as expect }
export { afterAllWG as afterAll }
export { afterEachWG as afterEach }
export { beforeAllWG as beforeAll }
export { beforeEachWG as beforeEach }
export { describeWG as describe }
export { fdescribeWG as fdescribe } // alias for describe.only
export { xdescribeWG as xdescribe } // alias for describe.skip
export { testWG as test }
export { itWG as it } // alias for test
export { fitWG as fit } // alias for it.only
export { xtestWG as xtest } // alias for test.skip
export { xitWG as xit } // alias for it.skip
