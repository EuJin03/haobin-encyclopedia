# HaoBin Encyclopedia

HaoBin Encyclopedia is an API that archieve all the fun facts of Lee Hao Bin

## Usage

Run this code, in a console or from any site:

To GET all Hao Bin facts

```javascript
fetch("https://haobin.herokuapp.com/api/facts")
  .then(response => response.json())
  .then(json => console.log(json));
```

To GET single Hao Bin facts

```javascript
fetch("https://haobin.herokuapp.com/api/facts/:phraseId")
  .then(response => response.json())
  .then(json => console.log(json));
```

To create a new facts regarding Hao Bin

```javascript
fetch("https://haobin.herokuapp.com/api/facts", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(facts),
})
  .then(response => response.json())
  .then(json => console.log(json));
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[ISC](https://choosealicense.com/licenses/isc/)
