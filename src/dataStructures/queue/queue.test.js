const Queue = require("./queue")

const queue = require("./queue")
test('Queue is a class', () => {
    expect(typeof Queue.prototype.constructor).toEqual('function');
});

test('can add elements to a queue', () => {
    const q = new Queue();
    expect(() => {
        q.add(1);
    }).not.toThrow();
});

test('can remove elements from a queue', () => {
    const q = new Queue();
    expect(() => {
        q.add(1);
        q.remove();
    }).not.toThrow();
});

test('Order of elements is maintained', () => {
    const q = new Queue();
    q.add(1);
    q.add(2);
    q.add(3);
    expect(q.remove()).toEqual(1);
    expect(q.remove()).toEqual(2);
    expect(q.remove()).toEqual(3);
    expect(q.remove()).toEqual(undefined);
});

// @ponicode
describe("add", () => {
    let inst

    beforeEach(() => {
        inst = new queue()
    })

    test("0", () => {
        let callFunction = () => {
            inst.add("2017-09-29T19:01:00.000")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.add("2017-09-29T23:01:00.000Z")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.add("Mon Aug 03 12:45:00")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.add("01:04:03")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.add(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("remove", () => {
    let inst

    beforeEach(() => {
        inst = new queue()
    })

    test("0", () => {
        let callFunction = () => {
            inst.remove()
        }
    
        expect(callFunction).not.toThrow()
    })
})
