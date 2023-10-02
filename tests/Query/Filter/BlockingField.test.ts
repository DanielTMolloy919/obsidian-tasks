import { TaskBuilder } from '../../TestingTools/TaskBuilder';
import { BlockingField } from '../../../src/Query/Filter/BlockingField';

describe('blocking', () => {
    const notBlocking = new TaskBuilder().build();
    const child = new TaskBuilder().id('12345').build();
    const childWithoutParent = new TaskBuilder().id('23456').build();
    const parent = new TaskBuilder().dependsOn(['12345']).build();

    const allTasks = [notBlocking, child, parent];

    const filter = new BlockingField(allTasks).createFilterOrErrorMessage('is blocking');

    it('is blocking', () => {
        expect(filter).toBeValid();
        expect(filter).not.toMatchTask(notBlocking);
        expect(filter).toMatchTask(child);
        expect(filter).not.toMatchTask(parent);
        expect(filter).not.toMatchTask(childWithoutParent);
    });
});