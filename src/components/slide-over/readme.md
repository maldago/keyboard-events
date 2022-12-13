# my-component

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute       | Description | Type      | Default     |
| ------------- | --------------- | ----------- | --------- | ----------- |
| `qaIdClose`   | `qa-id-close`   |             | `string`  | `undefined` |
| `qaIdElement` | `qa-id-element` |             | `string`  | `undefined` |
| `visible`     | `visible`       |             | `boolean` | `false`     |


## Events

| Event     | Description | Type               |
| --------- | ----------- | ------------------ |
| `close`   |             | `CustomEvent<any>` |
| `trigger` |             | `CustomEvent<any>` |


## Methods

### `handleClose() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `handleTrigger() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [back-drop](../back-drop)
- [test-icon](../test-icon)

### Graph
```mermaid
graph TD;
  slide-over --> back-drop
  slide-over --> test-icon
  style slide-over fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
