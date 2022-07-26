# SLICE-PAGINATE

![workflow](https://github.com/capaio/slice-paginate/actions/workflows/test-and-quality.yml/badge.svg)

It returns start and end of slice function to paginate an array

**Example:**

```
const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const elementsPerPage = 5;
const page = 1;
const {start, end} = paginate(monthsArray.length, elementsPerPage, page)

monthsArray.slice(start, end) // ['January', 'February', 'March', 'April', 'May']

```

```
const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const elementsPerPage = 2;
const page = 3;
const {start, end} = paginate(monthsArray.length, elementsPerPage, page)

monthsArray.slice(start, end) // ['May', 'June']
```

## Notes:

* If given page is 0, undefined or negative it returns page 1

```
const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const elementsPerPage = 2;
const page = 0;
const {start, end} = paginate(monthsArray.length, elementsPerPage, page)

monthsArray.slice(start, end) // ['January', 'February']
```

* If given page is greater than max number of possible pages it returns last page
```
const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const elementsPerPage = 3;
const page = 10;
const {start, end} = paginate(monthsArray.length, elementsPerPage, page)

monthsArray.slice(start, end) // ['October', 'November', 'December']
```
