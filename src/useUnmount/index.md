---
title: useUnmount
group:
  title: LifeCycle
  path: /life-cycle
  order: 1
---

# useUnmount

只在组件 unmount 时执行的 hook

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

## API

```javascript
useUnmount((fn: () => void));
```

### 参数

| 参数 |         说明         |    类型    | 默认值 |
| :--: | :------------------: | :--------: | :----: |
|  fn  | unmount 时执行的函数 | () => void |   -    |
