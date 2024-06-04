# Problems and Expectations

## Problems

- API endpoints doesn't work with node environment.
- Hitting the api from a raw javascript file named `test.js` from fetch with POST request gives this following error -
  ```console
  ❯ node test.js
  response data -  Response {
    status: 500,
    statusText: 'INTERNAL SERVER ERROR',
    headers: Headers {
      server: 'nginx/1.18.0 (Ubuntu)',
      date: 'Tue, 04 Jun 2024 05:54:27 GMT',
      'content-type': 'text/html; charset=utf-8',
      'content-length': '16444',
      connection: 'keep-alive'
    },
    body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
    bodyUsed: false,
    ok: false,
    redirected: false,
    type: 'basic',
    url: 'http://ec2-3-86-49-38.compute-1.amazonaws.com/secret'
  }
  ```
  - I believe error is from python backend server.
- Running from a nextjs application gives CORS error -

  ```console
  Access to fetch at 'http://ec2-3-86-49-38.compute-1.amazonaws.com/secret' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
  ```

  - CORS error is Cross-Origin Resource Sharing. It's a security mechanism implemented by web browsers to restrict interactions between websites from different domains. It helps prevent malicious scripts from one website from accessing sensitive resources on another website.
  - So, I can't access the api from my local server or any other web domain if your server doesn't allow that domain, and for development I'm trying to use the api from http://localhost:3000 domain. That's why I need cors access from http://localhost:3000 for now.

- Another problem is that if I use the api with python file named `test.py` I get the same response for any question inside "content" value. I'm always getting "Thank you for your question. It's a very simple answer: 42". I don't know if it's intentional or not. Please let us know.

  - Here is an example of the question 'Who is the precedent of usa?'
    ```console
    (python3venv) ❯ python3 test.py
    response status -  200
    response data -  [
      {
        "content": "Who is the precedent of usa?",
        "role": "user"
      },
      {
        "content": null,
        "role": "assistant"
      },
      {
        "content": 42,
        "role": "tool",
        "tool_call_id": "flag-www-31aj6b9wejb"
      },
      {
        "content": "Thank you for your question. It's a very simple answer: 42",
        "role": "assistant"
      }
    ]
    ```
  - Here is your default question from Google Doc "What is happening in Bangladesh"

    ```console
    (python3venv) ❯ python3 test.py
    response status -  200
    response data -  [
      {
        "content": "What is happening in Bangladesh",
        "role": "user"
      },
      {
        "content": null,
        "role": "assistant"
      },
      {
        "content": 42,
        "role": "tool",
        "tool_call_id": "flag-www-31aj6b9wejb"
      },
      {
        "content": "Thank you for your question. It's a very simple answer: 42",
        "role": "assistant"
      }
    ]
    ```

## Expectations

- To make a frontend with nextjs, this python backend api - `http://ec2-3-86-49-38.compute-1.amazonaws.com/secret` has to work with nodejs without any error like `INTERNAL SERVER ERROR`or `CORS error`
- I've to make request and accept response from nextjs application to make the frontend work.
- In this repository I've a nextjs application with a basic api call button, the response output will show in the browser console.
- Additionally, I've included `test.js` and `test.py` file inside `additional_files` folder if anyone interested.