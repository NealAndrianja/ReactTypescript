type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer";
  permissions: ("read" | "write" | "delete")[];
  createdAt: Date;
};

type ReadonlyUser = Readonly<User>;

type EditabeUser = Partial<
  Pick<User, "name" | "email" | "role" | "permissions">
>;

type UserWithoutSensitiveInfo = Omit<User, "email" | "createdAt">;

type RolePermissions = Record<
  User["role"],
  Exclude<User["permissions"][number], "delete">
>;

const filterUserByRole = (
  users: User[],
  role: User["role"]
): UserWithoutSensitiveInfo[] =>
  users
    .filter((user) => user.role === role)
    .map(({ email, createdAt, ...rest }) => rest) 
