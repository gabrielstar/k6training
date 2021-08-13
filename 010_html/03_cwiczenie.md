
żeby stworzyć nowy post na https://red-water-022d04b03.azurestaticapps.net/
i sciagnac go rownolegle

```javascript
    const req_script = parseHTML(res.body);
    req_script.find(‘script’).toArray().forEach(function (item) {
    console.log(item.attr(‘src’));
    // do something
});
```


