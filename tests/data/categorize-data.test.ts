import { describe, it, expect } from "vitest";
import { categorizeDataByGenre } from "../../utils";
import { data, dataCategorized } from "../../mock";

describe("categorizeDataByGenre", () => {
  it("should categorize data by genres", () => {
    const result = categorizeDataByGenre(data);

    expect(result).toEqual(dataCategorized);
  });
});
