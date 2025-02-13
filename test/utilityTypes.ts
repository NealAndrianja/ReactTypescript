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

    const users: User[] = [
        { id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin', permissions: ['read', 'write', 'delete'], createdAt: new Date() },
        { id: 2, name: 'Bob', email: 'bob@example.com', role: 'editor', permissions: ['read', 'write'], createdAt: new Date() },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'viewer', permissions: ['read'], createdAt: new Date() },
      ];
      
      const editors = filterUserByRole(users, 'editor');
      console.log(editors);