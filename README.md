## static-columns

# Static Columns for Angular2+

With this simple library 

**angular / html columns with static width**

mixed with
 
**columns with responsive width**
 
are not a problem anymore!


---
### How to install:
```
    npm install static-columns --save
```


### Import it:
```ts
import { StaticColumnsModule } form "static-columns/browser"
```

### Put module inside angular imports:
```ts

@NgModule(
 // ... 
  imports: [StaticColumnsModule]
  // ... 
)
class MyExampleModule {
 // ... 
}
```

# Examples
	
 ## Basic usage:
```html
<columns-container>
  <column grow > <!-- this column will grow/shring based on screen width -->
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
