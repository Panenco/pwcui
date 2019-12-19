# Text

### Usage

```js
import Text from '@panenco/pwcui';

render() {
  return (
    <Text size={Text.size.xl} weight={Text.weight.semiBold} color={Text.color.primary}>Hello world</Text>
  );
}
```

<!-- STORY -->

### Properties

- `size` - font size
- `weight` - font weight
- `color` - font color
- `children` - text content

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| size     | string   | m            | -          |
| weight   | string   | regular      | -          |
| color    | string   | inherit      | -          |
| children | node     | -            | +          |

### Sizes

| size | px  |
| ---- | --- |
| xs   | 10  |
| s    | 12  |
| m    | 14  |
| l    | 16  |
| xl   | 18  |
| xxl  | 26  |

### Weights

| weight   | value |
| -------- | ----- |
| regular  | 400   |
| semiBold | 600   |
