// Types comparator
type Equals<A, B> = A extends B ? (B extends A ? "success" : never) : never;

// Base type
type Person = {
  name: string;
  surname: string;
  isOnline: boolean;
  permissions: number[];
};

// Test 1

// Type that you need to make
type PersonWithNonRequired = {
  name?: string;
  surname?: string;
  isOnline?: boolean;
  permissions?: number[];
};

// Use UtilityTypes to make it equal PersonWithNonRequired
// https://www.typescriptlang.org/docs/handbook/utility-types.html
type FixMePersonWithNonRequired = Partial<Person>;

// ShouldPass must be equal "success"
type ShouldPass = Equals<PersonWithNonRequired, FixMePersonWithNonRequired>;

// Test 2

type PartiallyPersonWithBoolPermissions = {
  name: string;
  surname?: string;
  isOnline?: boolean;
  permissions?: boolean[];
};

// Use UtilityTypes to make it equal PartiallyPersonWithBoolPermissions
// https://www.typescriptlang.org/docs/handbook/utility-types.html
type FixMePartiallyPersonWithBoolPermissions = Pick<Person, "name"> &
  Partial<Pick<Person, "surname" | "isOnline">> & { permissions?: boolean[] };

// ShouldPass2 must be equal "success"
type ShouldPass2 = Equals<
  PartiallyPersonWithBoolPermissions,
  FixMePartiallyPersonWithBoolPermissions
>;
