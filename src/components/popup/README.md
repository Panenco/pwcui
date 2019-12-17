# Popup

### Usage

```js
import Popup from '@dropzone/ui';

render() {
  return (
   <Popup title="Some text">Some content</Popup>

   <Popup.Large title="Some text">Some content</Popup.Large>
  );
}
```
<!-- STORY -->

### Properties

* className = css module
* children = content in note
* title = text in title

| propName     | propType | defaultValue | isRequired |
| --------     | -------- | ------------ | ---------- |
| className    | string   | null         | -          |
| children     | node     | -            | +          |
| title        | string   | Title        | -          |


### Sizes


| Size     | px       | 
| -------- | -------- | 
| default  | 320      |
| Large    | 400      |

