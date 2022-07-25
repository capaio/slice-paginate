import {paginate} from "../src";

describe("Paginate function", () => {
  let caseCounter = 0;
  it.each([
    [caseCounter++, "Page 1", 11, 3, 1, 0, 3],
    [caseCounter++, "Page 0", 50, 3, 0, 0, 3],
    [caseCounter++, "Page over max", 5, 4, 5, 4, 8],
    [caseCounter++, "Page undefined", 5, 4, undefined, 0, 4],
    [caseCounter++, "Page negative", 5, 4, -5, 0, 4],
    [caseCounter++, "Page NaN", 5, 4, +"adshbn", 0, 4],
    [caseCounter++, "Page null", 5, 4, null, 0, 4],
    [caseCounter++, "Length 0", 0, 4, 2, 0, 0],
  ])(
    "case %i: %s",
    async (
      _i: number,
      _description: string,
      length: number,
      elementsPerPage: number,
      requestPage: number,
      start: number,
      end: number
    ) => {
      expect(paginate(length, elementsPerPage, requestPage)).toStrictEqual({
        start,
        end,
      });
    }
  );
});
