# yii2-app-vue


for yii2 web application width vueJs 
------------

![Yii and VueJs](https://img.techpowerup.org/200225/yiivue.png)

Installation
------------

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

- `composer create-project aki/yii2-app-vue basic`
- `php yii migrate`
- `npm install`

to the require section of your `composer.json` file.

## Usage

### Development

```bash
npm run dev
```
or

```bash
npm run dev --watch
```

Local Development Server
----- 
If you have PHP installed locally and you would like to use PHP's built-in development server to serve your application, you may use the serve yii command. This command will start a development server at http://localhost:8000:
```
php yii serve
```
Directory components vuejs to:
----- 

```
  assets/             contains assets definition
  commands/           contains console commands (controllers)
  config/             contains application configurations
  controllers/        contains Web controller classes
  mail/               contains view files for e-mails
  models/             contains model classes
  runtime/            contains files generated during runtime
  tests/              contains various tests for the basic application
  vendor/             contains dependent 3rd-party packages
  views/              contains view files for the Web application
    assets/           contains assets files
        js/           contains js files
         components/  contains components vue files
        sass/         contains scss files
  web/                contains the entry script and Web resources
```



