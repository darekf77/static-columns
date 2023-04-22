## static-columns

# Static Columns for Angular2+ (compatible now with 12+)

Columns with static width mixed with responsive columns are 
not a problem anymore!

How to install:
```
    npm install static-columns --save
```


Import it:
```ts
    import { StaticColumnsModule } form "static-columns/browser"
```

Put inside directives array:
```ts
    // ...
    imports: [StaticColumnsModule]
    // ...
```

# Examples
	
 ## Basic usage:
```html
<columns-container>
  <column grow > <!-- this column will grow/shring based on screen witdh -->
    something
  </column>
  <column width="190">                        
      <button>ZAKRES</button>
  </column>
  <column width="190">                        
      <button-magnifier></button-magnifier>
      <button-bell></button-bell>
      <button-gears></button-gears>
  </column>
</columns-container>
```

![Modules marked](screen.png)


## Hide/show column in mobile view:
```html
<columns-container>
  <column hideMobile >
      I am not visible when screen < 600px
  </column>
  <column  showMobile>                        
      I am visible only when screen < 600px
  </column>
</columns-container>
```
