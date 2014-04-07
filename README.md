foldtable
=========

jquery plugin for folding duplicated rows in table

### Usage

```html
...
<table class="fold-table">
    <thead>
        <tr>
            <th>header</th>
        </tr>
    </thead>
    <tbody>
        <tr data-id="1"><td>1</td><td>data-1</td></tr>
        <tr data-id="1"><td>2</td><td>data-1</td></tr>
        <tr data-id="2"><td>3</td><td>data-2</td></tr>
        <tr data-id="3"><td>4</td><td>data-3</td></tr>
        <tr data-id="1"><td>5</td><td>data-1</td></tr>
        <tr data-id="2"><td>6</td><td>data-2</td></tr>
        <tr data-id="2"><td>7</td><td>data-2</td></tr>
        <tr data-id="1"><td>8</td><td>data-1</td></tr>
        <tr data-id="3"><td>9</td><td>data-3</td></tr>
        <tr data-id="2"><td>10</td><td>data-2</td></tr>
    </tbody>
</table>
...
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min.js" type="text/javascript" ></script>
<script src="js/foldtable.js"></script>
<script>
    $('.fold-table').foldtable({

        // if custom attr needed for identifier
        // identifier: "pd-id"
        
    });
</script>
...
```