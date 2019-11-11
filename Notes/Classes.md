## Classes

### Format
```typescript
class name {
    ...
}
```

### Parameters
```typescript
class name {
    parameter1: dataType1,
    parameter2: dataType2,
    ...
}
```

Those parameters can be ```public```, ```private```, or ```protected```.

###  Constructor
```typescript
class name {
    ...
    constructor(parameters:dataTypes){
        this.parameter1 = parameter1;
        ...
    }
}
```
The methods are the same as functions, but it can be ```public```, ```private```, or ```protected``` as well.

### Create another class that is extend from another class

```typescript
class name1 extends masterClass {
    ...
}
```

### Connect interface to your class
```typescript
class name1 implements interface1 {
    ...
}
```
