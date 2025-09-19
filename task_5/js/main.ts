// Task 11: Brand convention & nominal typing

// 1. Brand type for MajorCredits
export interface MajorCredits {
  credits: number;
  // brand field
  _majorBrand: "MajorCredits";
}

// 2. Brand type for MinorCredits
export interface MinorCredits {
  credits: number;
  // brand field
  _minorBrand: "MinorCredits";
}

// 3. Function to sum MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _majorBrand: "MajorCredits",
  };
}

// 4. Function to sum MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _minorBrand: "MinorCredits",
  };
}

// ---- Test cases ----
const major1: MajorCredits = { credits: 3, _majorBrand: "MajorCredits" };
const major2: MajorCredits = { credits: 4, _majorBrand: "MajorCredits" };
console.log("Sum of major credits:", sumMajorCredits(major1, major2));

const minor1: MinorCredits = { credits: 1, _minorBrand: "MinorCredits" };
const minor2: MinorCredits = { credits: 2, _minorBrand: "MinorCredits" };
console.log("Sum of minor credits:", sumMinorCredits(minor1, minor2));
