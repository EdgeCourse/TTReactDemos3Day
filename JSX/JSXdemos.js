//expression
function MyComponent() {
    const greeting = "Hello, world!";
  
    return (
      <div>
        <h1>{greeting}</h1> {/* Prints "Hello, world!" */}
      </div>
    );
  }

//if, not within JSX

const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myElement = <h1>{text}</h1>;

//short circuit if else
const showDetails = true;

return (
    <div>
        {showDetails && <p>These are the details...</p>}
    </div>
);

//ternary
const x = 5;

const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

//react Fragments long

return (
    <React.Fragment>
        <h1>Title</h1>
        <p>Some content</p>
    </React.Fragment>
);

//React fragments shortcut
return (
    <>
        <h1>Title</h1>
        <p>Some content</p>
    </>
);

//comments in JSX

return (
    <div>
        {/* This is a comment */}
        <p>Hello world!</p>
    </div>
);


//combo with key as index. 
//common but unstable as arrays in JS are dynamic so index might change

const isLoading = true;
const items = ['Item 1', 'Item 2'];

return (
    <div>
        {isLoading ? (
            <p>Loading...</p>
        ) : (
            <> {/* Fragment to group list items */}
                <h2>Items:</h2>
                <ul>
                    {items.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </>
        )}
    </div>
);

//better key

const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' }
  ];
  
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li> 
      ))}
    </ul>
  );

