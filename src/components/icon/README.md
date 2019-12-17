# Icon

### Usage

```js
import Icon from '@panenco/pwcui';

render() {
  return (
   <Icon icon={Icon.icons.iconName} />


  );
}
```

<!-- STORY -->

### Properties

- icon = oneOf(Object.values(Icon.icons))
- className = css module

| propName  | propType             | defaultValue | isRequired |
| --------- | -------------------- | ------------ | ---------- |
| icon      | oneOf(Object.values) | -            | +          |
| className | string               | null         | -          |

### Sizes

| size    | px  |
| ------- | --- |
| default | 18  |
