# @cpfarher/react-highlightjs
A wrapper Highlight.js component for React. 
I take the ideas from react-highlight.js npm package but without a lot of dependencies and following the KISS principle
# Installation NPM
```bash
npm install react-highlight.js --save
```

Choose a highlight.js theme and make sure it's included:
```jsx
import '@cpfarher/react-highlightjs/src/highlight-styles/railscasts.css';
```

And then use react-highlightjs to display your text like so:
```jsx
import Highlight from '@cpfarher/react-highlightjs';

<Highlight language={language} showCopy={true}>
  {content}
</Highlight>
```

# License

*@cparher/react-highlightjs* is available under the MIT License.
