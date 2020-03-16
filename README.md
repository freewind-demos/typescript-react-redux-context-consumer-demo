TypeScript React Redux "ReactReduxContext.Consumer" Demo
========================================================

This demo is to understand how "ReactReduxContext.Consumer" works.

```
npm install
npm run demo
```

I type in the text field, but nothing happens, how to make it work?

https://stackoverflow.com/questions/60707502/how-is-reactreduxcontext-consumer-working/60707655

Update
------

`ReactReduxContext.Consumer` should be just give us a way to get the `store` without getting it globally.

When state of store changes, our component will be re-rendered automatically,
we have to manually render them like using `store.subscribe`
