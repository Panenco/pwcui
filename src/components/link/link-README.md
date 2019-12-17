# Link

### Usage

```js
import Link from '@panenco/pwcui';

render() {
  return (
    <Link size={Link.size.xl} weight={Link.weight.semiBold} color={Link.color.primary}>Hello world</Link>
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
