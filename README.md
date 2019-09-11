## static-columns##

#Static Columns for Angular2+

Columns with static width mixed with responsive columns are 
not a problem anymore!

How to install:

    npm install static-columns --save


Import it:

    import { StaticColumnsModule } form "static-columns"

Put inside directives array:

    ...
    imports: []StaticColumnsModule
    ...

Example:
	

    <columns-container>
        <column grow >
    	  // responsive columns
          // you also create nested container like this
      </column>
       <column width="190">                        
           // static column here
       </column>
     <columns-container>

![Modules marked](screen.png)


