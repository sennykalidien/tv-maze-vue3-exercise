import { describe, it, expect } from "vitest";
import { sortDataByRating } from "../../utils";
import { data, dataWithMissingRating } from "../../mock";

describe("sortDataByRating", () => {
  it("should sort data by rating in descending order", () => {
    const sortedData = sortDataByRating(data);

    expect(sortedData[0].metaList[0].value).toBe("5.0");
    expect(sortedData[1].metaList[0].value).toBe("4.5");
    expect(sortedData[2].metaList[0].value).toBe("3.2");
  });

  it("should handle data with missing ratings", () => {
    const sortedData = sortDataByRating(dataWithMissingRating);

    expect(sortedData[0].metaList[0].value).toBe("5.0");
    expect(sortedData[1].metaList[0].value).toBe("4.5");
    expect(sortedData[2].metaList[0].value).toBe("3.2");
    expect(sortedData[3].metaList[0].value).toBe("");
  });

  it("should return the same data if no ratings are present", () => {
    const sortedData = sortDataByRating(data);

    expect(sortedData).toEqual(data);
  });
});
