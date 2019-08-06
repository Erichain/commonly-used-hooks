# commonly-used-hooks

Commonly used hooks gallery. Inspired by [awesome-react-hooks](https://github.com/rehooks/awesome-react-hooks).

## Hooks List

### useDimension

`useDimension` hook is used to calculate the size of a DOM element.

```jsx
const RectComponent = () => {
  const [contentRef, contentDimension] = useRequest(fetchList, []);

  const renderContent = () => {
    // render content
  };

  // get the rect of content element
  console.log(contentDimension);

  return (
    <div className="content" ref={contentRef}>
      {renderContent}
    </div>
  );
};
```

### useRequest

`useRequest` hook is used to handle ajax request.
Including `loading` status, and `loadData` action.

```jsx
const ListComponent = () => {
  const fetchList = axios.post('list/api');
  const [listData, loading, loadList] = useRequest(fetchList, []);

  useEffect(() => {
    loadList();
  }, []);

  const renderListItems = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    if (listData.length === 0) {
      return;
    }

    return listData.map(item => <div key={item.id}>{item.name}</div>);
  };

  return <div className="list">{renderListItems}</div>;
};
```

## License

MIT
