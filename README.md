# Summary

---

Monorepo that contains a Server, Storybook and MFE Packages. The idea is that one domain will have need of a single server and a single storybook that will serve all of the MFE packages under it. 

# Getting Started - Start All Packages

---

1. `$ git clone https://github.com/SketchLagoon/create-rs-domain.git`
2. `$ cd create-rs-domain`
3. `$ yarn install`
4. `$ yarn start:all`

# Getting Started - Start One Package

---

1. `$ git clone https://github.com/SketchLagoon/create-rs-domain.git`
2. `$ cd create-rs-domain`
3. `$ yarn install`
4. `$ cd package-name-here`
    1. server
    2. storybook
    3. packages/example-feature-package-one
    4. packages/example-feature-package-two
5. `$ yarn launch`

## To Kill All Running Processes

`ctrl + c` *will not end processes on exit, use the custom kill:all script instead*

---

1. `$ yarn kill:all`

# Packages

---

Ports will change as we mold each package into the desired product we want them to be - right now the example apps under packages and storybook are just clones of create-rs-app

**Server**

- Express Server, port 8000

**Storybook**

- Storybook, port 1001
- Federated Modules Server, port 1002

**Packages/example-feature-package-one**

- Storybook, port 2001
- Federated Modules Server, port 2002

**Packages/example-feature-package-two**

- Storybook, port 3001
- Federated Modules Server, port 3002