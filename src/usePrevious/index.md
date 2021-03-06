---
title: usePrevious
group:
  title: State
  path: /state
  order: 2
---

# usePrevious

获取上次的值

## 代码演示

### 基础用法

<code  hideActions='["CSB", "EXTERNAL"]' title="不传参数" src="./demo/demo1.tsx" />

<code  hideActions='["CSB", "EXTERNAL"]' title="参数为字符串" src="./demo/demo2.tsx" />

## API

```javascript
const { searchParams, searchValues } = useQuery();
```

### 参数

| 参数  |      说明       |                                      类型                                       |         默认值         |
| :---: | :-------------: | :-----------------------------------------------------------------------------: | :--------------------: |
| value | search 的键值对 | string \| URLSearchParams \| string[ ][ ] \| Record<string, string>\| undefined | window.location.search |

### 返回值

|     参数     |              说明               |      类型       |
| :----------: | :-----------------------------: | :-------------: |
| searchParams |    URLSearchParams 实例对象     | URLSearchParams |
| searchValues | search 的对象结构包含所有键值对 |     Object      |
