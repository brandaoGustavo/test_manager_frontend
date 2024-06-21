import { TestObject } from "./TestObject";

export class TestCase {
    id!: number;
    title!: string;
    description!: string;
    tests!: TestObject[];
}