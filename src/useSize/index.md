---
title: useSize
group:
  title: Dom
  path: /dom
  order: 3
---

# useSize

一个用于监听 dom 节点尺寸变化的 Hook

## 代码演示

### 基础用法

<code  hideActions='["CSB", "EXTERNAL"]' src="./demo/demo1.tsx" title="默认返回body的size" />

<code  hideActions='["CSB", "EXTERNAL"]' src="./demo/demo2.tsx" title="通过ref获取组件" />

## API

```javascript
const size = useSize(target);
```

### 参数

|  参数  |       说明        |                          类型                          |        默认值        |
| :----: | :---------------: | :----------------------------------------------------: | :------------------: |
| target | DOM 节点或者 Refs | HTMLElement \| (() => HTMLElement) \| MutableRefObject | window.document.body |

### 返回值

| 参数 |           说明 |                              类型 |
| :--: | -------------: | --------------------------------: |
| size | dom 节点的尺寸 | { width: number, height: number } |
