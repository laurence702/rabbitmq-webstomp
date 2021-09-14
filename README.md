### rabbitmq-webstomp
- Minimalist service example of publishing notifications to rabbitMQ queue using webstop client

## If having connection issues
```
- Check to make sure you created an exchange, in my case, I named it web-service-endpoint
- Also make sure you create a queue, i named that web-service-endpoint also
- Also be sure to bind the exchange to the particular queue you want to publish messages to
 and you'll see your messages published as you can see in the image below
```
![](https://res.cloudinary.com/jugunu/image/upload/v1631610343/rMQ-webstomp-example.png)

- If you have issues, you can follow along with this guide as did I  :)
https://www.youtube.com/watch?v=NpJS745VtOA&ab_channel=ProgrammingWithSpirit