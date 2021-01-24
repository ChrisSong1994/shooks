---
title: useDeepCompareEffect
group:
  title: State
  path: /state
  order: 3
---

# useDeepCompareEffect

进行依赖深比较的 useEffect

## 代码演示

### 基础用法

<code  hideActions='["CSB", "EXTERNAL"]' src="./demo/demo1.tsx" title="参比较的useEffect" />

## API

```javascript
useDeepCompareEffect(EffectCallback, [dependens]);
```

### 参数

| 参数 |        说明        |         类型         | 默认值 |
| :--: | :----------------: | :------------------: | :----: |
|  fn  | useEffect callback | React.EffectCallback |  void  |
