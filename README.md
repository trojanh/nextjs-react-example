[Preview Available on Netlify](https://netlfiy-react-example.netlify.com)


This Repo demonstrates issue with Netlify routing and a simple hack to fix it.

for redirects
```
[[redirects]]
  from = "/*"
  to = "/error"
  status = 404
```

Netlify should redirect user to `/error` for any route which is not found but for routes starting with `/error` (starting with `to` path) i.e

```
/error__
/error*
```

Netlify still shows its default 404 error page. We can fix this issue by creating `404.html` and adding following code to redirect user to error page

```
    window.location.href = window.location.origin + "/error";
```

