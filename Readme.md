# 0x04-TypeScript

## TypeScript: Interface vs Type

TypeScript provides two main ways to describe the shape of objects: **interface** and **type**. Both are used for type-checking and can be used interchangeably in many cases, but there are differences.

---

### Interface

- Used to define the structure of objects and classes.
- Supports declaration merging (can be extended multiple times).
- Preferred for defining contracts for classes and objects.

**Example:**

```typescript
interface User {
  name: string;
  age: number;
}
```
