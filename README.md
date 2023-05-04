
# STATIC-COLUMNS - effortless Angular2+ layouts

# forget about flex box complicated rules !

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

## Hide/show column in tablet view:
```html
<columns-container>
  <column hideTablet >
      I am not visible when screen > 600px and < 840 px
  </column>
  <column  showTablet>                        
      I am visible only when screen > 600px and < 840 px
  </column>
</columns-container>
```


## Hide/show column in desktop view:
```html
<columns-container>
  <column hideDesktop >
      I am not visible when screen > 840 px
  </column>
  <column  showDesktop>                        
      I am visible only when screen > 840 px
  </column>
</columns-container>
```
