# Summary

---

Monorepo that contains a Server, Storybook and MFE Packages. The idea is that one domain will have need of a single server and a single storybook that will serve all of the MFE packages under it. 

# Getting Started - Start All Packages

---

1. `$ git clone [https://github.com/SketchLagoon/create-rs-domain.git](https://github.com/SketchLagoon/create-rs-domain.git)`
2. `$ cd create-rs-domain`
3. `$ yarn install`
4. `$ yarn start:all`

# Getting Started - Start One Package

---

1. `$ git clone [https://github.com/SketchLagoon/create-rs-domain.git](https://github.com/SketchLagoon/create-rs-domain.git)`
2. `$ cd create-rs-domain`
3. `$ yarn install`
4. `$ cd package-name-here`
    1. server
    2. storybook
    3. packages/example-rs-app
    4. packages/example-rs-app-two
5. `$ yarn launch`

## To Kill All Running Processes

`ctrl + c` *will not end processes on exit, use the custom kill:all script instead*

---

1. `$ yarn kill:all`

# Packages

---

Ports will change as we mold each package into the desired product we want them to be - right now the example apps under packages and storybook are just clones of create-rs-app

**Server**

- port 8000

**Storybook**

- port 3001, 3002

**Packages/examples-rs-app**

- port 1001, 1002

**Packages/example-rs-app-two**

- port 2001, 2002