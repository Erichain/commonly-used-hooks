# commonly-used-hooks

Commonly used hooks gallery.

## Hooks List

### useDimension

`useDimension` hook is used to calculate the size of a DOM element.

### useRequest

`useRequest` hook is used to handle ajax request.
Including `loading` status, and `loadData` action.

```typescript
const fetchList = axios.post('list/api');
const [listData, loading, loadList] = useRequest(fetchList, []);

useEffect(() => {
  loadList();
}, []);
```

## License

MIT
