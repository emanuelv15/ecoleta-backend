<h1 align="center">
  <br>
    <img src=".github/logo-ecoleta.svg" alt="ecoleta" width="200">
  <br>
  Ecoleta Backend
</h1>

<p align="center">Network design of recyclable waste collection points.</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License MIT">
  </a>
</p>

## 📜 Features

<p>Backend of the Ecoleta application:</p>

<ul>
  <li>Add new collection points;</li>
  <li>See the filtered collection points;</li>
  <li>Display details of a specific collection point;</li>
  <li>See all waste items;</li>
  <li>Validation of data entry;</li>
  <li>Uploade of images.</li>
</ul>

## 🧰 Techs

[//]: # "Add the features of your project here:"

- 💹 **Node.js** — A JavaScript runtime built on Chrome's V8;
- 💼 **React Native** — A framework for building native apps using React;
- ⛏ **Expo** — An open source platform to develop projects for Android and iOS;
- 🔷 **Typescript** — A typed superset of JavaScript.

## 💻 Getting started

<span>
  <center>
  <b>Note: To test the API, it's recommendded to use
    <a href="https://insomnia.rest/download/">Insomnia</a>
  </b>
  </center>
</span>

  <br>

1. Clone this repo using <code>https://github.com/sartero/ecoleta-backend.git</code>
2. Move to the appropiate directory: <code>cd backend</code>
3. Run <code>yarn</code> or <code>npm install</code> to install the dependencies
4. Run <code>knex:migrate</code> to create the tables of the database
5. Run <code>knex:seed</code> to create the seeds
6. Run <code>yarn dev</code> or <code>npm run dev</code> to start the server

## 🤓 How to contribute

<ul>
  <li>Fork this repository;</li>
  <li>Create a branch with your feature: <code>git checkout -b my-feature</code>;</li>
  <li>Commit your changes: <code>git commit -m 'feat: My new feature'</code>;</li>
  <li>Push to your branch: <code>git push origin my-feature</code>.</li>
</ul>

<p>After the merge of your pull request is done, you can delete your branch.</p>

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.

<a href="http://github.com/sartero">Emanuel Vitor Souza</a>
