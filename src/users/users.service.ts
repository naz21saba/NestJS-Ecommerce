import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: any[] = [];
  private nextId = 1;

  signup(body: any) {
    const existingUser = this.users.find((user) => user.email === body.email);
    if (existingUser) return { message: 'Email already exists' };

    const user = {
      id: this.nextId++,
      name: body.name,
      email: body.email,
      password: body.password,
    };

    this.users.push(user);
    return { message: 'Signup successful', user };
  }

  login(body: any) {
    const user = this.users.find(
      (user) => user.email === body.email && user.password === body.password,
    );
    if (!user) return { message: 'Invalid email or password' };
    return { message: 'Login successful', user };
  }

  findAll() { return this.users; }
}
