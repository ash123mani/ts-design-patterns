### Basics

- The Proxy design pattern is a class functioning as an interface to another class or object.
- A Proxy could be for anything, such as a network connection, an object in memory, a file, or anything else you need to provide an abstraction between.

### Types of proxies,

    - Virtual Proxy: An object that can cache parts of the real object, and then complete loading the full object when necessary.

    - Remote Proxy: Can relay messages to a real object that exists in a different address space.

    - Protection Proxy: Apply an authentication layer in front of the real object.

    - Smart Reference: An object whose internal attributes can be overridden or replaced.

### Terminology

    Proxy: An object with an interface identical to the real subject. Can act as a placeholder until the real subject is loaded or as gatekeeper applying extra functionality.
    Subject Interface: An interface implemented by both the Proxy and Real Subject.
    Real Subject: The actual real object that the proxy is representing.
    Client: The client application that uses and creates the Proxy.
