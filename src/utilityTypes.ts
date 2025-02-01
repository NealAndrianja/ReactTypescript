type User = {
    id: number,
    name: string,
    email: string,
    role: 'admin' | 'editor' | 'viewer',
    permissions: ('read' | 'write' | 'delete')[],
    createdAt: Date
}

type ReadonlyUser = Readonly<User>

type EditabeUser = Partial<Pick<User, 'name' | 'email' | 'role' | 'permissions'>>

type UserWithoutSensitiveInfo = Omit<User, 'email' | 'createdAt'>

