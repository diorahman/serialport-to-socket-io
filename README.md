# Serial port to socket.io

A simple setup to forward serial port messages to socket.io.

## install

Install node.js, e.g. via nvm.

```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash
```

Hence you'll have node in your path.

## simulation

Using screen and socat,

```bash
$ sudo apt install socat screen
$ sudo socat -d -d pty,link=/dev/ttyS0,raw,echo=0 pty,link=/dev/ttyS1,raw,echo=0
```

Clone the app. And make it run!

```bash
$ git clone git@github.com:diorahman/serialport-to-socket-io.git
$ cd serialport-to-socket-io
$ npm install
$ which node
/home/diorahman/.nvm/versions/node/v0.12.4/bin/node
$ sudo /home/diorahman/.nvm/versions/node/v0.12.4/bin/node server.js
```

```bash
$ sudo screen /dev/ttyS1
```

Then type!

## License

MIT





